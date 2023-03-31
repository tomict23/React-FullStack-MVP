FROM node:18.7.0

WORKDIR /

COPY package*.json ./

RUN npm install -g nodemon
RUN npm install

COPY . .

EXPOSE 8000

CMD [ "nodemon", "express_server.js" ]