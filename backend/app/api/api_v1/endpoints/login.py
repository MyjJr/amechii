from fastapi import APIRouter, Depends, HTTPException
from starlette.status import HTTP_401_UNAUTHORIZED
from sqlalchemy.orm import Session
from datetime import timedelta

from app.schemas.token import Token
from app.schemas.user import User, UserLogin
from app.models.user import User as DBUser
from app import crud
from app.core import config
from app.core.jwt import create_access_token
from app.api.utils.db import get_db
from app.api.utils.security import get_validated_current_user

router = APIRouter()


@router.post("/access-token", response_model=Token)
async def login_access_token(*, db: Session = Depends(get_db), form_data: UserLogin):
    """
    OAuth2 compatible token login, get an access token for future requests
    """
    user = crud.user.authenticate(
        db, username=form_data.name, password=form_data.password
    )

    if not user:
        raise HTTPException(
            status_code=HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=config.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(data={"user_id": user.id}, expires_delta=access_token_expires)  # yapf: disable

    return {"access_token": access_token, "token_type": "bearer"}


@router.get("/test-token", response_model=User)
def test_token(current_user: DBUser = Depends(get_validated_current_user)):
    """
    Test access token
    """
    return current_user
