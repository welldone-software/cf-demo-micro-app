FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install webpack -g
COPY package.json /usr/src/app/
RUN npm install --silent
COPY ./client/package.json /usr/src/app/client/
RUN cd client && npm install --silent
COPY . /usr/src/app

RUN cd client && npm run build

CMD [ "npm", "start" ]