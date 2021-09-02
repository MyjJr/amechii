from fastapi import APIRouter
import sys

from app.core import config

router = APIRouter()


@router.get("/")
async def read_root():
    version = f"{sys.version_info.major}.{sys.version_info.minor}"
    message = f"Hello world! From FastAPI running on Uvicorn with Gunicorn. Using Python {version}"
    response = {"message": message}

    # print("\n")
    for name, value in vars(config).items():
        if name[:2] != "__":
            # print('%s=%s' % (name, value))
            response[name] = str(value)

    return response
