from sqlalchemy.orm import Session
from app.crud.base import CRUDBase
from app.models.item import Item
from app.schemas.item import ItemCreate, ItemUpdate


class CRUDItem(CRUDBase[Item, ItemCreate, ItemUpdate]):
    def create(self, db_session: Session, *, obj_in: ItemCreate) -> Item:

        db_obj = Item(
            name=obj_in.name,
            image=obj_in.image,
            detail=obj_in.detail,
            price=obj_in.price,
            url=obj_in.url
        )
        db_session.add(db_obj)
        db_session.commit()
        db_session.refresh(db_obj)
        return db_obj


item = CRUDItem(Item)
