FROM node:16

WORKDIR /usr/crud-user-service

COPY package*.json ./
RUN npm install

COPY prisma prisma
RUN npx prisma migrate deploy
RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]