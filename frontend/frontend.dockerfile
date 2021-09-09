FROM node:14.16.0-stretch-slim
COPY . /code

WORKDIR /code
EXPOSE 3000
# CMD npm install && npm run build && npm run start
CMD npm install && npm run dev