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

async getEmployees({

search="",
country="",
jobTitle="",
page,
limit

}:{

search?:string
country?:string
jobTitle?:string
page?:number
limit?:number

}){

return this.repository.findAll(

search,
country,
jobTitle,
page,
limit

);

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