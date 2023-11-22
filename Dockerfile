FROM node:18-alpine as build

WORKDIR /build

COPY package.json ./

RUN yarn --non-interactive

COPY . .

RUN yarn build

FROM node:18-alpine

WORKDIR /app

COPY --chown=node:node --from=build /build/dist ./dist

COPY --chown=node:node --from=build /build/node_modules ./node_modules

CMD ["node", "/app/dist/index.js"]
