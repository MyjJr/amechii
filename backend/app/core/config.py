import os

TEST_ENV_VAR = os.getenv("TEST_ENV_VAR")
PROJECT_NAME = os.getenv("PROJECT_NAME")

API_ROOT_PATH = os.getenv("API_ROOT_PATH")

MARIADB_SERVER = os.getenv("MARIADB_SERVER")
MARIADB_DATABASE = os.getenv("MARIADB_DATABASE")

MARIADB_USER = os.getenv("MARIADB_USER")
MARIADB_PASSWORD = os.getenv("MARIADB_PASSWORD")

SQLALCHEMY_DATABASE_URI = (
    f"mysql+pymysql://{MARIADB_USER}:{MARIADB_PASSWORD}@{MARIADB_SERVER}/{MARIADB_DATABASE}"
)

FIRST_USER = os.getenv("FIRST_USER")
FIRST_USER_PASSWORD = os.getenv("FIRST_USER_PASSWORD")

SECRET_KEY = os.getenv("SECRET_KEY")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES"))

ICON_SERVER_PATH = os.getenv("ICON_SERVER_PATH")
ITEM_IMAGE_SERVER_PATH = os.getenv("ITEM_IMAGE_SERVER_PATH")

INSERT_DEMO_DATA = os.getenv("INSERT_DEMO_DATA")

if __name__ == "__main__":
    print()
    print(TEST_ENV_VAR)
