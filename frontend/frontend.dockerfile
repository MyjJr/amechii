FROM node:14.16.0-stretch-slim
COPY . /code

WORKDIR /code
EXPOSE 3000


RUN npm install
CMD node checkBackend.mjs && npm run build && npm run start