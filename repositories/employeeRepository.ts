import { prisma } from "../lib/prisma";

export class EmployeeRepository {

async create(

employee:{

fullName:string
jobTitle:string
country:string
salary:number
email:string
department:string

}

){

return prisma.employee.create({

data:employee

});

}

}