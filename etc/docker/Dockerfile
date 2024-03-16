FROM node:18.17.0

WORKDIR /directus
# Copy project
COPY . .

# Install dependencies
RUN npm i
#RUN npm install --include=optional sharp

EXPOSE 8055

CMD [ "npx", "directus", "start"]
