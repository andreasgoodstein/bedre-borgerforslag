FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json /usr/src/app

RUN npm ci --production

COPY ./src /usr/src/app/src

CMD ["npm", "start"]