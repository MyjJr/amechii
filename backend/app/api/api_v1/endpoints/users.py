from fastapi import APIRouter, Depends
# from sqlalchemy.orm import Session

# from app.api.utils.db import get_db
from app.schemas.user import User
from app.models.user import User as DBUser
from app.api.utils.security import get_current_user

router = APIRouter()


@router.get("/testuser", response_model=User)
async def get_test_user(  # yapf: disable
    current_user: DBUser = Depends(get_current_user)
):
    return current_user
