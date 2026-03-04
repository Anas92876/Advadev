# Deployment Guide

How to deploy the AdvaDev project to production.

---

## Frontend (Vercel)

Vercel is the recommended host for Next.js apps.

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy on Vercel

1. Go to https://vercel.com and sign in with GitHub
2. Click **"Add New Project"**
3. Import your repository
4. Configure the project:

| Setting          | Value      |
| ---------------- | ---------- |
| Framework Preset | Next.js    |
| Root Directory   | `client`   |
| Build Command    | `npm run build` |
| Output Directory | `.next`    |

5. Add environment variables:

```
NEXT_PUBLIC_API_URL=https://your-backend-url.com/api
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=Advadev
```

6. Click **Deploy**

> Every push to `main` will auto-deploy.

---

## Backend (Railway / Render)

### Option A: Railway

1. Go to https://railway.app and sign in with GitHub
2. Click **"New Project"** > **"Deploy from GitHub Repo"**
3. Select your repository
4. Set the **Root Directory** to `server`
5. Railway auto-detects Node.js. Set the start command:

```
npm run build && npm run start
```

6. Add environment variables (from your `server/.env`):

```
NODE_ENV=production
PORT=5000
CLIENT_URL=https://your-vercel-domain.com
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/advadev
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@advadev.com
ADMIN_EMAIL=hello@advadev.com
```

7. Railway gives you a public URL — use this as `NEXT_PUBLIC_API_URL` in Vercel

### Option B: Render

1. Go to https://render.com and sign in with GitHub
2. Click **"New Web Service"**
3. Connect your repository
4. Configure:

| Setting          | Value                          |
| ---------------- | ------------------------------ |
| Root Directory   | `server`                       |
| Build Command    | `npm install && npm run build` |
| Start Command    | `npm run start`                |
| Environment      | Node                           |

5. Add the same environment variables as listed above
6. Click **Create Web Service**

---

## Database (MongoDB Atlas)

For production, use MongoDB Atlas instead of a local MongoDB instance.

### Step 1: Create a cluster

1. Go to https://cloud.mongodb.com
2. Create a free shared cluster (M0)
3. Create a database user with a strong password

### Step 2: Configure network access

1. Go to **Network Access** > **Add IP Address**
2. For Railway/Render: click **"Allow Access from Anywhere"** (`0.0.0.0/0`)

### Step 3: Get connection string

1. Go to **Database** > **Connect** > **Connect your application**
2. Copy the connection string
3. Replace `<password>` with your database user's password
4. Use this as `MONGODB_URI` in your backend environment variables

---

## Post-Deployment Checklist

- [ ] Frontend loads at your Vercel URL
- [ ] Backend health check works: `https://your-backend.com/health`
- [ ] Contact form sends emails successfully
- [ ] Dark/light theme toggle works
- [ ] All pages load without errors (check browser console)
- [ ] Update `CLIENT_URL` on backend to match your Vercel domain
- [ ] Update `NEXT_PUBLIC_API_URL` on Vercel to match your backend URL

---

## Custom Domain (Optional)

### Vercel
1. Go to your project settings > **Domains**
2. Add your domain (e.g. `advadev.com`)
3. Update DNS records as instructed by Vercel

### Railway / Render
1. Go to your service settings > **Custom Domains**
2. Add your API subdomain (e.g. `api.advadev.com`)
3. Update DNS records as instructed
