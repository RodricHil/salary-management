"use client";

import { useState } from "react";
import EmployeeTable from "@/components/EmployeeTable";

export default function EmployeesPage() {
  const [refresh, setRefresh] = useState(0);

  return (
    <section className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold text-slate-900">Employees Table</h1>
        <p className="text-sm text-slate-600">
          Browse all employee records and remove entries when needed.
        </p>
      </div>

      <EmployeeTable refresh={refresh} />

      <button
        type="button"
        onClick={() => setRefresh((prev) => prev + 1)}
        className="inline-flex h-10 items-center rounded-lg border border-slate-300 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
      >
        Refresh Table
      </button>
    </section>
  );
}
