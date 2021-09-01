from sqlalchemy_utils import database_exists, create_database

from app.db.session import engine
from app.db import base
from app.schemas.user import UserCreate
from app.core import config
from app import crud


def init_db(db_session):
    if not database_exists(engine.url):
        create_database(engine.url)

    print("start create table")
    base.Base.metadata.create_all(bind=engine)
    print("create table end")

    user = None
    if not user:
        print("start create first user")
        user_in = UserCreate(
            name=config.FIRST_USER,
            password=config.FIRST_USER_PASSWORD
        )
        user = crud.user.create(db_session, obj_in=user_in)
        db_session.close()
        print("create first user end")
