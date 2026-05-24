"use client";

interface EmployeeFiltersProps {
	search: string;
	setSearch: (value: string) => void;
	country: string;
	setCountry: (value: string) => void;
	jobTitle: string;
	setJobTitle: (value: string) => void;
}

export default function EmployeeFilters({
	search,
	setSearch,
	country,
	setCountry,
	jobTitle,
	setJobTitle,
}: EmployeeFiltersProps) {
	const hasFilters =
		search.trim() ||
		country.trim() ||
		jobTitle.trim();

	const inputClassName =
		"h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200";

	return (
		<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
			<div className="mb-4 flex items-center justify-between">
				<h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">Filters</h2>
				<button
					type="button"
					onClick={() => {
						setSearch("");
						setCountry("");
						setJobTitle("");
					}}
					disabled={!hasFilters}
					className="inline-flex h-8 items-center rounded-lg border border-slate-300 px-3 text-xs font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
				>
					Clear
				</button>
			</div>

			<div className="grid gap-3 md:grid-cols-3">
				<input
					placeholder="Search name, email, department"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className={inputClassName}
				/>

				<input
					placeholder="Filter by country"
					value={country}
					onChange={(e) => setCountry(e.target.value)}
					className={inputClassName}
				/>

				<input
					placeholder="Filter by job title"
					value={jobTitle}
					onChange={(e) => setJobTitle(e.target.value)}
					className={inputClassName}
				/>
			</div>
		</div>
	);

}