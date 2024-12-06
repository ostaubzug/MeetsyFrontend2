

# MeetsyFrontend
[![CI](https://github.com/ostaubzug/MeetsyFrontend2/actions/workflows/docker-image.yaml/badge.svg)](https://github.com/ostaubzug/MeetsyFrontend2/actions)

[![Docker Pulls](https://img.shields.io/docker/pulls/oli1115/meetsyfrontend)](https://hub.docker.com/r/oli1115/meetsyfrontend)
[![Docker Image Size](https://img.shields.io/docker/image-size/oli1115/meetsyfrontend)](https://hub.docker.com/r/oli1115/meetsyfrontend)


The web app is hosted under https://meetsy-testsrv.prod.projects.ls.eee.intern

You have to be connected to the HSLU VPN / Network to access the page.


todo: Link zum Backend adden.
- node red
- mobile app hinzufügen


# Development


## Run locally

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

## Deploy to Production

Create a docker compose file as follows
```yaml
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
MONGO_INITDB_ROOT_PASSWORD: fajsdfi-asdifa4-ajfaknv-ckkdd
ports:
- "27017:27017"

api:
image: oli1115/meetsyapi:latest
networks:
- meetsy-network
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