"use client";

import {

    PieChart,
    Pie,
    Tooltip,
    ResponsiveContainer,
    Cell

}

    from "recharts";

const piePalette = [
    "#0ea5e9",
    "#22c55e",
    "#f59e0b",
    "#ec4899",
    "#8b5cf6",
    "#14b8a6",
    "#f97316",
    "#6366f1",
    "#eab308",
    "#06b6d4",
    "#84cc16",
    "#fb7185"
];

export default function CountryChart({

    employees,
    loading = false

}: {

    employees: any[]
    loading?: boolean

}) {

    const countryMap:

        Record<string, number>

        = {};

    employees.forEach(
        employee => {

            const countryName =
                String(employee.country || "").trim() || "Unknown";

            countryMap[
                countryName
            ] =

                (
                    countryMap[
                    countryName
                    ] || 0
                ) + 1;

        }
    );

    const data =

        Object.entries(
            countryMap
        ).map(

            ([country, count]) => ({

                country,
                count

            })

        )
            .sort((a, b) => b.count - a.count);

    const total =
        data.reduce(
            (sum, item) =>
                sum + item.count,
            0
        );

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
                <div className="flex h-[82%] items-center justify-center">
                    <div className="h-52 w-52 animate-pulse rounded-full border-18 border-slate-200" />
                </div>
            </div>
        );
    }

    if (!data.length) {
        return (
            <div className="h-96 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60">
                <div className="mb-4 flex items-end justify-between gap-3">
                    <div>
                        <h2 className="text-lg font-semibold text-slate-900">
                            Country Chart
                        </h2>
                        <p className="text-sm text-slate-500">
                            Employee distribution by country
                        </p>
                    </div>
                </div>
                <div className="flex h-[82%] items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/60">
                    <p className="text-sm text-slate-500">
                        No country data available yet.
                    </p>
                </div>
            </div>
        );
    }

    return (

        <div
            className="
h-96
flex
flex-col
overflow-hidden
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
                        Country Chart
                    </h2>
                    <p className="text-sm text-slate-500">
                        Employees in all countries
                    </p>
                </div>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
                    Total {total}
                </span>
            </div>

            <div className="mt-4 grid min-h-0 flex-1 grid-cols-1 gap-4 lg:grid-cols-3">
                <div className="relative min-h-0 lg:col-span-2">
                    <div className="pointer-events-none absolute inset-8 rounded-full bg-linear-to-br from-cyan-100 via-amber-100 to-fuchsia-100 opacity-80 blur-2xl" />
                    <div className="relative h-70 w-full min-w-0 overflow-hidden rounded-xl border border-slate-100 bg-white/70 sm:h-75 lg:h-full lg:min-h-65">
                        <ResponsiveContainer
                            width="100%"
                            height="100%"
                            minWidth={0}
                            minHeight={220}
                        >
                            <PieChart>
                                <Pie
                                    data={data}
                                    dataKey="count"
                                    nameKey="country"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={58}
                                    outerRadius={94}
                                    paddingAngle={1.5}
                                    cornerRadius={7}
                                    stroke="#ffffff"
                                    strokeWidth={2}
                                    labelLine={false}
                                >
                                    {
                                        data.map((entry, index) => (
                                            <Cell
                                                key={`country-cell-${entry.country}`}
                                                fill={piePalette[index % piePalette.length]}
                                            />
                                        ))
                                    }
                                </Pie>

                                <Tooltip
                                    formatter={(value) => [`${Number(value ?? 0)} employees`, "Count"]}
                                    labelFormatter={(label) => `Country: ${label}`}
                                    contentStyle={{
                                        borderRadius: "14px",
                                        borderColor: "#cbd5e1",
                                        background: "rgba(255,255,255,0.96)",
                                        boxShadow: "0 12px 32px rgba(15, 23, 42, 0.14)"
                                    }}
                                />
                            </PieChart>
                        </ResponsiveContainer>

                    </div>
                </div>

                <div className="min-h-0 rounded-xl border border-slate-200 bg-slate-50/70 p-3">
                    <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                            All Countries Employee Count
                        </h3>
                        <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-medium text-slate-500">
                            {data.length} countries
                        </span>
                    </div>

                    <div className="h-full space-y-2 overflow-y-auto pr-1">
                        {
                            data.map((item, index) => {
                                const share = ((item.count / total) * 100).toFixed(1);

                                return (
                                    <div
                                        key={item.country}
                                        className="rounded-lg border border-slate-200 bg-white p-2.5"
                                    >
                                        <div className="flex items-center justify-between gap-2">
                                            <div className="flex min-w-0 items-center gap-2">
                                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-[11px] font-semibold text-slate-600">
                                                    {index + 1}
                                                </span>
                                                <span
                                                    className="h-2.5 w-2.5 rounded-full"
                                                    style={{ backgroundColor: piePalette[index % piePalette.length] }}
                                                />
                                                <span className="truncate text-sm font-medium text-slate-700">
                                                    {item.country}
                                                </span>
                                            </div>

                                            <div className="text-right">
                                                <p className="text-xs font-semibold text-slate-700">{item.count}</p>
                                                <p className="text-[11px] text-slate-500">{share}%</p>
                                            </div>
                                        </div>

                                        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                                            <div
                                                className="h-full rounded-full"
                                                style={{
                                                    width: `${share}%`,
                                                    backgroundColor: piePalette[index % piePalette.length]
                                                }}
                                            />
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>

        </div>

    );

}