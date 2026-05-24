import { Employee } from "../types/employee";

export class EmployeeService {

  private employees: Employee[] = [];

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  getEmployees() {
    return this.employees;
  }

  updateEmployee(
    id:string,
    updates: Partial<Employee>
  ){

    const employee =
      this.employees.find(
        emp => emp.id===id
      );

    if(employee){

      Object.assign(
        employee,
        updates
      );

    }

  }

  deleteEmployee(id:string){

    this.employees =
      this.employees.filter(
        employee =>
        employee.id!==id
      );

  }

}