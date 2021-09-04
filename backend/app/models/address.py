import datetime
from typing import TYPE_CHECKING

from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from app.db.base_class import Base

if TYPE_CHECKING:
    from app.models.task import Task  # noqa
    from app.models.user import User  # noqa


class Address(Base):
    __tablename__ = "addresses"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    name = Column(String(16), nullable=False)
    phone_number = Column(String(16), nullable=False)
    zipcode = Column(String(16), nullable=False)
    address = Column(String(64), nullable=False)

    tasks = relationship("Task", back_populates="address")
    user = relationship("User", back_populates="address")