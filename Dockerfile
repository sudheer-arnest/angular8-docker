FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install -g @angular/cli@8.3.29 http-server
RUN npm install

COPY . .

RUN npm run build --prod

ENV PORT=3000

EXPOSE 3000

CMD ["sh", "-c", "http-server dist/angular8-docker -p ${PORT} -a 0.0.0.0 --fallback dist/angular8-docker/index.html"]
