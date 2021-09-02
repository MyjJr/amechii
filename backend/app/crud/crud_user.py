from sqlalchemy.orm import Session
from typing import Optional

from app.crud.base import CRUDBase
from app.models.user import User
from app.schemas.user import UserCreate, UserUpdate
from app.core.security import get_password_hash, verify_password


class CRUDUser(CRUDBase[User, UserCreate, UserUpdate]):
    def create(self, db_session: Session, *, obj_in: UserCreate) -> User:
        db_obj = User(name=obj_in.name, password=get_password_hash(obj_in.password))
        db_session.add(db_obj)
        db_session.commit()
        db_session.refresh(db_obj)
        return db_obj

    def get_by_name(self, db_session: Session, *, name: str) -> Optional[User]:
        return db_session.query(User).filter(User.name == name).first()

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


user = CRUDUser(User)

if __name__ == "__main__":
    from sqlalchemy import create_engine
    from sqlalchemy.orm import sessionmaker
    from app.core import configlocal
    engine = create_engine(
        configlocal.SQLALCHEMY_DATABASE_URI, encoding='UTF-8', echo=True
    )
    session = sessionmaker(autocommit=False, autoflush=False, bind=engine)

    db: Session = session()
    a = user.get_by_name(db, name="firstuserver")
    b = user.authenticate(db, username="firstuserver", password="firstuserpassword")
    user_in = UserCreate(
        name="Kuroi_Cc",
        password="123456"
    )  # yapf: disable
    useraaa = user.create(db, obj_in=user_in)

    print(useraaa.name)
    print(b)
