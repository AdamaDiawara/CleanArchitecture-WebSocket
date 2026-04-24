# EcoEats

Node.js + Next.js application with PostgreSQL.

## Stack

Backend: Node.js, TypeScript, Express, Prisma  
Frontend: Next.js 16, React 19, Tailwind  
Database: PostgreSQL  
CI/CD: GitHub Actions, Docker

- Backend: http://localhost:3001
- Frontend: http://localhost:3000
- Database: localhost:5432

### Backend

```bash
cd backend
npm install          # Installer dependences
npm run build        # Compiler TypeScript
npm run start        # démarer le server sur le port :3001
```

### Frontend

```bash
cd frontend
npm install          # Installer les dependences
npm run build        # Build Next.js
npm run start        # démarer le server sur le port :3000
npm run lint         # vérifier de la qualité du code
```

### Database

```bash
psql -U postgres              # Connectern à PostgreSQL
npx prisma migrate deploy     # Exécuter les migrations en attente
npx prisma db push           # Synchroniser le schéma avec la base de donnéese
```

## CI/CD Workflows

- `ci.yml`: Run tests + Trivy security scan on every push
- `cd.yml`: Build Docker images → push to GHCR after CI success
- `deploy.yml`: Manual SSH deployment (requires secrets)
