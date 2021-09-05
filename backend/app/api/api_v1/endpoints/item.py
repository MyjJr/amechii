from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

from app import crud
from app.schemas.item import Item
from app.api.utils.db import get_db
from app.core import config

router = APIRouter()


@router.get("/get-items", response_model=List[Item])
async def get_items(
    db: Session = Depends(get_db),
    skip: int = 0,
    limit: int = 100,
    order_desc: bool = True
):
    task_list = crud.item.get_multi(db, skip=skip, limit=limit, order_desc=order_desc)
    for i in task_list:
        i.image = config.ITEM_IMAGE_SERVER_PATH + i.image
    return task_list
