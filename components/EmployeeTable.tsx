"use client";

import { useEffect, useState } from "react";

import { FaTrash }

    from "react-icons/fa";

export default function EmployeeTable({

    refresh

}: {

    refresh: number

}) {

    const [

        employees,

        setEmployees

    ] = useState<any[]>([]);


    useEffect(() => {

        fetchEmployees();

    }, [refresh]);


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


    async function deleteEmployee(
        id: string
    ) {

        await fetch(

            `/api/employees/${id}`,

            {

                method: "DELETE"

            }

        );

        fetchEmployees();

    }


    return (

        <div
            className="
overflow-hidden
rounded-2xl
border
border-slate-200
bg-white
shadow-lg
shadow-slate-200/60
"
        >
            <div
                className="
flex
items-center
justify-between
border-b
border-slate-200
bg-linear-to-r
from-slate-900
to-slate-700
px-4
py-3
text-white
sm:px-6
"
            >
                <h2 className="text-sm font-semibold tracking-wide sm:text-base">Employee Directory</h2>
                <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium">
                    {employees.length} records
                </span>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200 text-sm text-slate-700">
                    <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                        <tr>
                            <th className="px-4 py-3 text-left font-semibold sm:px-6">Name</th>
                            <th className="px-4 py-3 text-left font-semibold sm:px-6">Job</th>
                            <th className="px-4 py-3 text-left font-semibold sm:px-6">Email</th>
                            <th className="px-4 py-3 text-left font-semibold sm:px-6">Department</th>
                            <th className="px-4 py-3 text-left font-semibold sm:px-6">Country</th>
                            <th className="px-4 py-3 text-left font-semibold sm:px-6">Salary</th>
                            <th className="px-4 py-3 text-left font-semibold sm:px-6">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100 bg-white">
                        {

                            employees.map(
                                employee => (

                                    <tr
                                        key={
                                            employee.id
                                        }
                                        className="transition hover:bg-cyan-50/40"
                                    >

                                        <td className="px-4 py-3 font-medium text-slate-900 sm:px-6">

                                            {
                                                employee.fullName
                                            }

                                        </td>

                                        <td className="px-4 py-3 sm:px-6">

                                            {
                                                employee.jobTitle
                                            }

                                        </td>

                                        <td className="px-4 py-3 sm:px-6">

                                            {
                                                employee.email
                                            }

                                        </td>

                                        <td className="px-4 py-3 sm:px-6">

                                            {
                                                employee.department
                                            }

                                        </td>

                                        <td className="px-4 py-3 sm:px-6">

                                            {
                                                employee.country
                                            }

                                        </td>

                                        <td className="px-4 py-3 tabular-nums text-slate-800 sm:px-6">

                                            {
                                                employee.salary
                                            }

                                        </td>

                                        <td className="px-4 py-3 sm:px-6">

                                            <button

                                                onClick={() =>

                                                    deleteEmployee(
                                                        employee.id
                                                    )

                                                }
                                                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-rose-200 text-rose-600 transition hover:bg-rose-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-200"
                                                aria-label={`Delete ${employee.fullName}`}

                                            >

                                                <FaTrash className="h-4 w-4" />

                                            </button>

                                        </td>

                                    </tr>

                                )

                            )

                        }
                    </tbody>
                </table>
            </div>
        </div>

    );

}