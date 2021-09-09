from fastapi import APIRouter

from app.api.api_v1.endpoints import login, users, item, task, utils

api_router = APIRouter()
api_router.include_router(login.router, prefix="/login", tags=["login"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(item.router, prefix="/items", tags=["items"])
api_router.include_router(task.router, prefix="/tasks", tags=["tasks"])

api_router.include_router(utils.router, prefix="/utils", tags=["utils"])
