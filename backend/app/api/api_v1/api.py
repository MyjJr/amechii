from fastapi import APIRouter

from app.api.api_v1.endpoints import login, users, utils, item

api_router = APIRouter()
api_router.include_router(login.router, prefix="/login", tags=["login"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(utils.router, prefix="/utils", tags=["utils"])
api_router.include_router(item.router, prefix="/items", tags=["items"])
