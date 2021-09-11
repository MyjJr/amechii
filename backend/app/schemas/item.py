# 更新時と追加時
from typing import Optional
from pydantic import BaseModel


class ItemBase(BaseModel):
    name: Optional[str] = None
    image: Optional[str] = None
    detail: Optional[str] = None
    price: Optional[int] = None
    url: Optional[str] = None
    category: Optional[str] = None


class ItemCreate(ItemBase):
    name: str
    price: int


class ItemUpdate(ItemBase):
    pass


class Item(BaseModel):
    id: int
    name: str
    category: str
    image: Optional[str] = None
    price: int
    url: Optional[str] = None
    detail: Optional[str] = None

    class Config:
        orm_mode = True
