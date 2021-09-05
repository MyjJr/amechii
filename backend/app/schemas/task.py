from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime


class TaskCreate(BaseModel):
    set_id: int
    do_id: int
    address_id: Optional[int] = None
    title: str
    deadline: datetime
    back_money: bool = True
    status: str = "not_complete"
    item_id_list: List[int] = []


class TaskUpdate(BaseModel):
    do_id: Optional[int] = None
    address_id: Optional[int] = None
    title: Optional[str] = None
    deadline: Optional[datetime] = None
    back_money: Optional[bool] = None
    status: Optional[str] = None


class SubTaskCreate(BaseModel):
    task_id: int
    title: str
    priority: str = "0"
    status: str = "not_complete"


class SubTaskUpdate(BaseModel):
    title: Optional[str] = None
    priority: Optional[str] = None
    status: Optional[str] = None


class Task_itemCreate(BaseModel):
    task_id: int
    item_id: int


class Task_itemUpdate(BaseModel):
    pass


class SubTask(BaseModel):
    id: int
    task_id: int
    title: str = None
    priority: str
    status: str

    class Config:
        orm_mode = True


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
