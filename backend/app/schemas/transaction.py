from datetime import datetime
from typing import Optional
from pydantic import BaseModel


class TransactionBase(BaseModel):
    title: str


class TransactionCreate(TransactionBase):
    amount: int
    net_balance: int
    user_id: int


class TransactionUpdate(TransactionBase):
    pass


class Transaction(TransactionBase):
    id: Optional[int] = None
    user_id: int
    amount: int
    net_balance: int
    time: Optional[datetime] = None
