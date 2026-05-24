import { Employee } from "@/types/employee";

export class EmployeeService {

  private employees: Employee[] = [];

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  getEmployees() {
    return this.employees;
  }

}