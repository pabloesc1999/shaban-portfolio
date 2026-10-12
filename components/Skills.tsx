import Reveal from "@/components/Reveal";

const skillCategories = [
	{
		number: "01",
		name: "Android & Software Development",
		skills: [
			"Kotlin",
			"Android development",
			"Java",
			"XML layouts",
			"Git / GitHub",
			"Software lifecycle",
			"Interface design",
			"Codebase navigation",
			"Technical problem-solving",
		],
	},
	{
		number: "02",
		name: "Web Development",
		skills: ["Next.js", "TypeScript", "Tailwind CSS"],
	},
	{
		number: "03",
		name: "Generative AI & Prompt Engineering",
		skills: [
			"Generative AI applications",
			"Prompt engineering",
			"Enterprise AI use cases",
			"AI-assisted proposal workflows",
			"Technical writing",
		],
	},
	{
		number: "04",
		name: "Data Analytics",
		skills: [
			"Python",
			"Financial data analysis",
			"AI-assisted data analysis",
			"Data-driven decisions",
			"Analytical workflows",
		],
	},
	{
		number: "05",
		name: "Cybersecurity Fundamentals",
		skills: [
			"Threat identification",
			"Security risk assessment",
			"Foundational security protocols",
		],
	},
	{
		number: "06",
		name: "Business & Technology Strategy",
		skills: [
			"AI in business operations",
			"Private equity",
			"Technology-driven value creation",
			"Business development",
		],
	},
];

export default function Skills() {
	return (
		<section
			id="skills"
			aria-labelledby="skills-title"
			className="relative isolate overflow-hidden border-t border-white/10 bg-[#070a0c] px-6 py-24 text-white sm:px-10 sm:py-32"
		>
			<div
				className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:56px_56px]"
				aria-hidden="true"
			/>
			<div
				className="pointer-events-none absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-cyan-400/[0.045] blur-[120px]"
				aria-hidden="true"
			/>

			<Reveal>
				<div className="mx-auto max-w-6xl">
				<div className="max-w-2xl">
					<p className="font-mono text-xs tracking-[0.16em] text-cyan-300 sm:text-sm">
						02 / STACK
					</p>
					<h2
						id="skills-title"
						className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl"
					>
						Tools I Build With.
					</h2>
					<p className="mt-5 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
						A practical toolkit built through projects, experimentation, and continuous learning.
					</p>
				</div>

				<div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
					{skillCategories.map((category) => (
						<article
							key={category.number}
							className="group rounded-lg border border-white/10 bg-[#0a0e10]/75 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-[#0d1315]/90 motion-reduce:transform-none sm:p-6"
						>
							<div className="flex items-center gap-3">
								<span className="font-mono text-xs text-cyan-300/80">{category.number}</span>
								<h3 className="text-base font-semibold leading-snug text-zinc-100 transition-colors group-hover:text-cyan-100 sm:text-lg">
									{category.name}
								</h3>
							</div>
							<ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2 text-sm leading-5 text-zinc-400">
								{category.skills.map((skill) => (
									<li key={skill} className="flex items-start gap-2">
										<span className="mt-2 size-1 shrink-0 rounded-full bg-cyan-300/50" aria-hidden="true" />
										<span>{skill}</span>
									</li>
								))}
							</ul>
						</article>
					))}
				</div>

				<div
					role="status"
					className="mt-8 flex flex-col gap-3 rounded-lg border border-white/10 bg-white/[0.025] px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
				>
					<p className="font-mono text-xs tracking-[0.14em] text-zinc-400">
						SKILL AREAS
					</p>
					<p className="flex items-center gap-2 text-sm text-zinc-300">
						<span className="size-1.5 rounded-full bg-emerald-300" aria-hidden="true" />
						6 focused categories
					</p>
				</div>
				</div>
			</Reveal>
		</section>
	);
}