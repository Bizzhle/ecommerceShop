FROM node:15

LABEL version="1.0"
LABEL description="Production image for webshop app"

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "start"]