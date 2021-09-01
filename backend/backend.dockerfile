FROM tiangolo/uvicorn-gunicorn-fastapi:python3.8-slim
RUN pip install --no-cache-dir pymysql SQLAlchemy sqlalchemy_utils passlib[bcrypt] tenacity 
COPY ./app /app

ENV PYTHONPATH=/

EXPOSE 80