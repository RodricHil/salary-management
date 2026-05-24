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

  it("should update employee salary", () => {

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

    service.updateEmployee("1",{
        salary:70000
    });

    const updatedEmployee =
      service.getEmployees()[0];

    expect(
      updatedEmployee.salary
    ).toBe(70000);

});

it("should delete employee", () => {

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

    service.deleteEmployee("1");

    expect(
      service.getEmployees()
    ).toHaveLength(0);

});

});