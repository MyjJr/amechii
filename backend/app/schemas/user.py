from datetime import datetime
from typing import Dict, List, Optional, TYPE_CHECKING
from pydantic import BaseModel
from app.models.user import Favourite
from app.schemas.transaction import Transaction
from app.schemas.address import Address
from app.schemas.item import Item


class UserBase(BaseModel):
    display_name: Optional[str] = None
    icon: Optional[str] = None

    class Config:
        orm_mode = True


class UserCreate(UserBase):
    name: str
    icon: str = "default.png"
    password: str


class UserUpdate(UserBase):
    password: Optional[str] = None


class User(UserBase):
    id: Optional[int] = None
    name: Optional[str] = None
    registration_time: Optional[datetime] = None

    class Config:
        orm_mode = True


class UserLogin(BaseModel):
    name: str
    password: str


class Follow(BaseModel):
    user_id: int
    following: int

    class Config:
        orm_mode = True


class Following(BaseModel):
    following: Optional[List[Follow]] = None

    class Config:
        orm_mode = True


class TaskBase(BaseModel):
    title: Optional[str] = None
    deadline: Optional[datetime] = None
    back_money: Optional[bool] = None


class FavouriteCreate(BaseModel):
    user_id: int
    item_id: int

    class Config:
        orm_mode = True


class FavouriteUpdate(FavouriteCreate):
    pass


class Favourite(BaseModel):
    items: Optional[Item] = None

    class Config:
        orm_mode = True


class UserInfo(User):
    transactions: Optional[List[Transaction]] = None
    #following: Optional[List[Following]] = None
    address: Optional[List[Address]] = None
    items: Optional[List[Favourite]] = None
    
    class Config:
        orm_mode = True