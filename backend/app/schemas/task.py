from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime


class TaskCreate(BaseModel):
    set_id: int
    do_id: int
    title: str
    deadline: datetime
    back_money: bool = True
    status: str = "not_complete"


class TaskUpdate(BaseModel):
    do_id: Optional[int] = None
    title: Optional[str] = None
    deadline: Optional[datetime] = None
    back_money: Optional[bool] = None
    status: Optional[str] = None


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
    deadline: Optional[datetime] = None
    subtasks: Optional[List[SubTask]] = None
    items: Optional[List[Item]] = None


response: List[TaskRes] = None
