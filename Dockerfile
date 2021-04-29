FROM node:8.9.1-alpine as step01
WORKDIR /Front-End/src
COPY ./package.json /Front-End/src/package.json
RUN npm install
COPY . /Front-End/src
RUN npm run build

FROM nginx:1.13.6
WORKDIR /usr/share/nginx/html
COPY --from=step01 /Front-End/src/dist .