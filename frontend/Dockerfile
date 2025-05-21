# FROM node:22 AS build
# WORKDIR /app
# COPY . .
# RUN npm install && npm run build

FROM node:22 AS build

WORKDIR /app

# Copy only package.json + lock file first to cache npm install
COPY package*.json ./

# Install dependencies
RUN npm install

# Now copy the rest of the code
COPY . .

# Build the project
RUN npm run build
