# Getting Started - AdvaDev Company

## Prerequisites

Make sure you have these installed on your machine:

| Tool       | Version  | Download                          |
| ---------- | -------- | --------------------------------- |
| Node.js    | v18+     | https://nodejs.org                |
| npm        | v9+      | Comes with Node.js                |
| MongoDB    | v6+      | https://www.mongodb.com/try/download/community |
| Git        | Latest   | https://git-scm.com               |

> **Tip:** Run `node -v` and `npm -v` in your terminal to check your versions.

---

## Project Structure

```
AdvaDev Company/
├── client/          # Next.js 16 frontend (React 19, Tailwind CSS)
│   ├── app/         # App Router pages & layouts
│   ├── components/  # Reusable UI components
│   └── public/      # Static assets
├── server/          # Express 5 backend (TypeScript)
│   ├── src/
│   │   ├── config/        # Database config
│   │   ├── controllers/   # Route handlers
│   │   ├── middleware/     # Error handler, logger, etc.
│   │   ├── models/        # Mongoose models
│   │   ├── routes/        # API route definitions
│   │   ├── services/      # Business logic (email, etc.)
│   │   ├── validation/    # Zod schemas
│   │   └── server.ts      # Entry point
│   └── dist/              # Compiled JS (after build)
├── docs/            # Documentation (you are here)
└── logo.svg
```

---

## Quick Start (5 minutes)

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd "AdvaDev Company"
```

### 2. Set up the Client (Frontend)

```bash
# Navigate to client folder
cd client

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

The default `.env` values work for local development — no changes needed:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Advadev
```

### 3. Set up the Server (Backend)

```bash
# Navigate to server folder (from project root)
cd server

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

Now open `server/.env` and configure the required values:

```env
# These defaults work out of the box:
NODE_ENV=development
PORT=5000
CLIENT_URL=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/advadev

# These MUST be configured for the contact form to work:
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com     # <-- Replace
SMTP_PASS=your-app-password         # <-- Replace
ADMIN_EMAIL=hello@advadev.com       # <-- Replace
```

> See [email-setup.md](./email-setup.md) for step-by-step SMTP configuration.

### 4. Start MongoDB

Make sure MongoDB is running locally:

```bash
# Windows (if installed as a service — usually auto-starts)
# Check Services app (services.msc) for "MongoDB Server"

# Or start manually:
mongod
```

> **Alternative:** Use MongoDB Atlas (cloud). Update `MONGODB_URI` in `server/.env` with your Atlas connection string.

### 5. Run the Project

Open **two terminals**:

**Terminal 1 — Backend:**

```bash
cd server
npm run dev
```

You should see:

```
╔═══════════════════════════════════════════╗
║   Advadev API Server                      ║
║   Status: Running                         ║
║   Port: 5000                              ║
║   Environment: development                ║
╚═══════════════════════════════════════════╝
```

**Terminal 2 — Frontend:**

```bash
cd client
npm run dev
```

You should see:

```
▲ Next.js 16.0.3
- Local: http://localhost:3000
```

### 6. Open in browser

Go to **http://localhost:3000** — you should see the AdvaDev website.

Verify the backend is running at **http://localhost:5000/health** — you should get:

```json
{ "status": "ok", "message": "Advadev API server is running" }
```

---

## Available Commands

### Client (`client/`)

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start dev server (port 3000)         |
| `npm run build` | Create production build              |
| `npm run start` | Serve production build               |
| `npm run lint`  | Run ESLint                           |

### Server (`server/`)

| Command              | Description                                |
| -------------------- | ------------------------------------------ |
| `npm run dev`        | Start dev server with hot reload (port 5000) |
| `npm run build`      | Compile TypeScript to `dist/`              |
| `npm run start`      | Run compiled production build              |
| `npm run type-check` | Check TypeScript types without building    |
| `npm run lint`       | Run ESLint on source files                 |
| `npm run lint:fix`   | Auto-fix lint issues                       |
| `npm run format`     | Format code with Prettier                  |

---

## Tech Stack

| Layer    | Technology                                    |
| -------- | --------------------------------------------- |
| Frontend | Next.js 16, React 19, Tailwind CSS 3, TypeScript |
| Backend  | Express 5, TypeScript, Mongoose, Zod          |
| Database | MongoDB                                       |
| Email    | Nodemailer (SMTP / Gmail)                     |
| Icons    | Lucide React                                  |
| Theming  | next-themes (light/dark mode)                 |

---

## Troubleshooting

### Port already in use

```bash
# Find what's using port 3000 or 5000 (Windows):
netstat -ano | findstr :3000
# Then kill the process:
taskkill /PID <PID_NUMBER> /F
```

### MongoDB connection failed

- Make sure MongoDB is running (`mongod` or check Windows Services)
- Check your `MONGODB_URI` in `server/.env`
- For Atlas: make sure your IP is whitelisted in Network Access

### Module not found errors

```bash
# Delete node_modules and reinstall (in the affected folder)
rm -rf node_modules
npm install
```

---

## Next Steps

- [Email Setup Guide](./email-setup.md) — Configure Gmail SMTP for the contact form
- [Deployment Guide](./deployment.md) — Deploy to Vercel + Railway/Render
