import { NextResponse }
from "next/server";

import { EmployeeService }
from "../../../services/employeeService";

const employeeService =
new EmployeeService();


export async function GET(
request:Request
){

const {

searchParams

}=

new URL(
request.url
);

const employees=

await employeeService
.getEmployees({

search:

searchParams.get(
"search"
)||"",

country:

searchParams.get(
"country"
)||"",

jobTitle:

searchParams.get(
"jobTitle"
)||"",


page:

searchParams.get("page")

?

Number(
searchParams.get("page")
)

:

undefined,

limit:

searchParams.get("limit")

?

Number(
searchParams.get("limit")
)

:

undefined

});

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