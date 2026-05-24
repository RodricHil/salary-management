"use client";

import { useEffect, useState } from "react";

import { FaTrash }

    from "react-icons/fa";

export default function EmployeeTable({

    refresh,
    search = "",
    country = "",
    jobTitle = ""

}: {

    refresh: number,
    search?: string,
    country?: string,
    jobTitle?: string

}) {

    const [

        employees,

        setEmployees

    ] = useState<any[]>([]);

    const [

        loading,

        setLoading

    ] = useState(true);

    const [

        currentPage,

        setCurrentPage

    ] = useState(1);

    const rowsPerPage = 20;


    useEffect(() => {

        fetchEmployees();

    }, [refresh]);


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

    const normalizedSearch =
        search.trim().toLowerCase();

    const normalizedCountry =
        country.trim().toLowerCase();

    const normalizedJobTitle =
        jobTitle.trim().toLowerCase();

    const filteredEmployees =
        employees.filter((employee) => {
            const fullName =
                String(employee.fullName || "").toLowerCase();
            const email =
                String(employee.email || "").toLowerCase();
            const department =
                String(employee.department || "").toLowerCase();
            const employeeCountry =
                String(employee.country || "").toLowerCase();
            const employeeJobTitle =
                String(employee.jobTitle || "").toLowerCase();

            const matchesSearch =
                !normalizedSearch ||
                fullName.includes(normalizedSearch) ||
                email.includes(normalizedSearch) ||
                department.includes(normalizedSearch);

            const matchesCountry =
                !normalizedCountry ||
                employeeCountry.includes(normalizedCountry);

            const matchesJobTitle =
                !normalizedJobTitle ||
                employeeJobTitle.includes(normalizedJobTitle);

            return (
                matchesSearch &&
                matchesCountry &&
                matchesJobTitle
            );
        });

    const totalPages =
        Math.max(
            1,
            Math.ceil(
                filteredEmployees.length / rowsPerPage
            )
        );

    const pageStartIndex =
        (currentPage - 1) * rowsPerPage;

    const paginatedEmployees =
        filteredEmployees.slice(
            pageStartIndex,
            pageStartIndex + rowsPerPage
        );

    useEffect(() => {

        setCurrentPage(1);

    }, [normalizedSearch, normalizedCountry, normalizedJobTitle]);

    useEffect(() => {

        if (
            currentPage > totalPages
        ) {
            setCurrentPage(totalPages);
        }

    }, [currentPage, totalPages]);


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
                    {filteredEmployees.length} records
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
                            loading &&
                            Array.from({ length: 6 }).map((_, index) => (
                                <tr key={`employee-skeleton-${index}`}>
                                    <td className="px-4 py-3 sm:px-6" colSpan={7}>
                                        <div className="h-8 w-full animate-pulse rounded-lg bg-slate-100" />
                                    </td>
                                </tr>
                            ))
                        }

                        {

                            !loading &&
                            paginatedEmployees.map(
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

                        {
                            !loading &&
                            !filteredEmployees.length && (
                                <tr>
                                    <td
                                        colSpan={7}
                                        className="px-4 py-10 text-center text-sm text-slate-500 sm:px-6"
                                    >
                                        No employees matched your filters.
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            {
                !loading &&
                filteredEmployees.length > 0 && (
                    <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-4 py-3 sm:px-6">
                        <p className="text-xs text-slate-600 sm:text-sm">
                            Showing {pageStartIndex + 1} to {Math.min(pageStartIndex + rowsPerPage, filteredEmployees.length)} of {filteredEmployees.length} records
                        </p>

                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={() =>
                                    setCurrentPage(
                                        (prev) =>
                                            Math.max(1, prev - 1)
                                    )
                                }
                                disabled={currentPage === 1}
                                className="inline-flex h-8 items-center rounded-lg border border-slate-300 bg-white px-3 text-xs font-medium text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm"
                            >
                                Previous
                            </button>

                            <span className="min-w-20 text-center text-xs font-medium text-slate-600 sm:text-sm">
                                Page {currentPage} of {totalPages}
                            </span>

                            <button
                                type="button"
                                onClick={() =>
                                    setCurrentPage(
                                        (prev) =>
                                            Math.min(totalPages, prev + 1)
                                    )
                                }
                                disabled={currentPage === totalPages}
                                className="inline-flex h-8 items-center rounded-lg border border-slate-300 bg-white px-3 text-xs font-medium text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )
            }
        </div>

    );

}