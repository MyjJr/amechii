from datetime import datetime, timedelta
from typing import Optional, Tuple

from sqlalchemy.orm import Session
from fastapi import HTTPException
from fastapi.security import OAuth2PasswordBearer
from starlette.requests import Request
from jose import jwt, JWTError

from app import crud
from app.core import config
from app.schemas.token import TokenPayload

ALGORITHM = "HS256"
access_token_jwt_subject = "access"
reusable_oauth2 = OAuth2PasswordBearer(tokenUrl=config.API_ROOT_PATH + "/login/token")  # yapf: disable

credentials_exception = HTTPException(
    status_code=403,
    detail="Could not validate credentials",
)


def create_access_token(*, data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire, "sub": access_token_jwt_subject})
    encoded_jwt = jwt.encode(to_encode, config.SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def get_authorization_scheme_param(authorization_header_value: str) -> Tuple[str, str]:
    if not authorization_header_value:
        return "", ""
    scheme, _, param = authorization_header_value.partition(" ")
    return scheme, param


def check_token(request: Request):

    authorization: str = request.headers.get("Authorization")
    scheme, param = get_authorization_scheme_param(authorization)
    if not authorization or scheme.lower() != "bearer":
        raise credentials_exception
    return param


def validate_token(db: Session, token: str):

    try:
        payload = jwt.decode(token, config.SECRET_KEY, algorithms=[ALGORITHM])
        token_data = TokenPayload(**payload)
    except JWTError:
        raise credentials_exception
    user = crud.user.get(db, id=token_data.user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    return user
