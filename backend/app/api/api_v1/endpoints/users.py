from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from app import crud
from app.schemas.user import User, UserCreate
from app.models.user import User as DBUser
from app.api.utils.security import get_current_user
from app.api.utils.db import get_db

router = APIRouter()


@router.get("/testuser", response_model=User)
async def get_test_user(  # yapf: disable
    current_user: DBUser = Depends(get_current_user)
):
    return current_user


@router.post("/create-user", response_model=User)
async def user_create(*, db: Session = Depends(get_db), user_in: UserCreate):
    user = crud.user.get_by_name(db, name=user_in.name)
    if user:
        raise HTTPException(
            status_code=400,
            detail="The user with this username already exists in the system.",
        )

    user = crud.user.create(db, obj_in=user_in)

    return user


@router.get("/get-users", response_model=List[User])
async def get_users(
    *,
    db: Session = Depends(get_db),
    name: str,
    skip: int = 0,
    limit: int = 100,
    order_desc: bool = True
):
    user_list = crud.user.get_like_name(db, name=name, skip=skip, limit=limit, order_desc=order_desc)
    return user_list


