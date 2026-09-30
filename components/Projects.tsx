import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

const projects = [
	{
		title: "Simple Calculator",
		description:
			"A precision-focused Android calculator built with Kotlin, featuring BigDecimal arithmetic, chained calculations, operator swapping, divide-by-zero handling, and clean result formatting.",
		technologies: ["Kotlin", "Android", "XML", "BigDecimal"],
		githubUrl: "https://github.com/",
		status: "COMPLETED",
		index: "01",
	},
	{
		title: "LoginTask",
		description:
			"An Android authentication practice project using Kotlin, SharedPreferences, and Intents to manage simple login state and screen navigation.",
		technologies: ["Kotlin", "Android", "SharedPreferences", "Intents"],
		githubUrl: "https://github.com/",
		status: "COMPLETED",
		index: "02",
	},
	{
		title: "Counter App",
		description:
			"A simple Android counter application built to practice XML layouts, ConstraintLayout, button click handling, state updates, and UI interaction.",
		technologies: ["Kotlin", "XML", "ConstraintLayout", "Android"],
		githubUrl: "https://github.com/",
		status: "COMPLETED",
		index: "03",
	},
];

export default function Projects() {
	return (
		<section
			id="projects"
			aria-labelledby="projects-title"
			className="relative isolate overflow-hidden border-t border-white/10 bg-[#070a0c] px-6 py-24 text-white sm:px-10 sm:py-32"
		>
			<div
				className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:56px_56px]"
				aria-hidden="true"
			/>
			<div
				className="pointer-events-none absolute left-0 top-1/4 -z-10 size-96 rounded-full bg-cyan-400/[0.04] blur-[120px]"
				aria-hidden="true"
			/>

			<Reveal>
				<div className="mx-auto max-w-6xl">
				<div className="max-w-2xl">
					<p className="font-mono text-xs tracking-[0.16em] text-cyan-300 sm:text-sm">
						03 / PROJECTS
					</p>
					<h2
						id="projects-title"
						className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl"
					>
						Things I&apos;ve Built.
					</h2>
					<p className="mt-5 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
						A collection of practical projects built while learning, experimenting, and turning ideas into working software.
					</p>
				</div>

				<div className="mt-12 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
					{projects.map((project) => (
						<ProjectCard key={project.index} {...project} />
					))}
				</div>

				<div className="mt-8 flex flex-col gap-4 rounded-lg border border-white/10 bg-white/[0.025] px-5 py-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
					<div>
						<p className="font-mono text-xs tracking-[0.14em] text-zinc-400">
							PROJECT DATABASE
						</p>
						<p className="mt-2 font-mono text-[10px] tracking-wider text-cyan-300/80">
							03 PROJECTS INDEXED
						</p>
					</div>
					<p className="flex items-center gap-2 font-mono text-[10px] tracking-wider text-zinc-400 sm:text-xs">
						<span className="size-1.5 rounded-full bg-emerald-300/70" aria-hidden="true" />
						MORE PROJECTS IN DEVELOPMENT
					</p>
				</div>
				</div>
			</Reveal>
		</section>
	);
}