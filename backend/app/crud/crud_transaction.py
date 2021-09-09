from sqlalchemy.orm import Session
from sqlalchemy import desc
from fastapi.encoders import jsonable_encoder

from app.crud.base import CRUDBase
from app.models.user import Transaction
from app.schemas.transaction import TransactionCreate, TransactionUpdate, DBTransactionCreate


class CRUDTransaction(CRUDBase[Transaction, TransactionCreate, TransactionUpdate]):
    def create(self, db_session: Session, *, obj_in: TransactionCreate) -> Transaction:
        obj_in_data = jsonable_encoder(obj_in)
        obj_in_data["net_balance"] = obj_in.amount
        db_obj = DBTransactionCreate(**obj_in_data)

        balance = self.get_balance(db_session, obj_in.user_id)

        db_obj.net_balance = balance + db_obj.amount

        return super().create(db_session, obj_in=db_obj)

    def get_balance(self, db_session: Session, user_id: int):
        balance = db_session.query(self.model.net_balance
                                   ).filter(self.model.user_id == user_id
                                            ).order_by(desc(self.model.id)).first()

        if not balance:
            balance = (0,)
        return balance[0]


transaction = CRUDTransaction(Transaction)
