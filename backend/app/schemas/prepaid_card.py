from pydantic import BaseModel


class PrepaidCardCreate(BaseModel):
    number: str
    price: int
    used: bool = False


class PrepaidCardUpdate(BaseModel):
    used: bool
