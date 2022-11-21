import sys

from app.api.api_v1.endpoints import item, login, task, users  # , utils
from fastapi import APIRouter

api_router = APIRouter()
api_router.include_router(login.router, prefix="/login", tags=["login"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(item.router, prefix="/items", tags=["items"])
api_router.include_router(task.router, prefix="/tasks", tags=["tasks"])

# api_router.include_router(utils.router, prefix="/utils", tags=["utils"])

@api_router.get("/alive_check")
def alive_check():
    version = f"{sys.version_info.major}.{sys.version_info.minor}"
    message = f"Hello world! From FastAPI running on Uvicorn with Gunicorn. Using Python {version}"
    response = {"message": message, "is_alive": True}
    
    return response
