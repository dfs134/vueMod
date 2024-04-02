FROM node:alpine as builder

WORKDIR app

COPY ./package.json .
RUN npm i --legacy-peer-deps

COPY . .
RUN npm run build

FROM nginx
EXPOSE 8080
COPY --from=builder /app/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html