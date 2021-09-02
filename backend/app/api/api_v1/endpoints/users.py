from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.api.utils.db import get_db
from app import crud

router = APIRouter()


@router.get("/testuser")
async def get_test_user(  # yapf: disable
    db: Session = Depends(get_db),
):
    res = crud.user.get(db, 1)
    print(res)
    return res
