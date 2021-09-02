from sqlalchemy.orm import Session
from typing import Optional

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

    def get_by_name(self, db_session: Session, *, name: str) -> Optional[User]:
        return db_session.query(User).filter(User.name == name).first()


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
    t = db.query(User).all()
    print(t[0].id)
