from sqlalchemy.orm import Session  # , query
# from sqlalchemy import desc
# from fastapi.encoders import jsonable_encoder
from typing import Optional, List

from app.crud.base import CRUDBase
from app.models.user import Favourite
from app.schemas.user import FavouriteCreate, FavouriteUpdate


class CRUDFavourite(CRUDBase[Favourite, FavouriteCreate, FavouriteUpdate]):
    def get_favourites(self, db_session: Session, *, user_id: int) -> Optional[List[Favourite]]:
        return db_session.query(Favourite).filter(Favourite.user_id == user_id).all()

    # お気に入りリストに追加
    def add_favourite(self, db_session: Session, *, user_id: int, item: int) -> Optional[Favourite]:
        favourite_in = FavouriteCreate(
            user_id=user_id,
            item_id=item
        )
        favourite.create(db_session, obj_in=favourite_in)

    # お気に入りリストから削除
    def del_favourite(self, db_session: Session, *, user_id: int, item: int) -> Optional[Favourite]:

        try:
            favourite = db_session.query(Favourite).filter(Favourite.user_id == user_id, Favourite.item_id == item).one().id
            super().remove(db_session, id=favourite)
        except BaseException:
            pass


favourite = CRUDFavourite(Favourite)
