from sqlalchemy_utils import database_exists, create_database

from app.db.session import engine

# from sqlalchemy import create_engine
# from app.core import configlocal
# engine = create_engine(configlocal.SQLALCHEMY_DATABASE_URI, encoding='UTF-8', echo=True)

from app.db import base
from app.schemas.user import UserCreate
from app.core import config
from app import crud


def model_exists(model_class):
    return model_class.metadata.tables[model_class.__tablename__].exists(engine)


def init_db(db_session):
    if not database_exists(engine.url):
        create_database(engine.url)

    if not model_exists(base.User):
        print("start create table")
        base.Base.metadata.create_all(bind=engine)
        print("create table end")

    # user = crud.user.get_by_name(db_session, name=config.FIRST_USER)
    user = None
    if not user:
        print("start create first user")
        user_in = UserCreate(
            name=config.FIRST_USER,
            password=config.FIRST_USER_PASSWORD
        )  # yapf: disable
        user = crud.user.create(db_session, obj_in=user_in)
        db_session.close()
        print("create first user end")
