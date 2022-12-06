FROM node:16 AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build && npm prune --production

FROM node:16
WORKDIR /app
USER node:node
COPY --from=builder --chown=node:node /app/build ./build
COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --chown=node:node package.json .
ENV PORT 8082
EXPOSE 8082
CMD ["node", "build"]