import { describe, expect, it } from "vitest";
import { Employee } from "@/types/employee";

describe("Employee", () => {
  it("should create an employee with required fields", () => {

    const employee: Employee = {
      id: "1",
      fullName: "John Doe",
      jobTitle: "Software Engineer",
      country: "India",
      salary: 50000,
      email: "john@example.com",
      department: "Engineering",
      createdAt: new Date()
    };

    expect(employee.fullName).toBe("John Doe");

  });
});