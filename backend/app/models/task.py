import datetime
from typing import TYPE_CHECKING

import enum
from sqlalchemy.sql.sqltypes import Boolean, Enum
from sqlalchemy.orm import relationship
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey

from app.db.base_class import Base

if TYPE_CHECKING:
    from app.models.user import User  # noqa
    from app.models.item import Item  # noqa
    from app.models.address import Address # noqa


class PriorityType(str, enum.Enum):
    most = "2"
    more = "1"
    normal = "0"


class StatusType(str, enum.Enum):
    not_complete = "not_complete"
    success = "success"
    faild = "faild"


class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    set_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    do_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    address_id = Column(Integer, ForeignKey("addresses.id"), nullable=False)
    title = Column(String(256), index=True, nullable=False)
    deadline = Column(DateTime, nullable=False)
    create_datetime = Column(DateTime, default=datetime.datetime.now)
    end_datetime = Column(DateTime, nullable=True)
    back_money = Column(Boolean, default=True)
    status: Column(Enum(StatusType), nullable=False)

    subtasks = relationship("Subtask", back_populates="tasks")

    do_user = relationship("User", back_populates="do_tasks", primaryjoin="Task.do_id==User.id")  # yapf: disable
    set_user = relationship("User", back_populates="set_tasks", primaryjoin="Task.set_id==User.id")  # yapf: disable
    task_item = relationship("Task_item", back_populates="tasks", primaryjoin="Task.id==Task_item.task_id")  # yapf: disable
    address = relationship("Address", back_populates="tasks")


class Subtask(Base):
    __tablename__ = "subtasks"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    task_id = Column(Integer, ForeignKey("tasks.id"), nullable=False)

    title = Column(String(256), index=True, nullable=False)
    priority: Column(Enum(PriorityType), index=True, nullable=True)
    status: Column(Enum(StatusType), index=True, nullable=False)
    create_datetime = Column(DateTime, default=datetime.datetime.now)
    end_datetime = Column(DateTime)

    tasks = relationship("Task", back_populates="subtasks")


class Task_item(Base):
    __tablename__ = "tasks_items"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    task_id = Column(Integer, ForeignKey("tasks.id"), nullable=False)
    item_id = Column(Integer, ForeignKey("items.id"), nullable=False)

    tasks = relationship("Task", back_populates="task_item", primaryjoin="Task_item.task_id==Task.id")  # yapf: disable
    items = relationship("Item", back_populates="item_task", primaryjoin="Task_item.item_id==Item.id")  # yapf: disable
