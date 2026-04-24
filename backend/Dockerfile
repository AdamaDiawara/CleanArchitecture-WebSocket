# Stage 1: Compilateur - Construit le backend
FROM node:22-alpine3.21 AS builder
WORKDIR /app
COPY package*.json tsconfig.json ./
COPY prisma ./prisma/
RUN npm ci && npm cache clean --force
RUN npx prisma generate  # Génère le client Prisma
COPY src ./src
RUN npm run build  # Génère dist/

# Stage 2: Runtime - Exécute le build (version prod optimisée)
FROM node:22-alpine3.21
WORKDIR /app
# Copie UNIQUEMENT les fichiers nécessaires
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma
EXPOSE 3001
CMD ["node", "dist/index.js"]