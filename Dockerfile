# Use an official Node runtime as the parent image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Create a directory for SSL certificates
RUN mkdir -p /app/ssl

# Build the Next.js app
RUN npm run build

# Expose the HTTPS port
EXPOSE 443

# Start the app with the custom HTTPS server
CMD ["node", "server.js"]