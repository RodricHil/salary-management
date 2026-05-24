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

  const [

    loading,

    setLoading

  ] = useState(true);


  useEffect(() => {

    fetchEmployees();

  }, []);


  async function fetchEmployees() {

    setLoading(true);

    const response =

      await fetch(
        "/api/employees"
      );

    const data =

      await response.json();

    setEmployees(
      data
    );

    setLoading(false);

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
        loading={
          loading
        }
      />

      <div
        className="
grid
grid-cols-1
gap-6
"
      >

        <SalaryChart
          employees={
            employees
          }
          loading={
            loading
          }
        />

        <CountryChart
          employees={
            employees
          }
          loading={
            loading
          }
        />

      </div>

    </div>

  );

}