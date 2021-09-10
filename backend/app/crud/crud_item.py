from sqlalchemy.orm import Session
from sqlalchemy import desc
from typing import List

from app.crud.base import CRUDBase
from app.models.item import Item
from app.schemas.item import ItemCreate, ItemUpdate


class CRUDItem(CRUDBase[Item, ItemCreate, ItemUpdate]):
    def get_multi(self, db_session: Session, *, skip=0, limit=100, order_desc=True) -> List[Item]:
        ordre_by_id = self.model.id
        if order_desc:
            ordre_by_id = desc(self.model.id)
        return db_session.query(self.model).order_by(ordre_by_id).offset(skip).limit(limit).all()

    def get_price(self, db_session: Session, item_id_list: List[int]):
        price = 0
        for i in item_id_list:
            price += self.get(db_session, i).price

        return price


item = CRUDItem(Item)
