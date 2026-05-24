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

});