FROM node

WORKDIR /http-server-demo
COPY ./index.js /http-server-demo
COPY ./package.json /http-server-demo

ENTRYPOINT cd /http-server-demo && node index.js