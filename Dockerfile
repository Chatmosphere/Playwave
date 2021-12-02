# Using Node
# node should already be set actually
# read some foo that FROM --platform=linux/amd64 node:14 could help on m1
# FROM node:17 

# Using Playwright Docker as Base
FROM mcr.microsoft.com/playwright:focal

# Create app directory
WORKDIR /app

# Copy and Install dependencies
# Wildcard takes package and package-lock into account
COPY package*.json ./

# copy media files
COPY assets assets/

# RUN npm install
# ci is preferred for automated environments
RUN npm ci

# Copy playwright files
COPY plays/* ./plays/

# Declare Volume for Test-Outputs, e.g. Screenshots
VOLUME /app/output

# Set ENV variables
ENV TARGET_URL=https://localhost:3000
ENV NUMBER_OF_USERS=1
ENV NUMBER_OF_RUNS=1
ENV OUTPUT_PATH=/app/output
ENV TEST_NAME=/app/plays/playwave.js

#CMD ["node", "$TEST_NAME"] // doesn't work, see https://github.com/moby/moby/issues/5509
CMD ["sh", "-c", "node ${TEST_NAME}"]