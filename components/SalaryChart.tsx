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

    employees

}: {

    employees: any[]

}) {

    const data =

        employees.map(
            employee => ({

                name:
                    employee.fullName,

                salary:
                    employee.salary

            })
        )
            .sort(
                (a, b) => b.salary - a.salary
            )
            .slice(0, 10);

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
                        Top 10 salaries in descending order
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
                        contentStyle={{
                            borderRadius: "12px",
                            borderColor: "#cbd5e1",
                            boxShadow: "0 12px 32px rgba(15, 23, 42, 0.12)"
                        }}
                    />

                    <Bar
                        dataKey="salary"
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