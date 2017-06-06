FROM node

ENV NODE_ENV=development

RUN npm install forever -g

RUN mkdir -p /opt/freealert-cloud
WORKDIR /opt/freealert-cloud

COPY package.json /opt/freealert-cloud
RUN npm install
COPY . /opt/freealert-cloud

EXPOSE 3000


CMD ["npm", "start"]
