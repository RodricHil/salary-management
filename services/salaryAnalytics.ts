import { Employee } from "../types/employee";

export class SalaryAnalytics {

private filterByCountry(
employees:Employee[],
country:string
){

return employees.filter(
emp=>emp.country===country
);

}

getMinSalary(
employees:Employee[],
country:string
){

return Math.min(
...this.filterByCountry(
employees,
country
)
.map(emp=>emp.salary)
);

}

getMaxSalary(
employees:Employee[],
country:string
){

return Math.max(
...this.filterByCountry(
employees,
country
)
.map(emp=>emp.salary)
);

}

getAverageSalary(
employees:Employee[],
country:string
){

const filtered=
this.filterByCountry(
employees,
country
);

const total=
filtered.reduce(
(sum,emp)=>
sum+emp.salary,
0
);

return total/
filtered.length;

}

getAverageSalaryByRole(
employees:Employee[],
jobTitle:string,
country:string
){

const filtered=
this.filterByCountry(
employees,
country
).filter(
emp=>emp.jobTitle===jobTitle
);

const total=
filtered.reduce(
(sum,emp)=>
sum+emp.salary,
0
);

return total/
filtered.length;

}

getMedianSalary(
employees:Employee[]
){

const salaries=
employees
.map(
emp=>emp.salary
)
.sort(
(a,b)=>a-b
);

const middle=
Math.floor(
salaries.length/2
);

if(
salaries.length%2===0
){

return (

salaries[middle-1]+
salaries[middle]

)/2;

}

return salaries[middle];

}


getTotalPayroll(
employees:Employee[]
){

return employees.reduce(

(sum,employee)=>

sum+employee.salary,

0

);

}


getEmployeeCountByCountry(
employees:Employee[],
country:string
){

return employees.filter(

employee=>

employee.country===country

).length;

}

}