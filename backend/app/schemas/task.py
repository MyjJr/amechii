from typing import List, Optional  # , Dict, TYPE_CHECKING
from pydantic import BaseModel
from datetime import datetime
from app.models.task import StatusType  # , Task_item
from app.schemas.item import Item


class TaskBase(BaseModel):
    title: Optional[str] = None
    deadline: Optional[datetime] = None
    back_money: Optional[bool] = None
    status: Optional[StatusType] = None


class Task(TaskBase):
    id: int
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
    title: str = None
    priority: str = None
    status: str = None


class Task_itemCreate(BaseModel):
    task_id: int
    item_id: int


class Task_itemUpdate(BaseModel):
    pass


class Task_item(BaseModel):
    items: Optional[Item] = None

    class Config:
        orm_mode = True


class SubTask(BaseModel):
    id: int
    task_id: int
    title: str
    priority: Optional[str] = None
    status: Optional[str] = None

    class Config:
        orm_mode = True


class ChangeStatus(BaseModel):
    status: str


class TaskRes(Task):
    from app.schemas.user import UserInDB

    set_user: Optional[UserInDB] = None
    do_user: Optional[UserInDB] = None
    subtasks: Optional[List[SubTask]] = None
    items: Optional[List[Task_item]] = None

    class Config:
        orm_mode = True


class SetTaskRes(TaskRes):
    from app.schemas.user import Address
    address: Address

    class Config:
        orm_mode = True


class FinishTask(BaseModel):
    end_time: datetime
