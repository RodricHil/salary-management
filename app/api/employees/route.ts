import { NextResponse }
from "next/server";

import { EmployeeService }
from "../../../services/employeeService";

const employeeService =
new EmployeeService();


export async function GET() {

const employees =

await employeeService
.getEmployees();

return NextResponse.json(
employees
);

}


export async function POST(
request:Request
){

const body=
await request.json();

const employee=

await employeeService
.addEmployee(body);

return NextResponse.json(
employee
);

}