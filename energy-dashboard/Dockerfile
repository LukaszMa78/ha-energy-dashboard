ARG BUILD_FROM
FROM $BUILD_FROM

# Install Node.js and npm
RUN apk add --no-cache nodejs npm

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY bun.lockb* ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the React app
RUN npm run build

# Install serve to serve the built app
RUN npm install -g serve

# Expose port
EXPOSE 8080

# Copy run script
COPY run.sh /
RUN chmod a+x /run.sh

CMD [ "/run.sh" ]