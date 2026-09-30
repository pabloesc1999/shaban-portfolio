"use client";

import { useEffect, useState } from "react";

const terminalLines = [
	"$ whoami",
	"> shaban.saeed",
	"$ role",
	"> android_developer",
	"$ stack",
	"> kotlin / android / next.js",
	"$ status",
	"> system_online",
];

export default function Hero() {
	const [visibleLineCount, setVisibleLineCount] = useState(0);

	useEffect(() => {
		if (visibleLineCount >= terminalLines.length) return;

		const timer = window.setTimeout(() => {
			setVisibleLineCount((count) => count + 1);
		}, 450);

		return () => window.clearTimeout(timer);
	}, [visibleLineCount]);

	return (
		<section
			id="top"
			aria-labelledby="hero-title"
			className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#050708] px-6 pb-24 pt-28 text-white max-sm:pt-22 sm:px-10"
		>
			<div
				className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]"
				aria-hidden="true"
			/>
			<div
				className="pointer-events-none absolute left-1/4 top-1/2 -z-10 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.07] blur-[120px]"
				aria-hidden="true"
			/>

			<div className="mx-auto grid w-full max-w-6xl items-center gap-14 max-sm:gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
				<div className="max-w-2xl">
					<p className="mb-7 flex items-center gap-3 font-mono text-xs tracking-[0.16em] text-emerald-300/90 max-sm:mb-4">
						<span className="pulse-subtle size-1.5 rounded-full bg-emerald-300 motion-reduce:animate-none" aria-hidden="true" />
						SYSTEM ONLINE
					</p>

					<h1
						id="hero-title"
						className="fade-up font-mono text-6xl font-semibold leading-[0.92] motion-reduce:animate-none max-[350px]:text-5xl sm:text-8xl"
						style={{ animationDelay: "80ms" }}
					>
						<span className="block">SHABAN</span>
						<span className="mt-3 block text-zinc-500">SAEED</span>
					</h1>

					<p
						className="fade-up mt-8 font-mono text-lg text-cyan-300 motion-reduce:animate-none max-sm:mt-5 sm:text-xl"
						style={{ animationDelay: "150ms" }}
					>
						&gt; Android Developer<span className="animate-pulse motion-reduce:animate-none">_</span>
					</p>
					<p
						className="fade-up mt-5 max-w-xl text-base leading-7 text-zinc-400 motion-reduce:animate-none sm:text-lg sm:leading-8"
						style={{ animationDelay: "210ms" }}
					>
						I build Android applications with Kotlin and explore modern web technologies to turn ideas into functional digital products.
					</p>

					<div
						className="fade-up mt-9 flex flex-wrap gap-3 motion-reduce:animate-none max-sm:mt-6 max-[350px]:gap-2"
						style={{ animationDelay: "270ms" }}
					>
						<a
							href="#projects"
							className="inline-flex min-h-12 items-center rounded-md bg-cyan-300 px-5 font-medium text-[#041012] transition-colors hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 max-[350px]:px-3"
						>
							Explore Work <span className="ml-2" aria-hidden="true">→</span>
						</a>
						<a
							href="https://github.com/pabloesc1999"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex min-h-12 items-center rounded-md border border-white/15 px-5 text-zinc-200 transition-colors hover:border-cyan-300/50 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 max-[350px]:px-3"
						>
							GitHub <span className="ml-2" aria-hidden="true">↗</span>
						</a>
					</div>
				</div>

				<div
					className="fade-up w-full motion-reduce:animate-none lg:pl-2"
					style={{ animationDelay: "330ms" }}
				>
					<div className="overflow-hidden rounded-xl border border-white/10 bg-[#090d10]/90 shadow-2xl shadow-black/30 backdrop-blur-md">
						<div className="flex items-center gap-2 border-b border-white/8 px-5 py-4 max-sm:py-3">
							<span className="size-2.5 rounded-full bg-rose-400/70" aria-hidden="true" />
							<span className="size-2.5 rounded-full bg-amber-300/70" aria-hidden="true" />
							<span className="size-2.5 rounded-full bg-emerald-400/70" aria-hidden="true" />
							<span className="ml-3 font-mono text-xs text-zinc-500">shaban@portfolio</span>
						</div>
						<div
							className="min-h-72 space-y-3 px-5 py-6 font-mono text-xs leading-relaxed max-sm:space-y-2 max-sm:py-4 sm:px-7 sm:py-8 sm:text-sm"
							aria-label="Terminal output"
							aria-live="polite"
						>
							{terminalLines.map((line, index) => (
								<p
									key={line}
									className={`transition-opacity duration-300 motion-reduce:opacity-100 ${index < visibleLineCount ? "opacity-100" : "opacity-0"} ${line.startsWith("$") ? "text-zinc-400" : "text-cyan-100/80"}`}
								>
									{line}
								</p>
							))}
							<span
								className="inline-block h-4 w-1.5 animate-pulse bg-cyan-300/80 align-middle motion-reduce:animate-none"
								aria-hidden="true"
							/>
						</div>
					</div>
				</div>
			</div>

			<a
				href="#about"
				className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-zinc-500 transition-colors hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
			>
				SCROLL
				<span className="h-8 w-px origin-top animate-[bounce_3s_ease-in-out_infinite] bg-gradient-to-b from-cyan-300/70 to-transparent motion-reduce:animate-none" aria-hidden="true" />
			</a>
		</section>
	);
}
