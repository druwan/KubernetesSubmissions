FROM node:alpine

WORKDIR /usr/src/log_output

COPY package* ./

RUN npm ci

COPY . .

CMD ["npm", "start"]