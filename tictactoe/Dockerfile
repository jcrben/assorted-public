FROM ubuntu:vivid
MAINTAINER Ben Creasy <contact@bencreasy.com>

ENV DEBIAN_FRONTEND noninteractive
ENV NODE_ENV development

RUN apt-get update -y \
    && apt-get -qq -y update \
    && apt-get install -y nodejs vim curl git \
    && apt-get install -y npm \
    && ln -s /usr/bin/nodejs /usr/bin/node \
    && npm install -g bower \
    && npm install -g grunt-cli \
    && mkdir /app

ADD . /app
WORKDIR /app
RUN npm install && cd public \ 
        && bower install --allow-root \
        && cd bower_components/angular-bootstrap \
        && npm install \
        && grunt html2js && grunt build 
ENV NODE_ENV production
CMD node server.js