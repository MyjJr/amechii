 
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.models.item import Item
from app.schemas.item import Item
from app.api.utils.db import get_db
from app import crud
router = APIRouter()

@router.get("/get-items", response_model=List[Item])
async def get_items(
    db: Session = Depends(get_db),
    skip: int = 0,
    limit: int = 100,
    order_desc: bool = True
):
    item_list = crud.item.get_multi(db, skip=skip, limit=limit, order_desc=order_desc)
    return item_list