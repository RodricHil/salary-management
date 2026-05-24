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

}