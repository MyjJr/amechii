from sqlalchemy.orm import Session
from typing import Optional, List

from sqlalchemy.sql.functions import user

from app.crud.base import CRUDBase
from app.models.user import User, user_following
from app.schemas.user import UserCreate, UserUpdate
from app.core.security import get_password_hash, verify_password


class CRUDUser(CRUDBase[User, UserCreate, UserUpdate]):
    def create(self, db_session: Session, *, obj_in: UserCreate) -> User:
        if not obj_in.display_name:
            obj_in.display_name = obj_in.name

        db_obj = User(
            name=obj_in.name,
            display_name=obj_in.display_name,
            icon=obj_in.icon,
            password=get_password_hash(obj_in.password)
        )
        db_session.add(db_obj)
        db_session.commit()
        db_session.refresh(db_obj)
        return db_obj

    def get_by_name(self, db_session: Session, *, name: str) -> Optional[User]:
        return db_session.query(User).filter(User.name == name).first()


    def get_like_user_name(self, db_session: Session, *, name: str) -> List[User]:
        return db_session.query(User).filter(User.name.like(name + "%")).all()

    def get_like_name(self, db_session: Session, *, name: str) -> List[User]:
        search = "%{}%".format(name)
        return db_session.query(User).filter(User.display_name.like(search)).all()


    def authenticate(
        self, db_session: Session,
        *,
        username: str,
        password: str
    ) -> Optional[User]:  # yapf: disable

        user = self.get_by_name(db_session, name=username)
        if not user:
            return None
        if not verify_password(password, user.password):
            return None
        return user

    def follow(self, db_session: Session, *,
               from_user_id: int, follow_user_id: int) -> Optional[User]:  # yapf: disable

        from_user = self.get(db_session, from_user_id)
        follow_user = self.get(db_session, follow_user_id)

        if not (from_user and follow_user):
            return None

        from_user.following.append(follow_user)
        db_session.add(from_user)
        db_session.commit()
        db_session.refresh(from_user)
        return from_user

    def unfollow(self, db_session: Session, *,
                 from_user_id: int, unfollow_user_id: int) -> Optional[User]:  # yapf: disable

        from_user = self.get(db_session, from_user_id)
        unfollow_user = self.get(db_session, unfollow_user_id)

        if not (from_user and unfollow_user and unfollow_user in from_user.following):
            return None

        from_user.following.remove(unfollow_user)
        db_session.add(from_user)
        db_session.commit()
        db_session.refresh(from_user)
        return from_user

    def get_user_info(self, db_session: Session, *, id: int) -> Optional[User]:
        return db_session.query(User).filter(User.id == id).first()


user = CRUDUser(User)
