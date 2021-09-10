from pydantic import BaseModel
from typing import Optional


class AddressBase(BaseModel):
    name: str
    phone_number: str
    zipcode: str
    address: str


class AddressCreate(AddressBase):
    user_id: int


class AddressUpdate(BaseModel):
    name: Optional[str] = None
    phone_number: Optional[str] = None
    zipcode: Optional[str] = None
    address: Optional[str] = None


class Address(AddressCreate):
    id: int

    class Config:
        orm_mode = True


class AddressCreateAPI(AddressBase):
    pass
