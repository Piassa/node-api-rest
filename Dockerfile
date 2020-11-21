FROM node:12

WORKDIR /

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install --production --silent && mv node_modules ../

COPY . .

EXPOSE 3001

RUN npm install -g nodemon

CMD npm start