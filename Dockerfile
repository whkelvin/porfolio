FROM node:20-alpine AS builder

RUN mkdir /app

COPY . /app

WORKDIR /app
RUN npm ci --omit dev
RUN npm run build



FROM node:20-alpine

RUN mkdir /app

COPY --from=builder /app/build /app/build
COPY --from=builder /app/package.json /app/package-lock.json /app/

WORKDIR /app
RUN npm ci --omit dev 

CMD ["node", "build/index.js"]
