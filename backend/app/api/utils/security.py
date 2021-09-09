from sqlalchemy.orm import Session
from fastapi import Depends, Security
from starlette.requests import Request

from app.core.jwt import validate_token, reusable_oauth2
from app.api.utils.db import get_db


def get_current_user(request: Request, token: str = Security(reusable_oauth2)):
    print(token)
    return request.state.user


def get_validated_current_user(db: Session = Depends(get_db), token: str = Security(reusable_oauth2)):  # yapf: disable
    return validate_token(db, token)
