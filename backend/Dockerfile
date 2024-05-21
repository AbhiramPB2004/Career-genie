FROM node:latest
WORKDIR /the/workdir/path
COPY ./package.json ./

RUN npm install
COPY ./ ./
CMD [ "npm","start","server.js"]
	
EXPOSE  3001
