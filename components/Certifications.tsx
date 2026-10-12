import Reveal from "@/components/Reveal";

type Certification = {
	name: string;
	issuer: string;
	date: string;
	filePath: string;
};

const certifications: Certification[] = [
	{
		name: "GenAI Job Simulation",
		issuer: "BCG X",
		date: "October 9, 2026",
		filePath: "/certificates/BCG%20X%20certificate.pdf",
	},
	{
		name: "GenAI for Proposal Generation Job Simulation",
		issuer: "EAB",
		date: "October 8, 2026",
		filePath: "/certificates/EAB%20certificate.pdf",
	},
	{
		name: "Cybersecurity Job Simulation",
		issuer: "Mastercard",
		date: "October 8, 2026",
		filePath: "/certificates/Shaban%20Master%20card%20Cyber%20security.pdf",
	},
	{
		name: "GenAI Powered Data Analytics Job Simulation",
		issuer: "Tata",
		date: "October 9, 2026",
		filePath: "/certificates/TATA%20certificate.pdf",
	},
	{
		name: "AI in Action Job Simulation",
		issuer: "Vista",
		date: "October 9, 2026",
		filePath: "/certificates/Vista%20certificate.pdf",
	},
	{
		name: "Advanced Software Engineering Job Simulation",
		issuer: "Walmart Global Tech",
		date: "October 9, 2026",
		filePath: "/certificates/Walmart%20certificate.pdf",
	},
];

export default function Certifications() {
	return (
		<section
			id="certifications"
			aria-labelledby="certifications-title"
			className="relative isolate overflow-hidden border-t border-white/10 bg-[#070a0c] px-6 py-24 text-white sm:px-10 sm:py-32"
		>
			<div
				className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:56px_56px]"
				aria-hidden="true"
			/>
			<div
				className="pointer-events-none absolute right-0 top-1/4 -z-10 size-96 rounded-full bg-cyan-400/[0.04] blur-[120px]"
				aria-hidden="true"
			/>

			<Reveal>
				<div className="mx-auto max-w-6xl">
					<div className="max-w-2xl">
						<p className="font-mono text-xs tracking-[0.16em] text-cyan-300 sm:text-sm">
							04 / CERTIFICATIONS
						</p>
						<h2
							id="certifications-title"
							className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl"
						>
							Credentials &amp; Certifications.
						</h2>
						<p className="mt-5 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
							Certificates of completion from job simulations and professional learning programs.
						</p>
					</div>

					{certifications.length > 0 ? (
						<div className="mt-12 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
							{certifications.map((certification, index) => (
								<article
									key={certification.filePath}
									className="flex h-full flex-col rounded-lg border border-white/10 bg-[#0a0e10]/75 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-[#0d1315]/90 hover:shadow-md hover:shadow-cyan-950/20 motion-reduce:transform-none motion-reduce:transition-none sm:p-6"
								>
									<div className="flex items-center justify-between gap-4">
										<p className="font-mono text-[10px] tracking-[0.12em] text-zinc-500 sm:text-xs">
											CERTIFICATE / <span className="text-cyan-300/80">{String(index + 1).padStart(2, "0")}</span>
										</p>
										<p className="font-mono text-[10px] tracking-wider text-zinc-500">PDF</p>
									</div>
									<h3 className="mt-7 text-xl font-semibold leading-snug text-zinc-100 sm:text-2xl">
										{certification.name}
									</h3>
									<dl className="mt-6 space-y-3 text-sm">
										<div className="flex flex-wrap justify-between gap-x-4 gap-y-1">
											<dt className="font-mono text-xs text-zinc-500">ISSUER</dt>
											<dd className="text-right text-zinc-300">
												{certification.issuer}
											</dd>
										</div>
										<div className="flex flex-wrap justify-between gap-x-4 gap-y-1">
											<dt className="font-mono text-xs text-zinc-500">COMPLETED</dt>
											<dd className="text-right text-zinc-300">
												{certification.date}
											</dd>
										</div>
									</dl>
									<div className="mt-auto pt-8">
										<a
											href={certification.filePath}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`View ${certification.name} certificate (PDF, opens in a new tab)`}
											className="group/link inline-flex min-h-11 items-center gap-2 border-t border-white/10 pt-4 font-mono text-xs tracking-wider text-zinc-400 transition-colors hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 motion-reduce:transition-none"
										>
											VIEW CERTIFICATE
											<span aria-hidden="true" className="text-cyan-300/70 transition-transform group-hover/link:translate-x-0.5 group-focus-visible/link:translate-x-0.5 motion-reduce:transition-none">
												↗
											</span>
										</a>
									</div>
								</article>
							))}
						</div>
					) : (
						<div
							role="status"
							className="mt-12 rounded-lg border border-white/10 bg-white/[0.025] px-5 py-6 backdrop-blur-sm sm:px-6 sm:py-8"
						>
							<p className="font-mono text-xs tracking-[0.14em] text-zinc-400">
								CREDENTIAL ARCHIVE
							</p>
							<p className="mt-3 text-sm leading-6 text-zinc-300 sm:text-base">
								Certification details will be added here.
							</p>
						</div>
					)}
				</div>
			</Reveal>
		</section>
	);
}