import { NextResponse }
from "next/server";

import { EmployeeService }
from "../../../../services/employeeService";

const employeeService=
new EmployeeService();


export async function PUT(

request:Request,
{params}:{
params:{
id:string
}
}

){

const body=
await request.json();

const employee=

await employeeService
.updateEmployee(
params.id,
body
);

return NextResponse.json(
employee
);

}


export async function DELETE(

request:Request,
{params}:{
params:{
id:string
}
}

){

await employeeService
.deleteEmployee(
params.id
);

return NextResponse.json({

message:
"Employee deleted"

});

}