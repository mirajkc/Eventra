# Eventra

## Project Overview

Eventra is a full-stack event management platform where users can discover events, organizations can host and manage communities, and teams can collaborate through real-time chat, notifications, and analytics.



## Key Features

- 🚀 Organization-first event lifecycle management from creation to attendance.
- 🔐 Secure authentication and protected role-based workflows.
- 💬 Real-time event chat powered by Socket.IO.
- 🏢 Organization membership, roles, and governance tooling.
- 🎟 Registration and participation tracking for events.
- 💳 Credit-based purchasing flow with webhook-ready backend handling.
- 🔔 Notification system for in-app updates and engagement events.
- 📊 Dedicated admin dashboard for platform analytics and moderation.
- 🌐 Responsive user experience across desktop and mobile.

## Tech Stack

### Core Technologies

<p>
	<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js" />
	<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
	<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
	<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
	<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js" />
	<img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white" alt="Express" />
	<img src="https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white" alt="Prisma" />
	<img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL" />
	<img src="https://img.shields.io/badge/Socket.IO-010101?style=flat-square&logo=socketdotio&logoColor=white" alt="Socket.IO" />
	<img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
	<img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker" />
</p>

## Getting Started

### Prerequisites

- Docker and Docker Compose
- Node.js 20+ (for local non-Docker workflow)
- npm or pnpm

### Installation

```bash
git clone git@github.com:mirajkc/Eventra.git
cd eventra
```

### Quick Start (Docker Recommended)

```bash
docker compose up --build
```

Services after startup:

- Main frontend: http://localhost
- Admin dashboard: http://localhost:5173
- Backend API: http://localhost:9000

To stop all services:

```bash
docker compose down
```

### Local Development (Without Docker)

1. Start backend

```bash
cd server
npm install
npm run dev
```

2. Start client

```bash
cd client
npm install
npm run dev
```

3. Start admin dashboard

```bash
cd admin-dashboard
npm install
npm run dev
```

## Environment Configuration

Create environment files in each service directory as needed.

### server/.env

```env
PORT=9000
CLIENT_URL=http://localhost
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DB_NAME
```

### client/.env

```env
NEXT_PUBLIC_BASE_URL=http://localhost:9000/api/v1
NEXT_PUBLIC_SOCKET_BASE_URL=http://localhost:9000
```

### admin-dashboard/.env

```env
VITE_APP_API_BASE_URL=http://localhost:9000/api/v1
```

## Repository Structure

```text
Eventra/
├── admin-dashboard/          # React + Vite admin console
│   ├── src/
│   └── Dockerfile
├── client/                   # Next.js main frontend
│   ├── app/
│   ├── components/
│   └── Dockerfile
├── server/                   # Express + Prisma backend
│   ├── prisma/
│   ├── src/
│   └── Dockerfile
├── nginx/                    # Optional reverse proxy configs
├── docker-compose.yml        # Multi-service orchestration
└── readme.md
```

## API Snapshot

Representative endpoints:

- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`
- `GET /api/v1/event/fetchallevents`
- `POST /api/v1/organization/create-organization`
- `GET /api/v1/user/me`

## Live Preview

[Live Preview](https://eventra-tawny.vercel.app/)

[Admin Dashboard](https://eventra-admin-dashboard.vercel.app/)

---

Built with ❤️ by the Eventra Team.
