# Dockerfile for running the react frontend
FROM node:22-alpine

COPY package.json /usr/frontend/.
WORKDIR /usr/frontend

RUN npm config set legacy-peer-deps true
RUN npm install

COPY . /usr/frontend

EXPOSE 3000
