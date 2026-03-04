# Email Setup Guide

The AdvaDev contact form sends emails via SMTP. This guide walks you through setting up Gmail as the email provider.

---

## Gmail SMTP Setup

### Step 1: Enable 2-Factor Authentication

1. Go to https://myaccount.google.com/security
2. Under "How you sign in to Google", click **2-Step Verification**
3. Follow the steps to enable it

> You **must** have 2FA enabled to create an App Password.

### Step 2: Generate an App Password

1. Go to https://myaccount.google.com/apppasswords
2. Select app: **Mail**
3. Select device: **Other** (type "AdvaDev Server")
4. Click **Generate**
5. Copy the 16-character password (e.g. `abcd efgh ijkl mnop`)

### Step 3: Update `server/.env`

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=abcdefghijklmnop        # The 16-char app password (no spaces)
SMTP_FROM=noreply@advadev.com
ADMIN_EMAIL=hello@advadev.com     # Where contact form submissions go
```

### Step 4: Test it

1. Start the server: `cd server && npm run dev`
2. Send a test request:

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Hello from the contact form!"}'
```

3. Check your `ADMIN_EMAIL` inbox for the message

---

## Alternative: MongoDB Atlas + No Email

If you just want to run the frontend without email functionality:

- The frontend works independently on `http://localhost:3000`
- The contact form will show an error if the backend isn't running, but everything else works fine
- You can skip the entire server setup if you only need the frontend

---

## Other SMTP Providers

You can use any SMTP provider. Just update the values in `server/.env`:

| Provider   | SMTP_HOST              | SMTP_PORT | SMTP_SECURE |
| ---------- | ---------------------- | --------- | ----------- |
| Gmail      | smtp.gmail.com         | 587       | false       |
| Outlook    | smtp.office365.com     | 587       | false       |
| Yahoo      | smtp.mail.yahoo.com    | 587       | false       |
| SendGrid   | smtp.sendgrid.net      | 587       | false       |
| Mailgun    | smtp.mailgun.org       | 587       | false       |

---

## Troubleshooting

### "Invalid login" error
- Make sure you're using an **App Password**, not your regular Gmail password
- Remove spaces from the app password

### "Less secure apps" warning
- This is outdated — App Passwords bypass this. Just make sure 2FA is enabled

### Emails going to spam
- This is normal for development. In production, set up SPF/DKIM records for your domain
