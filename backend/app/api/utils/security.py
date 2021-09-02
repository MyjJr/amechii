from sqlalchemy.orm import Session
from fastapi import Depends, Security, HTTPException
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from starlette.status import HTTP_403_FORBIDDEN

from app import crud
from app.core import config
from app.schemas.token import TokenPayload
from app.core.jwt import ALGORITHM
from app.api.utils.db import get_db

reusable_oauth2 = OAuth2PasswordBearer(tokenUrl=config.API_ROOT_PATH + "/login/access-token")  # yapf: disable


def get_current_user(
    db: Session = Depends(get_db), token: str = Security(reusable_oauth2)
):
    credentials_exception = HTTPException(
        status_code=HTTP_403_FORBIDDEN,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )

    try:
        payload = jwt.decode(token, config.SECRET_KEY, algorithms=[ALGORITHM])
        print("\n\n\n\n", payload)
        token_data = TokenPayload(**payload)
        print("\n\n\n\n", token_data.user_id)
    except JWTError:
        raise credentials_exception
    user = crud.user.get(db, id=token_data.user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user
