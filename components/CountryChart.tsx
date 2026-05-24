"use client";

import {

    PieChart,
    Pie,
    Tooltip,
    ResponsiveContainer,
    Cell,
    Legend

}

    from "recharts";

const piePalette = [
    "#0f766e",
    "#1d4ed8",
    "#4f46e5",
    "#0284c7",
    "#0e7490",
    "#4338ca",
    "#475569",
    "#0369a1"
];

export default function CountryChart({

    employees

}: {

    employees: any[]

}) {

    const countryMap:

        Record<string, number>

        = {};

    employees.forEach(
        employee => {

            countryMap[
                employee.country
            ] =

                (
                    countryMap[
                    employee.country
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

        );

    const total =
        data.reduce(
            (sum, item) =>
                sum + item.count,
            0
        );

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
                        Country Chart
                    </h2>
                    <p className="text-sm text-slate-500">
                        Employee distribution by country
                    </p>
                </div>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
                    Total {total}
                </span>
            </div>

            <ResponsiveContainer
                width="100%"
                height="86%"
            >

                <PieChart>

                    <Pie

                        data={data}

                        dataKey="count"

                        nameKey="country"

                        innerRadius={70}

                        outerRadius={120}

                        paddingAngle={2}

                        stroke="#ffffff"

                        strokeWidth={2}

                    />

                    {
                        data.map((entry, index) => (
                            <Cell
                                key={`country-cell-${entry.country}`}
                                fill={piePalette[index % piePalette.length]}
                            />
                        ))
                    }

                    <Tooltip
                        formatter={(value, _name, payload) => [
                            `${Number(value ?? 0)} employees`,
                            payload?.payload?.country
                        ]}
                        contentStyle={{
                            borderRadius: "12px",
                            borderColor: "#cbd5e1",
                            boxShadow: "0 12px 32px rgba(15, 23, 42, 0.12)"
                        }}
                    />

                    <Legend
                        verticalAlign="bottom"
                        align="center"
                        iconType="circle"
                        wrapperStyle={{ fontSize: "12px", color: "#475569" }}
                    />

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

}