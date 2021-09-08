FROM node:14.16.0-stretch-slim

WORKDIR /code
EXPOSE 3000
CMD npm install && npm run build && npm run start