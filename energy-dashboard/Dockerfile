ARG BUILD_FROM
FROM $BUILD_FROM

# Install Node.js and npm
RUN apk add --no-cache nodejs npm

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Debug: List files
RUN ls -la ./

# Install dependencies with verbose logging
RUN npm install --verbose || npm install --legacy-peer-deps --verbose

# Copy all source files
COPY . .

# Debug: Check if src exists
RUN ls -la ./src/ || echo "src directory not found"

# Build the React app with verbose output
RUN npm run build --verbose

# Install serve to serve the built app
RUN npm install -g serve

# Debug: Check if dist exists
RUN ls -la ./dist/ || echo "dist directory not found"

# Expose port
EXPOSE 8080

# Copy run script
COPY run.sh /
RUN chmod a+x /run.sh

CMD [ "/run.sh" ]