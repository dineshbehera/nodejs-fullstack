FROM node:10-alpine

WORKDIR /app

COPY ./package*.json ./
RUN npm install --production --loglevel verbose

COPY ./ ./
RUN chmod -R a+rw /var/log

EXPOSE 8000
CMD [ "npm", "run", "start"]
