# Use Node.js LTS Alpine image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY app/package*.json ./
RUN npm install

# Copy the rest of the app files
COPY app/ .

# Expose the app port
EXPOSE 3000

# Run the app
CMD ["node", "server.js"]

