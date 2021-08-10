FROM node:latest

WORKDIR /usr/common_serve

COPY package*.json ./

RUN npm i

COPY ./app /usr/common_serve/app

COPY ./config /usr/common_serve/config

EXPOSE 7001

CMD npm run dev
