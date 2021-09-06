from pydantic import BaseModel
from typing import Optional


class Address(BaseModel):
    user_id: int
    name: str
    phone_number: str
    zipcode: str
    address: str

    class Config:
        orm_mode = True


class AddressUpdate(BaseModel):
    name: Optional[str] = None
    phone_number: Optional[str] = None
    zipcode: Optional[str] = None
    address: Optional[str] = None


class AddressCreate(Address):

    class Config:
        orm_mode = True