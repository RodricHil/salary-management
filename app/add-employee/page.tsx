"use client";

import { useState } from "react";
import EmployeeForm from "@/components/EmployeeForm";

export default function AddEmployeePage() {
  const [submitCount, setSubmitCount] = useState(0);

  return (
    <section className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold text-slate-900">Add Employee</h1>
        <p className="text-sm text-slate-600">
          Create a new employee record with all required information.
        </p>
      </div>

      <EmployeeForm onEmployeeAdded={() => setSubmitCount((prev) => prev + 1)} />

      {submitCount > 0 && (
        <p className="text-sm font-medium text-emerald-700">
          Employee added successfully ({submitCount}).
        </p>
      )}
    </section>
  );
}
