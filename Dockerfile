# Базовый образ Node.js
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production образ
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma

# Установить Prisma для миграций в runtime
RUN npm install prisma @prisma/client

EXPOSE 3000
CMD ["npm", "run", "start:prod"]
