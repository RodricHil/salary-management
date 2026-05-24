import { describe, expect, it } from "vitest";
import { SalaryAnalytics } from "../services/salaryAnalytics";

describe("SalaryAnalytics",()=>{

const employees=[

{
id:"1",
fullName:"John",
jobTitle:"Developer",
country:"India",
salary:50000,
email:"john@test.com",
department:"Engineering",
createdAt:new Date()
},

{
id:"2",
fullName:"David",
jobTitle:"Developer",
country:"India",
salary:70000,
email:"david@test.com",
department:"Engineering",
createdAt:new Date()
},

{
id:"3",
fullName:"Mike",
jobTitle:"Designer",
country:"USA",
salary:100000,
email:"mike@test.com",
department:"Design",
createdAt:new Date()
}

];

it("should return minimum salary for a country",()=>{

const analytics=
new SalaryAnalytics();

expect(
analytics.getMinSalary(
employees,
"India"
)
).toBe(50000);

});


it("should return maximum salary for a country",()=>{

const analytics=
new SalaryAnalytics();

expect(
analytics.getMaxSalary(
employees,
"India"
)
).toBe(70000);

});


it("should return average salary for a country",()=>{

const analytics=
new SalaryAnalytics();

expect(
analytics.getAverageSalary(
employees,
"India"
)
).toBe(60000);

});


it("should return average salary by role in country",()=>{

const analytics=
new SalaryAnalytics();

expect(

analytics.getAverageSalaryByRole(
employees,
"Developer",
"India"
)

).toBe(60000);

});

it("should return median salary",()=>{

const analytics=
new SalaryAnalytics();

expect(
analytics.getMedianSalary(
employees
)
).toBe(70000);

});


it("should return total payroll",()=>{

const analytics=
new SalaryAnalytics();

expect(
analytics.getTotalPayroll(
employees
)
).toBe(220000);

});


it("should return employee count by country",()=>{

const analytics=
new SalaryAnalytics();

expect(

analytics.getEmployeeCountByCountry(
employees,
"India"
)

).toBe(2);

});

it("should calculate median for even list",()=>{

const analytics=
new SalaryAnalytics();

const evenEmployees=[

...employees,

{
id:"4",
fullName:"Tom",
jobTitle:"Manager",
country:"India",
salary:90000,
email:"tom@test.com",
department:"Management",
createdAt:new Date()
}

];

expect(

analytics.getMedianSalary(
evenEmployees
)

).toBe(80000);

});

});