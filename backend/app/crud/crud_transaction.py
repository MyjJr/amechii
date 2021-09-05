from app.crud.base import CRUDBase
from app.models.user import Transaction
from app.schemas.transaction import TransactionCreate, TransactionUpdate


class CRUDTransaction(CRUDBase[Transaction, TransactionCreate, TransactionUpdate]):
    pass


transaction = CRUDTransaction(Transaction)
