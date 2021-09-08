from datetime import datetime
from typing import Optional
from pydantic import BaseModel


class TransactionBase(BaseModel):
    title: str = "取引"


class TransactionCreate(TransactionBase):
    amount: int
    user_id: int


class DBTransactionCreate(TransactionCreate):
    net_balance: int


class TransactionUpdate(TransactionBase):
    pass


class Transaction(TransactionBase):
    id: Optional[int] = None
    user_id: int
    amount: int
    net_balance: int
    time: Optional[datetime] = None

    class Config:
        orm_mode = True
