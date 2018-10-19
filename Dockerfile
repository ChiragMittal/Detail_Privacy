FROM node:9

# ENV NPM_CONFIG_LOGLEVEL warn
WORKDIR /src/app.js

RUN npm install -g serve
COPY . .
RUN npm install


EXPOSE 8080

CMD npm run dev

