# from typing import TYPE_CHECKING
from sqlalchemy import Column, Integer, String, DateTime, Table, ForeignKey
from sqlalchemy.orm import relationship
import datetime
from app.db.base_class import Base

# if TYPE_CHECKING:
#     from app.models.task import Task

user_following = Table(
    "user_following", Base.metadata,
    Column("user_id", Integer, ForeignKey("users.id"), nullable=False),
    Column("follwing_id", Integer, ForeignKey("users.id"), nullable=False)
)


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(32), index=True, nullable=False)
    display_name = Column(String(32), index=True, nullable=False)
    icon = Column(String(256), nullable=False)
    password = Column(String(64), nullable=False)
    registration_time = Column(DateTime, default=datetime.datetime.now())

    # tasks = relationship("Task", back_populates="users")

    following = relationship(
        "User",
        lambda: user_following,
        primaryjoin=lambda: User.id == user_following.c.user_id,
        secondaryjoin=lambda: User.id == user_following.c.follwing_id,
        backref="followers"
    )
