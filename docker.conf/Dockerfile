FROM nginx:1.21.6-alpine

COPY . /usr/share/nginx/html/
COPY ./docker.conf/default.conf  /etc/nginx/conf.d/default.conf

ENV HTML_ENV production

RUN chmod +x /usr/share/nginx/html/env.sh
RUN /usr/share/nginx/html/env.sh