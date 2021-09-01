from sqlalchemy.orm import Session

from app.crud.base import CRUDBase
from app.models.user import User
from app.schemas.user import UserCreate, UserUpdate
from app.core.security import get_password_hash


class CRUDUser(CRUDBase[User, UserCreate, UserUpdate]):
    def create(self, db_session: Session, *, obj_in: UserCreate) -> User:
        db_obj = User(name=obj_in.name, password=get_password_hash(obj_in.password))
        db_session.add(db_obj)
        db_session.commit()
        db_session.refresh(db_obj)
        return db_obj


user = CRUDUser(User)
