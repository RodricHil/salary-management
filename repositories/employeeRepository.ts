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

  async findAll(
    search = "",
    country = "",
    jobTitle = "",
    page?: number,
    limit?: number
  ) {
    return prisma.employee.findMany({
      where: {
        fullName: {
          contains: search,
        },
        country: country ? country : undefined,
        jobTitle: jobTitle ? jobTitle : undefined,
      },
      skip: page && limit ? (page - 1) * limit : undefined,
      take: limit,
    });
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