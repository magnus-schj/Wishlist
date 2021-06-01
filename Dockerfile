FROM node:alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_ENV=production
# ENV NODE_ENV=development

# Install app dpendencies:
COPY frontend/react/main/package.json ./
COPY frontend/react/main/package-lock.json ./
RUN yarn import
RUN yarn install
RUN yarn add react
#RUN npm install -g npm@7.15.1
#RUN npm install --production

# Add app:
ADD frontend/react/main/. ./

# Start app
#CMD ["npm", "start"]
CMD ["yarn", "run", "start"]

EXPOSE 3000
