import datetime
from typing import TYPE_CHECKING

from sqlalchemy.dialects.mysql import INTEGER
from sqlalchemy import Column, Integer, String, DateTime, Table, ForeignKey
from sqlalchemy.orm import relationship

from app.db.base_class import Base

from app.models.address import Address  # noqa
if TYPE_CHECKING:
    from app.models.task import Task  # noqa
    from app.models.item import Item  # noqa


user_following = Table(
    "user_following", Base.metadata,
    Column("user_id", Integer, ForeignKey("users.id"), nullable=False),
    Column("follwing_id", Integer, ForeignKey("users.id"), nullable=False)
)


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(32), index=True, nullable=False, unique=True)
    display_name = Column(String(32), index=True, nullable=False)
    icon = Column(String(256), nullable=False)
    password = Column(String(64), nullable=False)
    registration_time = Column(DateTime, default=datetime.datetime.now())

    do_tasks = relationship("Task", back_populates="do_user", primaryjoin="User.id==Task.do_id")
    set_tasks = relationship("Task", back_populates="set_user", primaryjoin="User.id==Task.set_id")
    address = relationship("Address", back_populates="user")
    transactions = relationship("Transaction", back_populates="user")
    favourites = relationship("Favourite", back_populates="users", primaryjoin="User.id==Favourite.user_id")

    following = relationship(
        "User",
        lambda: user_following,
        primaryjoin=lambda: User.id == user_following.c.user_id,
        secondaryjoin=lambda: User.id == user_following.c.follwing_id,
        backref="followers"
    )


class Favourite(Base):
    __tablename__ = "favourites"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    item_id = Column(Integer, ForeignKey("items.id"), nullable=False)

    users = relationship("User", back_populates="favourites", primaryjoin="Favourite.user_id==User.id")  # yapf: disable
    items = relationship("Item", back_populates="users", primaryjoin="Favourite.item_id==Item.id")  # yapf: disable


class Transaction(Base):
    __tablename__ = "transactions"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    amount = Column(Integer, nullable=False)
    net_balance = Column(INTEGER(unsigned=True), nullable=False)
    time = Column(DateTime, default=datetime.datetime.now)
    title = Column(String(64), default="取引")

    user = relationship("User", back_populates="transactions")
