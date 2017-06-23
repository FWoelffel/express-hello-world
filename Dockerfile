FROM node:6-alpine
RUN mkdir -p /usr/src/hello-world
WORKDIR /usr/src/hello-world
COPY package.json package.json
RUN npm install
COPY . .
EXPOSE 3000
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]
