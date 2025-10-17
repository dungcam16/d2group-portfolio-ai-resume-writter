# Stage 1: Build the app
FROM node:20-alpine AS build

WORKDIR /app

# Copy package and config files
COPY package*.json tsconfig.json tsconfig.app.json vite.config.ts ./

# Copy entry and public assets
COPY index.html ./
COPY public ./public

# Copy source code
COPY src ./src

# Install dependencies and build
RUN npm ci
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
