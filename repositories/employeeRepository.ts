import { prisma } from "../lib/prisma";

export class EmployeeRepository {

  async create(employee: {
    fullName: string;
    jobTitle: string;
    country: string;
    salary: number;
    email: string;
    department: string;
  }) {

    return prisma.employee.create({
      data: employee,
    });

  }

  async findAll() {

    return prisma.employee.findMany();

  }

  async update(
    id:string,
    data:any
  ) {

    return prisma.employee.update({
      where:{ id },
      data
    });

  }

  async delete(id:string) {

    return prisma.employee.delete({
      where:{ id }
    });

  }

}