# 🔐 NextAuth.js Starter Kit

> **Production-ready authentication system with Google & GitHub OAuth and beautiful UI**

A complete Next.js 15 authentication starter kit built with NextAuth.js, featuring social login, protected routes, and a beautiful dashboard. Perfect for SaaS applications, landing pages, and any project requiring user authentication.

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

### 🛡️ **Route Protection**
- ✅ Protected dashboard route
- ✅ Middleware-based authentication
- ✅ Automatic redirects for unauthorized access
- ✅ Session persistence

### 🎨 **UI/UX**
- ✅ Beautiful dark-themed landing page
- ✅ Professional login page with loading states
- ✅ User dashboard with welcome cards
- ✅ User dropdown navigation
- ✅ Fully responsive design
- ✅ Smooth animations & glassmorphism effects

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
git clone https://github.com/Nexoraedge/NEXT-NEXT_AUTH-STARTER-kit.git
cd NEXT-NEXT_AUTH-STARTER-kit

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
- **Session Extension** - Adds `id` and `role` to user session
- **Extensive Comments** - Step-by-step explanations

### `src/middleware.ts` - Route Protection
Protects routes based on authentication:
- `/dashboard` - All authenticated users ✅
- `/settings` - All authenticated users ✅
- Redirects to `/auth/login` if not authenticated

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

### Add Email/Password Authentication

Follow the detailed instructions in `src/app/auth/login/page.tsx` (commented section)

### Customize the Landing Page

Edit `src/app/page.tsx` to match your brand:
- Update profile information
- Change card links
- Modify color scheme
- Add your own content

---

## 🧪 Testing

### Test Authentication Flow
1. Navigate to `http://localhost:3000`
2. Click "Sign In" button
3. Choose Google or GitHub
4. Complete OAuth flow
5. You'll be redirected to `/dashboard`
6. Verify user info displays correctly

### Test Protected Routes
1. While logged out, try accessing `/dashboard`
2. Should redirect to `/auth/login` ✅
3. After login, access `/dashboard`
4. Should display your dashboard ✅

### Test Sign Out
1. Click user avatar in top right
2. Click "Sign out"
3. Should redirect to `/auth/login`
4. Cannot access `/dashboard` anymore ✅

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

## 🎨 Screenshots

### Landing Page
Beautiful dark-themed landing page with glassmorphism effects

### Login Page
Professional OAuth login with Google and GitHub

### Dashboard
Clean, modern dashboard with user information and getting started guide

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
- GitHub: [@Nexoraedge](https://github.com/Nexoraedge)
- Twitter: [@DhoniDevAi](https://twitter.com/DhoniDevAi)

---

<div align="center">

**⭐ Star this repo if it helped you!**

Made with ❤️ by [DhoniDev-Ai](https://github.com/Nexoraedge)

</div>
