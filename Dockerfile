# Stage 1: Build the app
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json tsconfig.json vite.config.ts ./
COPY src ./src
COPY public ./public

RUN npm ci
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

# Remove default site
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
