FROM node:18.17.0-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the app's source code to the container
COPY . .

# Build the Next app
RUN yarn build

# Expose the port Next.js runs on
EXPOSE 3000

# Serve the production build
CMD ["yarn", "start"]