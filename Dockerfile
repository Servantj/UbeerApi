FROM node:18-alpine

WORKDIR /UbeerApi
COPY ./package*.json ./
RUN npm ci
COPY . .
RUN chown -R node:node /UbeerApi
USER node

EXPOSE 8080
CMD npm start