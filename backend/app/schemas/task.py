from typing import Dict, List, Optional
from pydantic import BaseModel
from datetime import datetime
from app.models.task import StatusType
from app.schemas.item import Item
from app.schemas.address import Address


class TaskBase(BaseModel):
    title: Optional[str] = None
    deadline: Optional[datetime] = None
    back_money: Optional[bool] = None
    status: Optional[StatusType] = None


class Task(TaskBase):
    create_datetime: datetime
    end_datetime: Optional[datetime] = None


class TaskCreate(TaskBase):
    address_id: Optional[int] = None
    set_id: int
    do_id: Optional[int] = None
    item_id_list: List[int] = []


class TaskUpdate(TaskBase):
    address_id: Optional[int] = None
    do_id: Optional[int] = None


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
    task_id: int
    title: str
    priority: Optional[str] = None
    status: Optional[str] = None

    class Config:
        orm_mode = True


class ChangeStatus(BaseModel):
    status: str


class TaskRes(Task):
    subtasks: Optional[List[SubTask]] = None
    items: Optional[List[Item]] = None


class FinishTask(BaseModel):
    end_time: datetime