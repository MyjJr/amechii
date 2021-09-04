from typing import TYPE_CHECKING

from sqlalchemy import Column, Integer, String
from sqlalchemy.dialects.mysql import INTEGER
from sqlalchemy.orm import relationship

from app.db.base_class import Base

if TYPE_CHECKING:
    from app.models.task import Task_item  # noqa

class Item(Base):
    __tablename__ = "items"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(256), nullable=False)
    image = Column(String(256))
    price = Column(INTEGER(unsigned=True), nullable=False)
    url = Column(String(512))

    item_task = relationship("Task_item", back_populates="items", primaryjoin="Item.id==Task_item.item_id")
