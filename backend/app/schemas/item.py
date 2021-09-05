# 更新時と追加時
from typing import Optional
from pydantic import BaseModel
from sqlalchemy.sql.elements import Null


class ItemBase(BaseModel):
    name: Optional[str] = None
    image: Optional[str] = None
    detail: Optional[str] = None
    price: Optional[int] = None
    url: Optional[str] = None


class ItemCreate(ItemBase):
    name: str
    price: int


class ItemUpdate(ItemBase):
    pass


class Item(ItemCreate):
    id: int
    image: str
    detail: str
    url: str
    detail: str

    class Config:
        orm_mode = True
