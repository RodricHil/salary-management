import "dotenv/config";

import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { faker } from "@faker-js/faker";
import fs from "fs";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function seed() {
  const firstNames = fs
    .readFileSync("./prisma/first_names.txt", "utf-8")
    .split("\n")
    .map(name => name.trim())
    .filter(Boolean);

  const lastNames = fs
    .readFileSync("./prisma/last_names.txt", "utf-8")
    .split("\n")
    .map(name => name.trim())
    .filter(Boolean);

  const countries = [
    "India",
    "USA",
    "Canada",
    "Germany",
    "Japan",
  ];

  const jobs = [
    "Developer",
    "Manager",
    "Designer",
    "QA Engineer",
    "HR",
  ];

  const employees = [];

  for (let i = 0; i < 10000; i++) {
    const first = faker.helpers.arrayElement(firstNames);

    const last = faker.helpers.arrayElement(lastNames);

    employees.push({
      fullName: `${first} ${last}`,
      jobTitle: faker.helpers.arrayElement(jobs),
      country: faker.helpers.arrayElement(countries),
      salary: faker.number.int({
        min: 30000,
        max: 150000,
      }),
      email: `employee${i}@company.com`,
      department: faker.commerce.department(),
    });
  }

  await prisma.employee.createMany({
    data: employees,
  });

  console.log("10000 employees inserted");
}

seed()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });