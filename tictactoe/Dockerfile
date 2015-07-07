FROM ubuntu:vivid
MAINTAINER Ben Creasy <contact@bencreasy.com>

ENV DEBIAN_FRONTEND noninteractive
ENV NODE_ENV development

RUN apt-get update -y \
    && apt-get -qq -y update \
    && apt-get install -y nodejs vim curl \
    && apt-get install -y npm \
    && ln -s /usr/bin/nodejs /usr/bin/node \
    && mkdir /app

ADD . /app
WORKDIR /app
RUN npm install
ENV NODE_ENV production
CMD node server.js