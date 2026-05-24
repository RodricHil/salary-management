"use client";

import { useState } from "react";

const inputClassName =
    "h-11 w-full rounded-xl border border-slate-300 bg-white/80 px-3 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200";

export default function EmployeeForm({

    onEmployeeAdded,

}: {

    onEmployeeAdded: () => void

}) {

    const [form, setForm] = useState({

        fullName: "",
        jobTitle: "",
        country: "",
        salary: "",
        email: "",
        department: ""

    });

    async function handleSubmit(
        e: React.FormEvent
    ) {

        e.preventDefault();

        await fetch(
            "/api/employees",
            {

                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({

                    ...form,
                    salary: Number(
                        form.salary
                    )

                })

            }

        );

        setForm({

            fullName: "",
            jobTitle: "",
            country: "",
            salary: "",
            email: "",
            department: ""

        });

        onEmployeeAdded();

    }

    return (

        <form
            onSubmit={
                handleSubmit
            }
            className="
relative
overflow-hidden
rounded-2xl
border
border-slate-200
bg-linear-to-b
from-white
to-slate-50
p-6
shadow-lg
shadow-slate-200/70
sm:p-8
"
        >

            <div
                aria-hidden="true"
                className="
pointer-events-none
absolute
-right-20
-top-24
h-56
w-56
rounded-full
bg-cyan-200/40
blur-3xl
"
            />

            <div className="relative mb-6 space-y-1">
                <h2 className="text-xl font-semibold text-slate-900">Add Employee</h2>
                <p className="text-sm text-slate-500">
                    Capture employee details quickly with a clean and structured form.
                </p>
            </div>

            <div className="relative grid gap-4 sm:grid-cols-2">
                <label className="space-y-1.5">
                    <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Full Name
                    </span>
                    <input
                        placeholder="e.g. Priya Nair"
                        value={form.fullName}
                        onChange={(e) =>

                            setForm({

                                ...form,

                                fullName:
                                    e.target.value

                            })

                        }
                        className={inputClassName}
                    />
                </label>

                <label className="space-y-1.5">
                    <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Job Title
                    </span>
                    <input
                        placeholder="e.g. Frontend Engineer"
                        value={form.jobTitle}
                        onChange={(e) =>

                            setForm({

                                ...form,

                                jobTitle:
                                    e.target.value

                            })

                        }
                        className={inputClassName}
                    />
                </label>

                <label className="space-y-1.5">
                    <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Country
                    </span>
                    <input
                        placeholder="e.g. Indonesia"
                        value={form.country}
                        onChange={(e) =>

                            setForm({

                                ...form,

                                country:
                                    e.target.value

                            })

                        }
                        className={inputClassName}
                    />
                </label>

                <label className="space-y-1.5">
                    <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Salary
                    </span>
                    <input
                        placeholder="e.g. 1500"
                        type="number"
                        value={form.salary}
                        onChange={(e) =>

                            setForm({

                                ...form,

                                salary:
                                    e.target.value

                            })

                        }
                        className={inputClassName}
                    />
                </label>

                <label className="space-y-1.5">
                    <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Email
                    </span>
                    <input
                        placeholder="e.g. priya@company.com"
                        value={form.email}
                        onChange={(e) =>

                            setForm({

                                ...form,

                                email:
                                    e.target.value

                            })

                        }
                        className={inputClassName}
                    />
                </label>

                <label className="space-y-1.5">
                    <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Department
                    </span>
                    <input
                        placeholder="e.g. Product Engineering"
                        value={form.department}
                        onChange={(e) =>

                            setForm({

                                ...form,

                                department:
                                    e.target.value

                            })

                        }
                        className={inputClassName}
                    />
                </label>
            </div>

            <button
                className="
relative
mt-6
inline-flex
h-11
w-full
items-center
justify-center
rounded-xl
bg-slate-900
px-4
text-sm
font-medium
text-white
shadow-lg
shadow-slate-900/20
transition
hover:-translate-y-0.5
hover:bg-slate-800
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-cyan-300
sm:w-auto
"
                type="submit"
            >

                Add Employee

            </button>

        </form>

    );

}