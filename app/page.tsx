"use client";

import {

  useEffect,
  useState

}

  from "react";

import DashboardCards
  from "@/components/DashboardCards";

import SalaryChart
  from "@/components/SalaryChart";

import CountryChart
  from "@/components/CountryChart";

export default function Home() {

  const [

    employees,

    setEmployees

  ] = useState<any[]>([]);


  useEffect(() => {

    fetchEmployees();

  }, []);


  async function fetchEmployees() {

    const response =

      await fetch(
        "/api/employees"
      );

    const data =

      await response.json();

    setEmployees(
      data
    );

  }


  return (

    <div
      className="
space-y-8
"
    >

      <h1
        className="
text-3xl
font-bold
"
      >

        Dashboard

      </h1>

      <DashboardCards
        employees={
          employees
        }
      />

      <div
        className="
grid
grid-cols-1
lg:grid-cols-2
gap-6
"
      >

        <SalaryChart
          employees={
            employees
          }
        />

        <CountryChart
          employees={
            employees
          }
        />

      </div>

    </div>

  );

}