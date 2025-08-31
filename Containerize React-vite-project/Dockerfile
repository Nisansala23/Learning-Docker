# use the base image from Docker Hub
FROM node:current-alpine3.21

#set the working directory
WORKDIR /app

#copy the package.json and package-lock.json files
COPY package*.json ./

#Install the dependencies
RUN npm install

#copy the rest of the application file
COPY . .

#Expose the port your app wil run on 
EXPOSE 5173

#Start the apllication
CMD [ "npm", "run", "dev" ]