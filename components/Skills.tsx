import Reveal from "@/components/Reveal";

const skills = [
	{
		number: "01",
		name: "KOTLIN",
		category: "Android",
		familiarity: "Established",
		level: 4,
	},
	{
		number: "02",
		name: "ANDROID",
		category: "Mobile Development",
		familiarity: "Established",
		level: 4,
	},
	{
		number: "03",
		name: "JAVA",
		category: "Programming",
		familiarity: "Practiced",
		level: 3,
	},
	{
		number: "04",
		name: "XML",
		category: "Android UI",
		familiarity: "Practiced",
		level: 3,
	},
	{
		number: "05",
		name: "GIT / GITHUB",
		category: "Version Control",
		familiarity: "Practiced",
		level: 3,
	},
	{
		number: "06",
		name: "NEXT.JS",
		category: "Web Development",
		familiarity: "Developing",
		level: 2,
	},
	{
		number: "07",
		name: "TYPESCRIPT",
		category: "Programming",
		familiarity: "Developing",
		level: 2,
	},
	{
		number: "08",
		name: "TAILWIND CSS",
		category: "UI Development",
		familiarity: "Developing",
		level: 2,
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

				<div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
					{skills.map((skill) => (
						<article
							key={skill.number}
							className="group min-h-48 rounded-lg border border-white/10 bg-[#0a0e10]/75 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-[#0d1315]/90 motion-reduce:transform-none sm:p-6"
						>
							<div className="flex items-center justify-between">
								<span className="font-mono text-xs text-cyan-300/80">{skill.number}</span>
								<span
									className="font-mono text-[10px] tracking-wider text-zinc-600"
									aria-label={`${skill.familiarity} familiarity`}
								>
									<span className="sr-only">{skill.familiarity}</span>
									<span className="flex items-center gap-1" aria-hidden="true">
										{[0, 1, 2, 3].map((segment) => (
											<span
												key={segment}
												className={`h-1 w-3 rounded-full ${segment < skill.level ? "bg-cyan-300/60" : "bg-white/10"}`}
											/>
										))}
									</span>
								</span>
							</div>

							<h3 className="mt-8 text-lg font-semibold tracking-wide text-zinc-100 transition-colors group-hover:text-cyan-100">
								{skill.name}
							</h3>
							<p className="mt-2 text-sm text-zinc-500">{skill.category}</p>
						</article>
					))}
				</div>

				<div
					role="status"
					className="mt-8 flex flex-col gap-3 rounded-lg border border-white/10 bg-white/[0.025] px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
				>
					<p className="font-mono text-xs tracking-[0.14em] text-zinc-400">
						STACK STATUS
					</p>
					<p className="flex items-center gap-2 text-sm text-zinc-300">
						<span className="size-1.5 rounded-full bg-emerald-300" aria-hidden="true" />
						8 technologies currently active
					</p>
				</div>
				</div>
			</Reveal>
		</section>
	);
}