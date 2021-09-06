from pydantic import BaseModel
from typing import Optional


class AddressCreate(BaseModel):
    user_id: int
    name: str
    phone_number: str
    zipcode: str
    address: str


class AddressUpdate(BaseModel):
    name: Optional[str] = None
    phone_number: Optional[str] = None
    zipcode: Optional[str] = None
    address: Optional[str] = None


class Address(AddressCreate):
    
    class Config:
        orm_mode = True