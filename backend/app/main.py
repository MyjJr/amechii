from fastapi import FastAPI, Depends
from starlette.middleware.cors import CORSMiddleware
from starlette.requests import Request
from starlette.responses import Response
from sqlalchemy.orm import Session

from app.core import config
from app.db.session import session

from app.api.utils.db import get_db
from app import crud

app = FastAPI()

origins = [
    "http://localhost",
    "null"
]  # yapf: disable

origin_regex = "http://localhost:[0-9]+"

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_origin_regex=origin_regex,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.middleware("http")
async def db_session_middleware(request: Request, call_next):  # 数据库会话中间件
    response: Response = Response("Internal server error", status_code=500)
    try:
        request.state.db = session()  # 本地会话
        response = await call_next(request)
    finally:
        request.state.db.close()
    return response


@app.get("/")
async def read_root():
    version = f"{sys.version_info.major}.{sys.version_info.minor}"
    message = f"Hello world! From FastAPI running on Uvicorn with Gunicorn. Using Python {version}"
    response: Response = {"message": message}

    print("\n")
    for name, value in vars(config).items():
        if name[:2] != "__":
            print('%s=%s' % (name, value))
            response[name] = str(value)

    return response


@app.get("/testuser")
async def get_test_user(  # yapf: disable
    db: Session = Depends(get_db),
):
    res = crud.user.get(db, 1)
    print(res)
    return res


if __name__ == "__main__":
    print("\n\n============================================================")
    for name, value in vars(config).items():
        if name[:2] != "__":
            print('%s=%s' % (name, value))
    print("============================================================\n\n")
    pass
