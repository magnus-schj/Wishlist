FROM node:alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# Install app dpendencies:
COPY frontend/react/main/package.json /app/
COPY frontend/react/main/package-lock.json /app/
RUN yarn install

# Add app:
ADD frontend/react/main/. /app/

# Start app
#CMD ["npm", "start"]
CMD ["yarn", "run", "start"]

EXPOSE 3000
