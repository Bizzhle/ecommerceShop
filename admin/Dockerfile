# get the base node image
FROM node:14 as builder

# set the working dir for container
WORKDIR /usr/src/app

# copy the json file first
COPY package.json .

# install npm dependencies
RUN npm install

# copy other project files
COPY . .

# build the folder
RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]