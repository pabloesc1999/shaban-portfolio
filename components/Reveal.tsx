"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type RevealProps = {
	children: ReactNode;
	className?: string;
	delay?: number;
};

export default function Reveal({
	children,
	className,
	delay = 0,
}: RevealProps) {
	const elementRef = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const element = elementRef.current;
		if (!element) return;

		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		if (prefersReducedMotion) return;

		if (typeof IntersectionObserver === "undefined") {
			const frameId = window.requestAnimationFrame(() => setIsVisible(true));
			return () => window.cancelAnimationFrame(frameId);
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry?.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.15 },
		);

		observer.observe(element);
		return () => observer.disconnect();
	}, []);

	const revealClasses = isVisible
		? "fade-up translate-y-0 opacity-100 motion-reduce:animate-none"
		: "translate-y-3 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100";
	const safeDelay = Number.isFinite(delay) ? Math.max(0, delay) : 0;

	return (
		<div
			ref={elementRef}
			className={` ${revealClasses} ${className ?? ""}`.trim()}
			style={isVisible ? { animationDelay: `${safeDelay}ms` } : undefined}
		>
			{children}
		</div>
	);
}