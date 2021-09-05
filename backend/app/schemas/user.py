from datetime import datetime
from typing import Optional
from pydantic import BaseModel


class UserBase(BaseModel):
    display_name: Optional[str] = None


class UserCreate(UserBase):
    name: str
    icon: str = "default.png"
    password: str


class UserUpdate(UserBase):
    icon: str = None
    password: Optional[str] = None


class User(UserBase):
    id: Optional[int] = None
    name: Optional[str] = None
    icon: str = None
    registration_time: Optional[datetime] = None

    class Config:
        orm_mode = True


class UserLogin(BaseModel):
    name: str
    password: str
