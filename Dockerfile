FROM node:20-alpine AS builder

RUN mkdir /app

COPY . /app

WORKDIR /app
RUN npm ci
RUN npm run build



FROM node:20-alpine

RUN mkdir /app

COPY --from=builder /app/build /app/build
COPY --from=builder /app/package.json /app/package-lock.json /app/

WORKDIR /app
RUN npm ci

CMD ["node", "build/index.js"]
