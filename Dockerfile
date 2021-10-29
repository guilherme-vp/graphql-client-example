# Stage 1:
FROM node:14-alpine3.14 AS build-stage

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

# Stage 2:
FROM nginx:1.15 AS serve-stage

RUN rm /etc/nginx/conf.d/default.conf

COPY --from=build-stage /nginx/nginx.conf /etc/nginx/conf.d

COPY --from=build-stage /build /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
