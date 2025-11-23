# Base image
FROM node:18-alpine

# Working directory
WORKDIR /app

# Copy package.json aur lock file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy baki code
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "index.js"]
