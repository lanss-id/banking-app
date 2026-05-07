# Horizon — Modern Banking Platform

<div align="center">

![Horizon Banking](https://img.shields.io/badge/Horizon-Banking%20Platform-2563eb?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyTDIgN2wxMCA1IDEwLTV6TTIgMTdsOCA0IDgtNE0yIDEybDggNCA4LTQiLz48L3N2Zz4=)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?style=for-the-badge&logo=vercel)](https://banking-app-sepia.vercel.app)

**A full-featured, modern banking platform that lets users connect multiple bank accounts, view real-time transactions, and transfer money — all in one place.**

[🌐 Live Demo](https://banking-app-sepia.vercel.app) · [📁 Repository](https://github.com/lanss-id/banking-app) · [🐛 Report Bug](https://github.com/lanss-id/banking-app/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [Third-Party Services Setup](#-third-party-services-setup)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [License](#-license)

---

## 🔍 Overview

**Horizon** is a modern, full-stack banking platform built with Next.js 14. It allows users to securely connect their existing bank accounts via Plaid, monitor transactions in real time, and transfer funds to other users through Dwolla — all within a clean, responsive interface.

This project integrates multiple financial services and demonstrates real-world patterns for authentication, third-party API integration, and secure data handling in a production-grade Next.js application.

---

## ✨ Features

- **🔐 Secure Authentication** — SSR-based authentication using Appwrite, with session management and protected routes.
- **🏦 Bank Account Linking** — Connect real bank accounts via Plaid Link integration.
- **📊 Interactive Dashboard** — View total balance, income, and expenses across all linked accounts with Chart.js visualizations.
- **💸 Funds Transfer** — Transfer money to other Horizon users through Dwolla's ACH payment network.
- **📄 Transaction History** — Paginated, filterable transaction history with category labels per bank account.
- **📱 Fully Responsive** — Optimized layout for desktop, tablet, and mobile.
- **🛡️ Error Monitoring** — Integrated with Sentry for real-time error tracking on client, server, and edge.

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS, shadcn/ui, Radix UI |
| **Auth & Database** | Appwrite (Cloud) |
| **Bank Linking** | Plaid API |
| **Payments** | Dwolla API |
| **Forms** | React Hook Form + Zod |
| **Charts** | Chart.js, react-chartjs-2 |
| **Error Monitoring** | Sentry |
| **Deployment** | Vercel |

---

## 🏗 Architecture

```
User Browser
     │
     ▼
Next.js 14 (App Router + SSR)
     │
     ├─► Appwrite Cloud       → Auth, User data, Bank & Transaction records
     ├─► Plaid API            → Bank account linking & transaction sync
     └─► Dwolla API           → ACH money transfers between users
```

All sensitive operations (Plaid token exchange, Dwolla transfers) run server-side via Next.js Server Actions, keeping API keys out of the client bundle.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** `>= 18.x`
- **npm** `>= 9.x` (or yarn/pnpm/bun)
- Accounts on: [Appwrite Cloud](https://cloud.appwrite.io), [Plaid Dashboard](https://dashboard.plaid.com), [Dwolla Sandbox](https://accounts-sandbox.dwolla.com)

### Installation

```bash
# Clone the repository
git clone https://github.com/lanss-id/banking-app.git
cd banking-app

# Install dependencies
npm install
```

### Environment Variables

Copy the example env file and fill in your credentials:

```bash
cp .env.example .env.local
```

```env
# ── App ────────────────────────────────────────────────
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# ── Appwrite ───────────────────────────────────────────
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=<your-appwrite-project-id>
APPWRITE_DATABASE_ID=<your-database-id>
APPWRITE_USER_COLLECTION_ID=<your-user-collection-id>
APPWRITE_BANK_COLLECTION_ID=<your-bank-collection-id>
APPWRITE_TRANSACTION_COLLECTION_ID=<your-transaction-collection-id>
NEXT_APPWRITE_KEY=<your-appwrite-api-key>

# ── Plaid ──────────────────────────────────────────────
PLAID_CLIENT_ID=<your-plaid-client-id>
PLAID_SECRET=<your-plaid-sandbox-secret>
PLAID_ENV=sandbox
PLAID_PRODUCTS=auth,transactions,identity
PLAID_COUNTRY_CODES=US

# ── Dwolla ─────────────────────────────────────────────
DWOLLA_KEY=<your-dwolla-key>
DWOLLA_SECRET=<your-dwolla-secret>
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox
```

> ⚠️ Never commit `.env.local` to version control. It's already in `.gitignore`.

### Running the App

```bash
# Development
npm run dev

# Production build
npm run build
npm run start

# Lint
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔧 Third-Party Services Setup

### Appwrite

1. Create a project at [cloud.appwrite.io](https://cloud.appwrite.io).
2. Create a **Database** with four collections: `users`, `banks`, `transactions` (note the IDs).
3. Add the required attributes to each collection as per the app's schema.
4. Generate an **API Key** with database read/write permissions.
5. Add `http://localhost:3000` to the **Platforms** allowed list.

### Plaid

1. Sign up at [dashboard.plaid.com](https://dashboard.plaid.com) and get your **Client ID** and **Sandbox Secret**.
2. Set `PLAID_ENV=sandbox` for local development.
3. Set `PLAID_PRODUCTS=auth,transactions,identity` and `PLAID_COUNTRY_CODES=US`.

### Dwolla

1. Create a sandbox account at [accounts-sandbox.dwolla.com](https://accounts-sandbox.dwolla.com).
2. Get your **App Key** and **App Secret** from the dashboard.
3. Set `DWOLLA_ENV=sandbox` and `DWOLLA_BASE_URL=https://api-sandbox.dwolla.com` for local dev.

---

## 📁 Project Structure

```
banking-app/
├── public/
│   └── icons/              # SVG icons and static assets
├── src/
│   ├── app/                # Next.js App Router pages & layouts
│   ├── components/         # Reusable UI components
│   ├── lib/                # Server actions, API clients, utils
│   └── types/              # Global TypeScript type definitions
├── .env.example            # Environment variable template
├── components.json         # shadcn/ui configuration
├── next.config.mjs         # Next.js configuration
├── sentry.*.config.ts      # Sentry config (client/server/edge)
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 🌐 Deployment

This app is deployed on **Vercel**. To deploy your own instance:

1. Push your repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Add all environment variables from `.env.example` in the Vercel dashboard.
4. Deploy — Vercel handles the build automatically.

> Remember to update `NEXT_PUBLIC_SITE_URL` to your production domain and whitelist it in Appwrite's platform settings.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Built by [Alan (lanss-id)](https://github.com/lanss-id) · [LinkedIn](https://linkedin.com/in/lanss-id)

</div>
