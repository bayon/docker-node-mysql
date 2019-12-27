FROM node:8

RUN mkdir -p /usr/src/app 
WORKDIR /usr/src/app 

COPY package*.json ./
RUN npm install 

COPY . .

CMD ["npm","start"]

# (7) Crucial Steps:
# 1 import the image 
# make the directory where the work will be done.
# 3 Declare the work directory
# 4 copy everything like a package.json file 
# 5 run npm install in the work directory. 
# 6 copy everything from local directory over to the working directory. 
# 7 run the command npm start.