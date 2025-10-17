# Stage 1: Build the app
FROM node:20-alpine AS build

WORKDIR /app

# Copy package and config
COPY package*.json tsconfig.json vite.config.ts ./

# Copy Vite entry point and public assets
COPY index.html ./  
COPY public ./public  

# Copy source code
COPY src ./src  

# Install and build
RUN npm ci
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

# Remove default static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
