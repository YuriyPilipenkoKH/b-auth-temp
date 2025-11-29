Instructions for installing Prisma 6.2.1 in a Next.js (App Router) project — including the folder structure, client setup, and dev environment.

✅ 1. Install Prisma (specific version 6.2.1)
In your Next.js project root:

npm install prisma@6.2.1 --save-dev
npm install @prisma/client@6.2.1

✅ 2. Initialize Prisma

npx prisma init

This creates:
/prisma
   schema.prisma
.env

✅ 3. Set your database URL in .env

Example for PostgreSQL:
DATABASE_URL=""

Example for MongoDB:
DATABASE_URL=""

✅ 4. Update your schema.prisma

Example (PostgreSQL):
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id    String   @id @default(uuid())
  email String   @unique
  name  String?
}

✅ 5. Run Prisma migrate (SQL databases)

npx prisma migrate dev --name init

For MongoDB (no migrations):
npx prisma db push

✅ 6. Create a Prisma Client instance with safe hot-reload in Next.js

Create file:
/lib/prisma.ts

import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

✅ 7. Use Prisma Client in your Next.js route handlers / actions

Example:
import { prisma } from "@/lib/prisma";

export async function GET() {
  const users = await prisma.user.findMany();
  return Response.json(users);
}

✅ 8. Use Prisma with Server Actions (Next.js App Router)

"use server";

import { prisma } from "@/lib/prisma";

export async function createUser(email: string, name?: string) {
  return prisma.user.create({
    data: { email, name },
  });
}

✅ 9. Open Prisma Studio (GUI)

npx prisma studio
