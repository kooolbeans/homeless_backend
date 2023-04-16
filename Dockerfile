FROM node:18.16.0-slim

ENV PORT=4000

WORKDIR /var/app/homeless

COPY . /

RUN npm install

EXPOSE $PORT

CMD [ "npm", "start" ]