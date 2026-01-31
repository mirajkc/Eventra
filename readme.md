# Eventra

Eventra is a comprehensive, modern event management platform designed to streamline the process of creating, managing, and attending events. From real-time chat interactions to organization-level event hosting and a built-in credit system, Eventra provides a seamless experience for both organizers and attendees.

## Key Features

- Robust Authentication\*\*: Secure user registration and login using JWT and bcrypt.
- Organization Management\*\*: Create and manage organizations to host professional events.
- Event Lifecycle\*\*: Full control over event creation, updates, and registration management.
- Real-time Interactions\*\*: Live event chat powered by Socket.IO for instant communication.
- Credit System\*\*: Integrated credits for premium features or event-related transactions.
- Smart Notifications\*\*: Real-time and email notifications to keep users updated.
- Modern UI/UX\*\*: Fully responsive design with Dark and Light mode support, enhanced by Framer Motion and Three.js.
- Cloud-Powered\*\*: Image hosting via Cloudinary and automated emails with Nodemailer.

## Tech Stack

### Frontend

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [Three.js](https://threejs.org/)
- **Real-time**: [Socket.IO Client](https://socket.io/)
- **Form Handling**: React Hook Form + Zod

### Backend

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **Real-time**: [Socket.IO](https://socket.io/)
- **Authentication**: JSON Web Tokens (JWT)
- **Utilities**: Cloudinary (Media), Nodemailer (Emails)

## Project Structure

```bash
Eventra/
├── client/           # Next.js frontend application
│   ├── app/          # App router pages and layouts
│   ├── components/   # Reusable UI components
│   ├── state/        # Redux store and slices
│   └── public/       # Static assets and images
├── server/           # Express backend API
│   ├── src/          # Source code (Controllers, Routes, Services)
│   ├── prisma/       # Database schema and migrations
│   └── dist/         # Compiled JavaScript
└── readme.md         # Documentation
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm
- PostgreSQL database

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/Eventra.git
   cd Eventra
   ```

2. **Setup the Server**:

   ```bash
   cd server
   pnpm install
   ```

   - Create a `.env` file in the `server` directory based on `.env.sample`.
   - Run database migrations:
     ```bash
     npx prisma migrate dev
     ```
   - Start the server:
     ```bash
     pnpm dev
     ```

3. **Setup the Client**:

   ```bash
   cd ../client
   pnpm install
   ```

   - Create a `.env` file in the `client` directory:
     ```env
     NEXT_PUBLIC_BASE_URL=http://localhost:9000/api/v1
     NEXT_PUBLIC_SOCKET_BASE_URL=http://localhost:9000/
     ```
   - Start the development server:
     ```bash
     pnpm dev
     ```

## API Endpoints (v1)

- `POST /api/v1/auth/register` - User Registration
- `POST /api/v1/auth/login` - User Login
- `GET /api/v1/event` - Fetch All Events
- `POST /api/v1/organization` - Create Organization
- `GET /api/v1/user/profile` - Get User Profile

## Live Preview

[Live Preview](https://eventra-tawny.vercel.app/)

---

Built with ❤️ by the Eventra Team.
