# 🔐 NextAuth.js Starter Kit

> **Production-ready authentication system with Google & GitHub OAuth, Role-Based Access Control, and beautiful UI**

A complete Next.js 15 authentication starter kit built with NextAuth.js, featuring social login, protected routes, and an admin dashboard. Perfect for SaaS applications, dashboards, and any project requiring user authentication.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![NextAuth.js](https://img.shields.io/badge/NextAuth.js-4.24-purple?style=for-the-badge)](https://next-auth.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

---

## ✨ Features

### 🔐 **Authentication**
- ✅ Google OAuth login
- ✅ GitHub OAuth login  
- ✅ Session management with JWT
- ✅ Secure cookie handling
- ✅ Custom login & error pages
- ✅ Email/Password ready (commented code included)

### 🛡️ **Authorization (RBAC)**
- ✅ USER and ADMIN roles
- ✅ Role-based route protection via middleware
- ✅ Conditional UI based on user role
- ✅ Protected dashboard & admin pages

### 🎨 **UI/UX**
- ✅ Beautiful dark-themed landing page
- ✅ Professional login page with loading states
- ✅ User dashboard with stats & welcome cards
- ✅ Admin dashboard with management features
- ✅ User dropdown navigation with role badges
- ✅ Fully responsive design
- ✅ Smooth animations & transitions

### 👨‍💻 **Developer Experience**
- ✅ **Extensive beginner-friendly comments**
- ✅ **Toggle feature** for easy provider enable/disable
- ✅ TypeScript with full type safety
- ✅ Environment variable validation with Zod
- ✅ Modular, clean code structure
- ✅ Clear error messages
- ✅ Step-by-step setup guide

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Google OAuth credentials (optional)
- GitHub OAuth credentials (optional)

### 1️⃣ Clone & Install

```bash
# Clone the repository
git clone <your-repo-url>
cd nextauth-starter-kit

# Install dependencies
npm install
```

### 2️⃣ Environment Setup

```bash
# Copy the example environment file
cp .env.example .env.local
```

**Generate your AUTH_SECRET:**
```bash
openssl rand -base64 32
```

**Edit `.env.local` and add your credentials:**
```env
AUTH_SECRET=your-generated-secret-here
NEXTAUTH_URL=http://localhost:3000

# Google OAuth (get from https://console.cloud.google.com)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# GitHub OAuth (get from https://github.com/settings/developers)
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

### 3️⃣ Configure OAuth Providers

#### **Google Cloud Console**
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a project → **APIs & Services** → **Credentials**
3. Create **OAuth client ID** (Web application)
4. Add authorized redirect URI:
   ```
   http://localhost:3000/api/auth/callback/google
   ```

#### **GitHub Developer Settings**
1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click **New OAuth App**
3. Set callback URL:
   ```
   http://localhost:3000/api/auth/callback/github
   ```

### 4️⃣ Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/auth/[...nextauth]/route.ts  # NextAuth API handler
│   ├── auth/
│   │   ├── login/page.tsx               # Login page
│   │   └── error/page.tsx               # Error page
│   ├── dashboard/page.tsx               # User dashboard
│   ├── admin/page.tsx                   # Admin dashboard (ADMIN only)
│   ├── layout.tsx                       # Root layout with Providers
│   ├── page.tsx                         # Landing page
│   └── globals.css                      # Global styles
├── components/
│   ├── Providers.tsx                    # SessionProvider wrapper
│   ├── UserAccountNav.tsx               # User dropdown menu
│   └── ui/                              # Shadcn UI components
├── lib/
│   └── auth.ts                          # NextAuth configuration ⭐
├── types/
│   └── next-auth.d.ts                   # TypeScript type extensions
└── middleware.ts                        # Route protection ⭐
```

---

## 🎯 Key Files Explained

### `src/lib/auth.ts` - The Heart of Authentication
This file contains:
- **Provider Toggle Section** - Easy enable/disable for Google/GitHub
- **Role Assignment Logic** - Multiple options for testing ADMIN role
- **Session Extension** - Adds `id` and `role` to user session
- **Extensive Comments** - Step-by-step explanations

### `src/middleware.ts` - Route Protection
Protects routes based on authentication and role:
- `/dashboard` - All authenticated users ✅
- `/admin` - ADMIN role only ✅
- `/settings` - All authenticated users ✅

---

## 🔧 Customization Guide

### Toggle Authentication Providers

In `src/lib/auth.ts`, simply comment out providers you don't want:

```typescript
const providers = [
  // ✅ Google - Enabled
  ...(env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET
    ? [GoogleProvider({...})]
    : []),

  // ❌ GitHub - Disabled (commented out)
  // ...(env.GITHUB_CLIENT_ID && env.GITHUB_CLIENT_SECRET
  //   ? [GitHubProvider({...})]
  //   : []),
]
```

### Assign ADMIN Role

**Option 1: Hardcode for testing**
```typescript
// In src/lib/auth.ts, jwt callback
token.role = "ADMIN" // Everyone is admin
```

**Option 2: Check email**
```typescript
if (user.email === "admin@example.com") {
  token.role = "ADMIN"
} else {
  token.role = "USER"
}
```

**Option 3: Database lookup** (requires database setup)
```typescript
const dbUser = await db.user.findUnique({ where: { email: user.email } })
token.role = dbUser?.role ?? "USER"
```

### Add Email/Password Authentication

Follow the detailed instructions in `src/app/auth/login/page.tsx` (lines 55-110)

---

## 🧪 Testing

### Test USER Role (Default)
1. Login with Google/GitHub
2. Access `/dashboard` ✅ Should work
3. Access `/admin` ❌ Should redirect to dashboard
4. User dropdown should NOT show "Admin Dashboard" link

### Test ADMIN Role
1. Update `src/lib/auth.ts` to assign ADMIN role (see Customization Guide)
2. Restart dev server
3. Login again
4. Access `/dashboard` ✅ Should work
5. Access `/admin` ✅ Should work
6. User dropdown SHOULD show "Admin Dashboard" link

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Update OAuth callback URLs to production domain:
   ```
   https://yourdomain.com/api/auth/callback/google
   https://yourdomain.com/api/auth/callback/github
   ```
5. Deploy! 🚀

### Other Platforms
Works on any platform that supports Next.js:
- Railway
- Render
- AWS Amplify
- Netlify
- Self-hosted

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Authentication**: NextAuth.js v4
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/UI (Radix UI)
- **Icons**: Lucide React
- **Validation**: Zod
- **Fonts**: Geist Sans & Geist Mono

---

## 📚 Documentation

- [NextAuth.js Docs](https://next-auth.js.org/)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Shadcn/UI Docs](https://ui.shadcn.com/)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## ☕ Support the Work

I build these open-source kits to save developers time. If this repo saved you 30 minutes of headache, consider buying me a chai! 👇

### 🎁 Donation Options

**UPI (India):**
```
hardikjain2030@okhdfcbank
```

**PayPal (International):**
```
paypal.me/DhoniDevAi
```

**Or scan the QR code:**

![UPI QR Code](./public/QR-code.png)

*Your support helps me create more open-source tools and tutorials!* ❤️

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [NextAuth.js](https://next-auth.js.org/) for the amazing authentication library
- [Shadcn](https://ui.shadcn.com/) for the beautiful UI components
- [Vercel](https://vercel.com/) for the incredible Next.js framework

---

## 📧 Contact

**DhoniDev-Ai**
- YouTube: [@Dhonidev-ai](https://youtube.com/@Dhonidev-ai/)
- GitHub: [@DhoniDevAi](https://github.com/DhoniDevAi)
- Twitter: [@DhoniDevAi](https://twitter.com/DhoniDevAi)

---

<div align="center">

**⭐ Star this repo if it helped you!**

Made with ❤️ by [DhoniDev-Ai](https://github.com/DhoniDevAi)

</div>
