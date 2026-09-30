export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-white/10 bg-[#050708] px-6 py-8 text-white sm:px-10 sm:py-10">
			<div className="mx-auto max-w-6xl">
				<div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
					<div className="max-w-xs">
						<p className="font-mono text-xs tracking-[0.14em] text-cyan-300/90">
							SYSTEM // SHABAN SAEED
						</p>
						<p className="mt-3 text-sm text-zinc-400">
							Building software. Learning continuously.
						</p>
					</div>

					<nav aria-label="Footer navigation">
						<ul className="flex flex-wrap gap-x-6 gap-y-3">
							{[
								{ label: "ABOUT", href: "#about" },
								{ label: "SKILLS", href: "#skills" },
								{ label: "PROJECTS", href: "#projects" },
								{ label: "CONTACT", href: "#contact" },
							].map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										className="group relative inline-flex min-h-11 items-center font-mono text-[10px] tracking-[0.12em] text-zinc-400 transition-colors duration-200 hover:text-cyan-200 focus-visible:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 motion-reduce:transition-none"
									>
										{link.label}
										<span
											className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-cyan-300/70 transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
											aria-hidden="true"
										/>
									</a>
								</li>
							))}
						</ul>
					</nav>

					<p
						className="flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-zinc-400"
						aria-label="System status: online"
					>
						<span
							className="pulse-subtle size-1.5 rounded-full bg-emerald-300 motion-reduce:animate-none"
							aria-hidden="true"
						/>
						SYSTEM ONLINE
					</p>
				</div>

				<div className="mt-8 border-t border-white/8 pt-4">
					<p className="font-mono text-[10px] tracking-wider text-zinc-400/80">
						© {currentYear} SHABAN SAEED
					</p>
				</div>
			</div>
		</footer>
	);
}