FROM node:22.5

WORKDIR /usr/app
COPY ["package.json", "./"]

RUN npm install
COPY . .

RUN npm run build
EXPOSE 3000
CMD ["node", "dist/lib/server.js"]