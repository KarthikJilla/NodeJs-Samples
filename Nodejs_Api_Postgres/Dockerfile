FROM node:7
RUN mkdir /Nodejs_Api
ADD . /Nodejs_Api
WORKDIR /Nodejs_Api
RUN npm i
EXPOSE 80
CMD ["npm", "start"]