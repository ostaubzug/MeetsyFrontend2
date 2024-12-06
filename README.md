# MeetsyFrontend
[![CI](https://github.com/ostaubzug/MeetsyFrontend2/actions/workflows/docker-image.yaml/badge.svg)](https://github.com/ostaubzug/MeetsyFrontend2/actions)

[![Docker Pulls](https://img.shields.io/docker/pulls/oli1115/meetsyfrontend)](https://hub.docker.com/r/oli1115/meetsyfrontend)
[![Docker Image Size](https://img.shields.io/docker/image-size/oli1115/meetsyfrontend)](https://hub.docker.com/r/oli1115/meetsyfrontend)


The web app is hosted under https://meetsy-testsrv.prod.projects.ls.eee.intern

You have to be connected to the HSLU VPN / Network to access the page.

## Backend
The API Repository is hosted here:
https://github.com/ostaubzug/MeetsyAPI


# Development


## Run locally

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

## Deployment

Set you environment variables in a `.env` file

```sh
echo "MONGO_PASSWORD=your_new_password_here" > .env
```

Add your certificates. In this example we are using self signed certificates.

```sh
#!/bin/bash

# Create directory for certificates if it doesn't exist
sudo mkdir -p /etc/nginx/ssl

# Generate private key and certificate for the frontend (nginx)
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
-keyout /etc/nginx/ssl/nginx-selfsigned.key \
-out /etc/nginx/ssl/nginx-selfsigned.crt \
-subj "/C=US/ST=State/L=City/O=Organization/CN=your-domain.com"

# Generate private key and certificate for the API
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
-keyout /etc/nginx/ssl/api-selfsigned.key \
-out /etc/nginx/ssl/api-selfsigned.crt \
-subj "/C=US/ST=State/L=City/O=Organization/CN=api.your-domain.com"

# Set proper permissions
sudo chmod 644 /etc/nginx/ssl/*.crt
sudo chmod 640 /etc/nginx/ssl/*.key

# List generated files
ls -l /etc/nginx/ssl/
```

Create a docker compose file as follows
```yaml
version: '3'

networks:
  meetsy-network:
    name: meetsy-network

services:
  mongo:
    image: mongo
    restart: always
    networks:
      - meetsy-network
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: ${MONGO_PASSWORD}
    ports:
      - "27017:27017"

  api:
    image: oli1115/meetsyapi:latest
    networks:
      - meetsy-network
    environment:
      MONGO_PASSWORD: ${MONGO_PASSWORD}
    ports:
      - "8080:8080"
      - "8443:8443"
    volumes:
      - /etc/nginx/ssl:/app/ssl:ro
    depends_on:
      - mongo

  frontend:
    image: oli1115/meetsyfrontend:latest
    networks:
      - meetsy-network
    ports:
      - "443:443"
    volumes:
      - /etc/nginx/ssl:/etc/nginx/ssl
    depends_on:
      - api

```
In the same directory run
```sh
docker compose up
```

# Move from the proposed Collection
If you want to move a message from the proposed collection to the official Collection
you can use the following post request
```sh
https://meetsy-testsrv.prod.projects.ls.eee.intern:8443/moveProposedMessage/your_message_id
```