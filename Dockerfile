# Stage 1: Build the React application
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy dependency files first to utilize Docker layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Vite project for production (outputs to /app/dist)
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Remove the default Nginx welcome page
RUN rm -rf /usr/share/nginx/html/*

# Copy the built application from the build stage into Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Ensure Nginx listens to incoming traffic on port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
