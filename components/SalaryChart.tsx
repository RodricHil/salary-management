"use client";

import {

    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Cell

}

    from "recharts";

const formatCurrency =
    (value: number) =>
        new Intl.NumberFormat(
            "en-US",
            {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0
            }
        ).format(value || 0);

const barPalette = [
    "#0f766e",
    "#155e75",
    "#1d4ed8",
    "#1e40af",
    "#334155",
    "#0c4a6e",
    "#0369a1",
    "#0284c7"
];

export default function SalaryChart({

    employees,
    loading = false

}: {

    employees: any[]
    loading?: boolean

}) {

    const groupedSalaryData =
        new Map<
            string,
            {
                country: string,
                jobTitle: string,
                totalSalary: number,
                employeesCount: number
            }
        >();

    employees.forEach((employee) => {
        const country =
            String(employee.country || "Unknown").trim() || "Unknown";

        const jobTitle =
            String(employee.jobTitle || "Unknown").trim() || "Unknown";

        const salary =
            Number(employee.salary || 0);

        const key =
            `${country}__${jobTitle}`;

        const existing =
            groupedSalaryData.get(key);

        if (existing) {
            existing.totalSalary += salary;
            existing.employeesCount += 1;
            return;
        }

        groupedSalaryData.set(
            key,
            {
                country,
                jobTitle,
                totalSalary: salary,
                employeesCount: 1
            }
        );
    });

    const data =
        Array.from(
            groupedSalaryData.values()
        )
            .map((group) => ({
                name: `${group.jobTitle} (${group.country})`,
                country: group.country,
                jobTitle: group.jobTitle,
                averageSalary: Math.round(group.totalSalary / group.employeesCount),
                employeesCount: group.employeesCount
            }))
            .sort((a, b) => b.averageSalary - a.averageSalary);

    if (loading) {
        return (
            <div className="h-96 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60">
                <div className="mb-4 flex items-end justify-between gap-3">
                    <div className="space-y-2">
                        <div className="h-5 w-32 animate-pulse rounded bg-slate-200" />
                        <div className="h-3 w-48 animate-pulse rounded bg-slate-100" />
                    </div>
                    <div className="h-6 w-20 animate-pulse rounded-full bg-slate-200" />
                </div>
                <div className="grid h-[82%] grid-cols-10 items-end gap-2">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div
                            key={`salary-skeleton-${index}`}
                            className="animate-pulse rounded-t-md bg-slate-200"
                            style={{ height: `${30 + ((index * 7) % 50)}%` }}
                        />
                    ))}
                </div>
            </div>
        );
    }

    return (

        <div
            className="
h-96
border
border-slate-200
rounded-2xl
bg-white
p-5
shadow-lg
shadow-slate-200/60
"
        >

            <div className="mb-4 flex items-end justify-between gap-3">
                <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                        Salary Chart
                    </h2>
                    <p className="text-sm text-slate-500">
                        Average salary for each job title in each country
                    </p>
                </div>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
                    {data.length} entries
                </span>
            </div>

            <ResponsiveContainer
                width="100%"
                height="86%"
            >

                <BarChart
                    data={data}
                    barCategoryGap={18}
                >

                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="#e2e8f0"
                    />

                    <XAxis
                        dataKey="name"
                        tick={{ fill: "#64748b", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                        interval={0}
                        angle={-20}
                        textAnchor="end"
                        height={54}
                        tickFormatter={(value) =>
                            String(value).length > 18
                                ? `${String(value).slice(0, 18)}...`
                                : String(value)
                        }
                    />

                    <YAxis
                        tick={{ fill: "#64748b", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={formatCurrency}
                    />

                    <Tooltip
                        cursor={{ fill: "#e2e8f0", opacity: 0.4 }}
                        formatter={(value) => formatCurrency(Number(value ?? 0))}
                        labelFormatter={(_label, payload) => {
                            const item = payload?.[0]?.payload;

                            if (!item) {
                                return "";
                            }

                            return `${item.jobTitle} in ${item.country} (${item.employeesCount} employees)`;
                        }}
                        contentStyle={{
                            borderRadius: "12px",
                            borderColor: "#cbd5e1",
                            boxShadow: "0 12px 32px rgba(15, 23, 42, 0.12)"
                        }}
                    />

                    <Bar
                        dataKey="averageSalary"
                        radius={[8, 8, 0, 0]}
                    >
                        {
                            data.map((_, index) => (
                                <Cell
                                    key={`salary-cell-${index}`}
                                    fill={barPalette[index % barPalette.length]}
                                />
                            ))
                        }
                    </Bar>

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}