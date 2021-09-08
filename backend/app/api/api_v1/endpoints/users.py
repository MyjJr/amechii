from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from app import crud
from app.schemas.user import User, UserCreate, UserInfo, UserInDB, Favourite  # , Following, Follow, FavouriteCreate
from app.models.user import User as DBUser  # , user_following
from app.api.utils.security import get_current_user
from app.api.utils.db import get_db

router = APIRouter()


@router.get("/current-user", response_model=User)
async def get_test_user(  # yapf: disable
    db: Session = Depends(get_db),
    current_user: DBUser = Depends(get_current_user)
):
    current_user.balance = crud.transaction.get_balance(db, current_user.id)
    return current_user


@router.post("/create-user", response_model=UserInDB)
async def user_create(*, db: Session = Depends(get_db), user_in: UserCreate):
    user = crud.user.get_by_name(db, name=user_in.name)
    if user:
        raise HTTPException(
            status_code=400,
            detail="The user with this username already exists in the system.",
        )

    user = crud.user.create(db, obj_in=user_in)

    return user


@router.post("/follow-user", response_model=User)
async def user_follow(
    *,
    db: Session = Depends(get_db),
    current_user: DBUser = Depends(get_current_user),
    id: int
):

    user = crud.user.follow(db, from_user_id=current_user.id, follow_user_id=id)
    user.balance = crud.transaction.get_balance(db, current_user.id)

    return user


@router.delete("/unfollow-user", response_model=User)
async def user_unfollow(
    *,
    db: Session = Depends(get_db),
    current_user: DBUser = Depends(get_current_user),
    id: int
):

    user = crud.user.unfollow(db, from_user_id=current_user.id, unfollow_user_id=id)
    if not user:
        user = crud.user.get(db, current_user.id)
    user.balance = crud.transaction.get_balance(db, current_user.id)

    return user


@router.get("/get-users", response_model=List[User])
async def get_users(
    *,
    db: Session = Depends(get_db),
    name: str,
):
    user_list = crud.user.get_like_name(db, name=name)
    return user_list


@router.get("/get-info", response_model=UserInfo)
async def get_info(
    *, db: Session = Depends(get_db), current_user: DBUser = Depends(get_current_user)
):
    user = crud.user.get_user_info(db, id=current_user.id)
    user.balance = crud.transaction.get_balance(db, current_user.id)
    return user


@router.get("/get-fav", response_model=List[Favourite])
async def get_fav(
    *, db: Session = Depends(get_db), current_user: DBUser = Depends(get_current_user)
):
    fav_list = crud.favourite.get_favourites(db, user_id=current_user.id)
    return fav_list


@router.post("/add-fav", response_model=List[Favourite])
async def add_fav(
    *,
    db: Session = Depends(get_db),
    current_user: DBUser = Depends(get_current_user),
    item_id: int
):
    fav = crud.favourite.add_favourite(db, user_id=current_user.id, item=item_id)
    if not fav:
        raise HTTPException(
            status_code=400,
            detail="This item already exists.",
        )
    fav_list = crud.favourite.get_favourites(db, user_id=current_user.id)
    return fav_list


@router.delete("/del-fav", response_model=List[Favourite])
async def del_fav(
    *,
    db: Session = Depends(get_db),
    current_user: DBUser = Depends(get_current_user),
    item_id: int
):
    crud.favourite.del_favourite(db, user_id=current_user.id, item=item_id)
    fav_list = crud.favourite.get_favourites(db, user_id=current_user.id)
    return fav_list
