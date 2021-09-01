from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
import datetime

from app.db.base_class import Base


class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    title = Column(String(256), index=True, nullable=False)
    create_datetime = Column(DateTime, default=datetime.datetime.now)
