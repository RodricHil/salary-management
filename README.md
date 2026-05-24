# Salary Management System

Salary Management System is a Next.js 16 application with:

- Frontend: App Router pages and UI components
- Backend: Next.js API routes under `/api/*`
- Database: Prisma + SQLite

## Prerequisites

- Node.js 20+
- npm 10+

## 1. Install Dependencies

```bash
npm install
```

## 2. Configure Environment

Create a `.env` file in the project root:

```env
DATABASE_URL="file:./prisma/dev.db"
```

## 3. Setup Database

Run migration and seed data:

```bash
npx prisma migrate dev
npx prisma db seed
```

Optional Prisma commands:

```bash
npx prisma studio
npx prisma generate
```

## 4. Run Frontend + Backend (Development)

This project uses one Next.js dev server for both frontend and backend.

```bash
npm run dev
```

App URL:

- http://localhost:3000

Backend API examples (same server):

- GET http://localhost:3000/api/employees
- POST http://localhost:3000/api/employees
- PUT http://localhost:3000/api/employees/:id
- DELETE http://localhost:3000/api/employees/:id

## 5. Run Production Build

```bash
npm run build
npm run start
```

## Tests

```bash
npm test
```

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Prisma ORM
- SQLite (better-sqlite3 adapter)
- Vitest
