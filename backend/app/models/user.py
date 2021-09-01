from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import relationship
import datetime

from app.db.base_class import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(32), index=True, nullable=False)
    password = Column(String(64), nullable=False)
    registration_time = Column(DateTime, default=datetime.datetime.now)

    tasks = relationship("app.models.task.Task", backref="users")
