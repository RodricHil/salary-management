"use client";

interface DashboardProps {
  employees: any[];
}

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function formatCurrency(value: number) {
  return currencyFormatter.format(value || 0);
}

export default function DashboardCards({ employees }: DashboardProps) {
  const salaries = employees.map((emp) => emp.salary);

  const totalEmployees = employees.length;

  const minSalary = salaries.length ? Math.min(...salaries) : 0;

  const maxSalary = salaries.length ? Math.max(...salaries) : 0;

  const averageSalary = employees.length
    ? Math.round(salaries.reduce((sum, val) => sum + val, 0) / employees.length)
    : 0;

  const totalPayroll = salaries.reduce((sum, val) => sum + val, 0);

  const cards = [
    {
      title: "Employees",
      value: totalEmployees,
      subtitle: "Active records",
      accent: "from-cyan-500 to-blue-600",
      isCurrency: false,
    },

    {
      title: "Min Salary",
      value: minSalary,
      subtitle: "Lowest paid",
      accent: "from-emerald-500 to-teal-600",
      isCurrency: true,
    },

    {
      title: "Max Salary",
      value: maxSalary,
      subtitle: "Highest paid",
      accent: "from-indigo-500 to-violet-600",
      isCurrency: true,
    },

    {
      title: "Average Salary",
      value: averageSalary,
      subtitle: "Across all employees",
      accent: "from-orange-500 to-amber-600",
      isCurrency: true,
    },

    {
      title: "Total Payroll",
      value: totalPayroll,
      subtitle: "Monthly allocation",
      accent: "from-slate-700 to-slate-900",
      isCurrency: true,
    },
  ];

  return (
    <div
      className="
grid
grid-cols-1
    sm:grid-cols-2
    xl:grid-cols-5
    gap-5
"
    >
      {cards.map((card) => (
        <div
          key={card.title}
          className="
relative
overflow-hidden
rounded-2xl
border
border-slate-200
bg-white
p-5
shadow-lg
shadow-slate-200/60
"
        >
          <div
            className={`absolute -right-10 -top-10 h-24 w-24 rounded-full bg-linear-to-br ${card.accent} opacity-20 blur-2xl`}
            aria-hidden="true"
          />

          <h2
            className="
text-xs
font-semibold
uppercase
tracking-wide
text-slate-500
"
          >
            {card.title}
          </h2>

          <p
            className="
mt-2
text-xl
font-bold
text-slate-900
tabular-nums
"
          >
            {card.isCurrency ? formatCurrency(card.value) : card.value}
          </p>

          <p className="mt-1 text-sm text-slate-500">{card.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
