FROM mhart/alpine-node
COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/
WORKDIR /opt/app
COPY . /opt/app
EXPOSE 3000
CMD ["npm", "run", "start"]