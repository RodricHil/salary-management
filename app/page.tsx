"use client";

import { useState }
  from "react";

import EmployeeForm
  from "../components/EmployeeForm";

import EmployeeTable
  from "../components/EmployeeTable";

export default function Home() {

  const [

    refresh,

    setRefresh

  ] = useState(0);

  return (

    <div
      className="
max-w-7xl
mx-auto
p-8
space-y-6
"
    >

      <h1
        className="
text-3xl
font-bold
"
      >

        Salary Management Dashboard

      </h1>

      <EmployeeForm

        onEmployeeAdded={() =>

          setRefresh(
            prev => prev + 1
          )

        }

      />

      <EmployeeTable
        refresh={
          refresh
        }
      />

    </div>

  );

}