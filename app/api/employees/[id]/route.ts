import { NextRequest, NextResponse }
from "next/server";

import { EmployeeService }
from "../../../../services/employeeService";

const employeeService=
new EmployeeService();


export async function PUT(

request: NextRequest,
context: {
params: Promise<{
id: string
}>
}

){

const { id } =
await context.params;

const body=
await request.json();

const employee=

await employeeService
.updateEmployee(
id,
body
);

return NextResponse.json(
employee
);

}


export async function DELETE(

_request: NextRequest,
context: {
params: Promise<{
id: string
}>
}

){

const { id } =
await context.params;

await employeeService
.deleteEmployee(
id
);

return NextResponse.json({

message:
"Employee deleted"

});

}