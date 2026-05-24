import { describe, expect, it } from "vitest";
import { EmployeeService } from "../services/employeeService";

describe("EmployeeService", () => {

  it("should add employee to employee list", () => {

    const service = new EmployeeService();

    const employee = {

      id:"1",
      fullName:"John Doe",
      jobTitle:"Software Engineer",
      country:"India",
      salary:50000,
      email:"john@example.com",
      department:"Engineering",
      createdAt:new Date()

    };

    service.addEmployee(employee);

    expect(
      service.getEmployees()
    ).toHaveLength(1);

  });

});