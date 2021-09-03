from datetime import datetime
from typing import Optional
from pydantic import BaseModel


class UserBase(BaseModel):
    name: Optional[str] = None


class UserCreate(UserBase):
    name: str
    password: str


class UserUpdate(UserBase):
    password: Optional[str] = None


class UserLogin(BaseModel):
    username: str
    password: str


class User(UserBase):
    id: Optional[int] = None
    registration_time: Optional[datetime] = None

    class Config:
        orm_mode = True
