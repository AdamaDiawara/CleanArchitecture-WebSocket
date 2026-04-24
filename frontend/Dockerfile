# Stage 1: Compilateur (~500MB) - Construit l'app
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci && npm cache clean --force
COPY . .
RUN npm run build  # Génère .next/

# Stage 2: Runtime (~100MB) - Exécute seulement le build
FROM gcr.io/distroless/nodejs22-debian12:nonroot
WORKDIR /app

COPY --from=builder --chown=nonroot:nonroot /app/.next ./.next
COPY --from=builder --chown=nonroot:nonroot /app/public ./public
COPY --from=builder --chown=nonroot:nonroot /app/package*.json ./
COPY --from=builder --chown=nonroot:nonroot /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]
