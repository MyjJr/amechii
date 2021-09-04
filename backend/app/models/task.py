# import datetime
# from typing import TYPE_CHECKING

# import enum
# from sqlalchemy.sql.sqltypes import Enum
# from sqlalchemy.orm import relationship
# from sqlalchemy import Column, Integer, String, DateTime, ForeignKey

# from app.db.base_class import Base

# if TYPE_CHECKING:
#     from app.models.user import User

# class Task(Base):
#     __tablename__ = "tasks"

#     id = Column(Integer, primary_key=True, index=True, autoincrement=True)
#     user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
#     title = Column(String(256), index=True, nullable=False)
#     create_datetime = Column(DateTime, default=datetime.datetime.now)

#     subtasks = relationship("Subtask", back_populates="tasks")
#     users = relationship("User", back_populates="tasks")

# class PriorityType(str, enum.Enum):
#     most = "2"
#     more = "1"
#     normal = "0"

# class StatusType(str, enum.Enum):
#     not_complete = "not_complete"
#     success = "success"
#     faild = "faild"

# class Subtask(Base):
#     __tablename__ = "subtasks"

#     id = Column(Integer, primary_key=True, index=True, autoincrement=True)
#     task_id = Column(Integer, ForeignKey("tasks.id"), nullable=False)

#     title = Column(String(256), index=True, nullable=False)
#     priority : Column(Enum(PriorityType), index=True, nullable=True)
#     status : Column(Enum(StatusType), index=True, nullable=False)
#     create_datetime = Column(DateTime, default=datetime.datetime.now)
#     end_datetime = Column(DateTime)

#     tasks = relationship("Task", back_populates="subtasks")
