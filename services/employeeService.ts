import { EmployeeRepository }
from "../repositories/employeeRepository";

export class EmployeeService {

  private repository =
    new EmployeeRepository();

  async addEmployee(
    employee:any
  ){

    return this.repository.create(
      employee
    );

  }

  async getEmployees(){

    return this.repository.findAll();

  }

  async updateEmployee(
    id:string,
    data:any
  ){

    return this.repository.update(
      id,
      data
    );

  }

  async deleteEmployee(
    id:string
  ){

    return this.repository.delete(
      id
    );

  }

}