from typing import List, Optional, Type
from pydantic import BaseModel
import datetime

Datetime = Type(datetime)


class SubTask(BaseModel):
    id: int
    title: str = None
    memo: str
    deadline: datetime


class Item(BaseModel):
    id: int
    name: str
    imag_url: str
    price: int
    description: str
    num: int


class TaskRes(BaseModel):
    id: int
    title: str
    memo: Optional[str] = None
    deadline: Optional[Datetime] = None
    subtasks: Optional[List[SubTask]] = None
    items: Optional[List[Item]] = None


response: List[TaskRes] = None
