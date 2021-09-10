from sqlalchemy import Column, Integer, String
from sqlalchemy.sql.sqltypes import Boolean

from app.db.base_class import Base


class PrepaidCard(Base):
    __tablename__ = "prepaid_cards"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    number = Column(String(16), index=True, nullable=False)
    price = Column(Integer, nullable=False)
    used = Column(Boolean, default=False, nullable=False)
