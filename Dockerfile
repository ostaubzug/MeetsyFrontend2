# Build stage
FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage with Nginx
FROM nginx:alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY certs/certificate.crt /etc/nginx/ssl/
COPY certs/private.key /etc/nginx/ssl/
COPY nginx.conf /etc/nginx/conf.d/default.conf