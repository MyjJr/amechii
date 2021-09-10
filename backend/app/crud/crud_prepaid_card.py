from sqlalchemy.orm import Session
from typing import Optional

from app.crud.base import CRUDBase
from app.models.prepaid_card import PrepaidCard
from app.schemas.prepaid_card import PrepaidCardCreate, PrepaidCardUpdate
from app.schemas.transaction import TransactionCreate
from app.crud.crud_transaction import transaction


class CardNotFound(Exception):
    def __init__(self):
        self.message = "Card not Found"


class CardUsed(Exception):
    def __init__(self):
        self.message = "Card already uesd"


class CRUDPrepaidCard(CRUDBase[PrepaidCard, PrepaidCardCreate, PrepaidCardUpdate]):
    def charge(self, db_session: Session, *, card_number: str, user_id: int) -> Optional[PrepaidCard]:
        prepaid_card = db_session.query(PrepaidCard).filter(PrepaidCard.number == card_number).first()
        if not prepaid_card:
            raise CardNotFound
        if prepaid_card.used:
            raise CardUsed

        transaction_in = TransactionCreate(amount=prepaid_card.price, user_id=user_id, title="チャージ")
        self.update(db_session, db_obj=prepaid_card, obj_in=PrepaidCardUpdate(used=True))
        transaction_out = transaction.create(db_session, obj_in=transaction_in)
        return transaction_out


prepaid_card = CRUDPrepaidCard(PrepaidCard)
