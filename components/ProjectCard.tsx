type ProjectCardProps = {
	title: string;
	description: string;
	technologies: string[];
	githubUrl: string;
	status: string;
	index: string;
};

export default function ProjectCard({
	title,
	description,
	technologies,
	githubUrl,
	status,
	index,
}: ProjectCardProps) {
	return (
		<article className="group flex h-full flex-col rounded-lg border border-white/10 bg-[#0a0e10]/75 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-[#0d1315]/90 hover:shadow-md hover:shadow-cyan-950/20 motion-reduce:transform-none motion-reduce:transition-none sm:p-6">
			<div className="flex items-center justify-between gap-4">
				<p className="font-mono text-[10px] tracking-[0.12em] text-zinc-500 sm:text-xs">
					PROJECT / <span className="text-cyan-300/80 transition-colors duration-200 group-hover:text-cyan-200 motion-reduce:transition-none">{index}</span>
				</p>
				<p
					className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-zinc-300"
					aria-label={`Project status: ${status}`}
				>
					<span className="pulse-subtle size-1.5 rounded-full bg-cyan-300/80 motion-reduce:animate-none" aria-hidden="true" />
					{status}
				</p>
			</div>

			<div className="mt-8">
				<h3 className="text-xl font-semibold text-zinc-100 transition-colors group-hover:text-cyan-100 sm:text-2xl">
					{title}
				</h3>
				<p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>
			</div>

			<ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
				{technologies.map((technology) => (
					<li
						key={technology}
						className="rounded border border-white/10 bg-black/30 px-2.5 py-1 font-mono text-[10px] text-zinc-400 transition-colors duration-200 hover:border-cyan-300/30 hover:bg-cyan-300/[0.04] hover:text-zinc-200 motion-reduce:transition-none sm:text-xs"
					>
						{technology}
					</li>
				))}
			</ul>

			<div className="mt-auto pt-8">
				<a
					href={githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`View source for ${title}`}
					className="group/link inline-flex min-h-11 items-center gap-2 border-t border-white/10 pt-4 font-mono text-xs tracking-wider text-zinc-400 transition-colors hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 motion-reduce:transition-none"
				>
					VIEW SOURCE
					<span aria-hidden="true" className="text-cyan-300/70 transition-transform group-hover/link:translate-x-0.5 group-focus-visible/link:translate-x-0.5 motion-reduce:transition-none">
						↗
					</span>
				</a>
			</div>
		</article>
	);
}