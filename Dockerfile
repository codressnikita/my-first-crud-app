FROM node:21-alpine

RUN mkdir /app

COPY package.json /app/
COPY . /app/

WORKDIR /app

RUN npm install

CMD ["npm", "start"]
