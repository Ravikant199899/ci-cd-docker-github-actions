# Use Node.js 20 LTS Alpine image (lightweight base)
FROM node:20-alpine

# Install curl for healthcheck and debugging
RUN apk add --no-cache curl

# Set working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY app/package*.json ./
RUN npm install --production

# Copy the rest of the app files
COPY app/ .

# Expose the application port
EXPOSE 3000

# Start the Node.js app
CMD ["node", "server.js"]

