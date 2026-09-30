export default function Contact() {
	return (
		<section
			id="contact"
			aria-labelledby="contact-title"
			className="relative isolate overflow-hidden border-t border-white/10 bg-[#070a0c] px-6 py-24 text-white sm:px-10 sm:py-32"
		>
			<div
				className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.016)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.016)_1px,transparent_1px)] bg-[size:56px_56px]"
				aria-hidden="true"
			/>
			<div
				className="pointer-events-none absolute right-0 top-0 -z-10 size-96 rounded-full bg-cyan-400/[0.045] blur-[120px]"
				aria-hidden="true"
			/>

			<div className="mx-auto max-w-6xl">
				<div className="max-w-2xl">
					<p className="font-mono text-xs tracking-[0.16em] text-cyan-300 sm:text-sm">
						04 / CONTACT
					</p>
					<h2
						id="contact-title"
						className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl"
					>
						Let&apos;s Build Something.
					</h2>
					<p className="mt-5 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
						Have a project, idea, or opportunity in mind? I&apos;m always interested in building useful software and learning something new along the way.
					</p>
				</div>

				<div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:gap-6">
					<div className="rounded-lg border border-white/10 bg-[#0a0e10]/75 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:shadow-md hover:shadow-cyan-950/20 motion-reduce:transform-none motion-reduce:transition-none sm:p-8">
						<div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
							<h3 className="font-mono text-xs tracking-[0.14em] text-zinc-200">
								OPEN CHANNEL
							</h3>
							<span className="font-mono text-[10px] tracking-wider text-zinc-400/80">
								CHANNEL / 01
							</span>
						</div>
						<p className="mt-5 max-w-lg text-sm leading-6 text-zinc-400 sm:text-base">
							Available for development projects, collaboration, and opportunities.
						</p>

						<div className="mt-8">
							<p className="mb-3 font-mono text-[10px] tracking-wider text-zinc-400">
								EMAIL ADDRESS
							</p>
							<a
								href="mailto:shabansaeed1999@gmail.com"
								aria-label="Email shabansaeed1999@gmail.com"
								className="inline-flex max-w-full break-all text-lg font-medium text-zinc-100 transition-colors duration-200 hover:text-white focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 motion-reduce:transition-none sm:text-2xl"
							>
								shabansaeed1999@gmail.com
							</a>
						</div>

						<div className="mt-8 flex flex-wrap gap-3">
							<a
								href="https://github.com/pabloesc1999"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub profile"
								className="group/github inline-flex min-h-11 items-center gap-2 rounded-md border border-white/10 px-4 font-mono text-xs tracking-wider text-zinc-300 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-cyan-300/[0.035] hover:text-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 motion-reduce:transform-none motion-reduce:transition-none"
							>
								GITHUB <span className="text-cyan-300/70 transition-transform group-hover/github:translate-x-0.5 group-focus-visible/github:translate-x-0.5 motion-reduce:transition-none" aria-hidden="true">↗</span>
							</a>
							<a
								href="https://www.linkedin.com/in/m-shaban-saeed-80b5a2316/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn profile"
								className="group/linkedin inline-flex min-h-11 items-center gap-2 rounded-md border border-white/10 px-4 font-mono text-xs tracking-wider text-zinc-300 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-cyan-300/[0.035] hover:text-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 motion-reduce:transform-none motion-reduce:transition-none"
							>
								LINKEDIN <span className="text-cyan-300/70 transition-transform group-hover/linkedin:translate-x-0.5 group-focus-visible/linkedin:translate-x-0.5 motion-reduce:transition-none" aria-hidden="true">↗</span>
							</a>
						</div>
					</div>

					<aside
						aria-label="Communication status"
						className="rounded-lg border border-white/10 bg-white/[0.025] p-5 backdrop-blur-sm sm:p-6"
					>
						<div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
							<h3 className="font-mono text-xs tracking-[0.12em] text-zinc-300">
								COMMUNICATION STATUS
							</h3>
							<span className="flex items-center gap-2 font-mono text-[10px] tracking-wider text-emerald-300/80">
								<span className="pulse-subtle size-1.5 rounded-full bg-emerald-300 motion-reduce:animate-none" aria-hidden="true" />
								ONLINE
							</span>
						</div>
						<dl className="mt-5 space-y-5 font-mono text-xs">
							<div className="flex items-center justify-between gap-4">
								<dt className="text-zinc-400">RESPONSE CHANNEL</dt>
								<dd className="text-right text-zinc-300">EMAIL / SOCIAL</dd>
							</div>
							<div className="flex items-center justify-between gap-4">
								<dt className="text-zinc-400">SYSTEM</dt>
								<dd className="text-right text-zinc-300">AVAILABLE</dd>
							</div>
						</dl>
					</aside>
				</div>

				<p className="mt-16 border-t border-white/10 pt-6 text-center font-mono text-[10px] tracking-[0.16em] text-zinc-400/80 sm:mt-20 sm:text-xs">
					END OF TRANSMISSION // SHABAN SAEED
				</p>
			</div>
		</section>
	);
}