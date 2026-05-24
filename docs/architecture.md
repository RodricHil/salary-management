# Architecture

## Overview

This application follows a layered architecture:

UI Layer
↓
API Layer
↓
Service Layer
↓
Repository Layer
↓
Prisma ORM
↓
SQLite Database

---

## Responsibilities

### UI Layer

Responsible for:

- Employee management
- Dashboard analytics
- Search
- Filtering
- Pagination

---

### API Layer

Responsible for:

- Request handling
- Response formatting

---

### Service Layer

Responsible for:

- Business logic
- Salary calculations
- Employee operations

---

### Repository Layer

Responsible for:

- Database operations
- Prisma abstraction

---

### Database

SQLite with Prisma ORM