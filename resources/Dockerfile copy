# production stage
FROM nginx:stable-alpine
COPY ./dist /usr/share/nginx/html
EXPOSE 80
COPY ./resources/default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
