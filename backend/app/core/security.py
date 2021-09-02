from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def verify_password(plain_password: str, hashed_password: str):
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password: str):
    return pwd_context.hash(password)


if __name__ == "__main__":
    print(get_password_hash("firstuserpassword"))
    print(verify_password("firstuserpassword", "$2b$12$YKBNB7yXNZOQtn0Y2pu7TObK7URobFKgEV9KklRiVBqzvNRuMDUsm"))
