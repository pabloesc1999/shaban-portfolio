"use client";

import { useEffect, useState } from "react";

const links = [
	{ label: "About", href: "#about" },
	{ label: "Stack", href: "#skills" },
	{ label: "Projects", href: "#projects" },
	{ label: "Contact", href: "#contact" },
];

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("top");
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const sectionIds = ["top", "about", "skills", "projects", "contact"];
		const sections = sectionIds
			.map((id) => document.getElementById(id))
			.filter((section): section is HTMLElement => section !== null);
		const visibleSections = new Map<string, number>();
		let currentActiveSection = "top";

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						visibleSections.set(entry.target.id, entry.intersectionRatio);
					} else {
						visibleSections.delete(entry.target.id);
					}
				}

				const nextActiveSection = [...visibleSections.entries()].sort(
					(first, second) => second[1] - first[1],
				)[0]?.[0];

				if (nextActiveSection && nextActiveSection !== currentActiveSection) {
					currentActiveSection = nextActiveSection;
					setActiveSection(nextActiveSection);
				}
			},
			{ rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.15] },
		);

		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		let wasScrolled = false;
		const updateScrollState = () => {
			const nextIsScrolled = window.scrollY > 8;
			if (nextIsScrolled === wasScrolled) return;

			wasScrolled = nextIsScrolled;
			setIsScrolled(nextIsScrolled);
		};

		const initialFrame = window.requestAnimationFrame(updateScrollState);
		window.addEventListener("scroll", updateScrollState, { passive: true });
		return () => {
			window.cancelAnimationFrame(initialFrame);
			window.removeEventListener("scroll", updateScrollState);
		};
	}, []);

	return (
		<nav
			aria-label="Main navigation"
			className={`fixed inset-x-0 top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-6xl rounded-xl border text-white backdrop-blur-xl transition-all duration-300 motion-reduce:transition-none ${isScrolled ? "border-white/15 bg-black/85 shadow-xl shadow-black/20" : "border-white/10 bg-black/70 shadow-lg shadow-black/10"}`}
		>
			<div className="flex min-h-14 items-center justify-between px-4 sm:px-6">
				<a
					href="#top"
					aria-current={activeSection === "top" ? "location" : undefined}
					className={`group relative font-mono text-sm font-semibold tracking-[0.12em] transition-colors duration-200 motion-reduce:transition-none ${activeSection === "top" ? "text-cyan-200" : "text-white hover:text-cyan-300"}`}
				>
					[ SHABAN ]
					<span
						className={`absolute inset-x-0 -bottom-1 h-px origin-center bg-cyan-300 transition-transform duration-200 motion-reduce:transition-none ${activeSection === "top" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
						aria-hidden="true"
					/>
				</a>

				<div className="hidden items-center gap-8 md:flex">
					<div className="flex items-center gap-7">
						{links.map((link) => {
							const isActive = activeSection === link.href.slice(1);
							return (
								<a
									key={link.href}
									href={link.href}
									aria-current={isActive ? "location" : undefined}
									className={`group relative py-5 text-sm transition-colors duration-200 motion-reduce:transition-none ${isActive ? "text-cyan-200" : "text-white/65 hover:text-cyan-300"}`}
								>
									{link.label}
									<span
										className={`absolute inset-x-0 bottom-3 h-px origin-left bg-cyan-300 transition-transform duration-200 motion-reduce:transition-none ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
										aria-hidden="true"
									/>
								</a>
							);
						})}
					</div>
					<span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] text-white/65">
						<span className="relative flex size-2" aria-hidden="true">
							<span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/50 motion-reduce:animate-none" />
							<span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
						</span>
						ONLINE
					</span>
				</div>

				<button
					type="button"
					className="flex size-11 items-center justify-center rounded-md text-white/80 transition-colors hover:bg-white/5 hover:text-cyan-300 md:hidden"
					aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
					aria-expanded={isMenuOpen}
					aria-controls="mobile-navigation"
					onClick={() => setIsMenuOpen((open) => !open)}
				>
					<span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
						<span className={`h-px w-full bg-current transition-transform ${isMenuOpen ? "translate-y-[4px] rotate-45" : ""}`} />
						<span className={`h-px w-full bg-current transition-opacity ${isMenuOpen ? "opacity-0" : ""}`} />
						<span className={`h-px w-full bg-current transition-transform ${isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
					</span>
				</button>
			</div>

			<div
				id="mobile-navigation"
				hidden={!isMenuOpen}
				aria-hidden={!isMenuOpen}
				inert={!isMenuOpen}
				className="border-t border-white/10 px-4 py-3 md:hidden"
			>
				<div className="flex flex-col">
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							aria-current={activeSection === link.href.slice(1) ? "location" : undefined}
							className={`flex items-center rounded-md px-2 py-3 text-sm transition-colors duration-200 motion-reduce:transition-none ${activeSection === link.href.slice(1) ? "bg-cyan-300/[0.06] text-cyan-200" : "text-white/70 hover:bg-white/5 hover:text-cyan-300"}`}
							onClick={() => setIsMenuOpen(false)}
						>
							<span
								className={`mr-2 size-1.5 rounded-full ${activeSection === link.href.slice(1) ? "bg-cyan-300" : "bg-transparent"}`}
								aria-hidden="true"
							/>
							{link.label}
						</a>
					))}
				</div>
				<div className="mt-2 flex items-center gap-2 border-t border-white/10 px-2 pt-3 font-mono text-[10px] tracking-[0.14em] text-white/60">
					<span className="size-2 rounded-full bg-emerald-400" aria-hidden="true" />
					ONLINE
					</div>
			</div>
		</nav>
	);
}
