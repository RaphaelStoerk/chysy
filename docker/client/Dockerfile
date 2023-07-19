# Image
FROM node:18-alpine

# Curl
RUN apk add --update curl

# Set up work directory
WORKDIR /var/www/client

# Configure host
ENV HOST 0.0.0.0

# Init command
#ENTRYPOINT ["tail", "-f", "/dev/null"]
CMD ["sh", "-c", "yarn install && yarn dev"]
