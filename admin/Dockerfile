FROM node

LABEL description="Dashboard for Webshopper"
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install                                                     
COPY . .
RUN ls -l

EXPOSE 5000

CMD ["npm", "run",  "start"]