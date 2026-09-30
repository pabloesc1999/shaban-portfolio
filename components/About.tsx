import Reveal from "@/components/Reveal";

const aboutCards = [
	{
		number: "01",
		detail: "KTLN / NATIVE",
		title: "ANDROID",
		description: "Building native Android applications with Kotlin.",
	},
	{
		number: "02",
		detail: "LOGIC / SYSTEMS",
		title: "PROBLEM SOLVER",
		description: "Breaking problems down into smaller, understandable systems.",
	},
	{
		number: "03",
		detail: "LEARN / ITERATE",
		title: "CONTINUOUS LEARNING",
		description: "Constantly expanding my development toolkit through practical projects.",
	},
];

export default function About() {
	return (
		<section
			id="about"
			aria-labelledby="about-title"
			className="relative isolate overflow-hidden border-t border-white/10 bg-[#070a0c] px-6 py-24 text-white sm:px-10 sm:py-32"
		>
			<div
				className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_12%_35%,rgba(34,211,238,0.07),transparent_38%)]"
				aria-hidden="true"
			/>

			<Reveal>
				<div className="mx-auto max-w-6xl">
				<p className="font-mono text-xs tracking-[0.16em] text-cyan-300 sm:text-sm">
					01 / ABOUT
				</p>
				<h2
					id="about-title"
					className="mt-5 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl"
				>
					Building. Learning. Improving.
				</h2>

				<div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-start lg:gap-16">
					<div className="max-w-2xl space-y-5 text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
						<p>
							I&apos;m an IT developer focused on Android development with Kotlin. I enjoy understanding how software works from the fundamentals and turning what I learn into functional projects.
						</p>
						<p>
							I&apos;m currently expanding into modern web development with Next.js, TypeScript, and Tailwind CSS.
						</p>
					</div>

					<aside
						aria-label="Current development focus"
						className="rounded-lg border border-white/10 bg-white/[0.025] p-5 backdrop-blur-sm sm:p-6"
					>
						<div className="flex items-center justify-between border-b border-white/10 pb-4">
							<h3 className="font-mono text-xs tracking-[0.14em] text-zinc-300">
								CURRENT FOCUS
							</h3>
							<span className="flex items-center gap-2 font-mono text-[10px] tracking-wider text-emerald-300/80">
								<span className="size-1.5 rounded-full bg-emerald-300" aria-hidden="true" />
								ACTIVE
							</span>
						</div>
						<ul className="mt-4 space-y-3 font-mono text-sm">
							<li className="flex items-center justify-between gap-4 text-zinc-200">
								<span>Android Development</span>
								<span className="text-[10px] text-cyan-300/60">[01]</span>
							</li>
							<li className="flex items-center justify-between gap-4 text-zinc-400">
								<span>Kotlin</span>
								<span className="text-[10px] text-zinc-400/80">[02]</span>
							</li>
							<li className="flex items-center justify-between gap-4 text-zinc-400">
								<span>Modern Web</span>
								<span className="text-[10px] text-zinc-400/80">[03]</span>
							</li>
						</ul>
					</aside>
				</div>

				<div className="mt-14 grid gap-4 md:grid-cols-3">
					{aboutCards.map((card) => (
						<article
							key={card.number}
							className="group min-h-52 rounded-lg border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.04] motion-reduce:transform-none sm:p-6"
						>
							<div className="flex items-center justify-between gap-3">
								<span className="font-mono text-sm text-cyan-300/80">{card.number}</span>
								<span className="font-mono text-[10px] tracking-wider text-zinc-400/80 transition-colors group-hover:text-cyan-100/60">
									{card.detail}
								</span>
							</div>
							<h3 className="mt-8 text-sm font-semibold tracking-wide text-zinc-100">
								{card.title}
							</h3>
							<p className="mt-3 text-sm leading-6 text-zinc-400">
								{card.description}
							</p>
						</article>
					))}
				</div>
				</div>
			</Reveal>
		</section>
	);
}
