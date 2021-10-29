# Stage 1:
FROM node:14-alpine3.14 AS build-stage

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

# Stage 2:
FROM nginx:1.15

COPY --from=build-stage /build /usr/share/nginx/html

COPY --from=build-stage nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
