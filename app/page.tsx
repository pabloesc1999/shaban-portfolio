import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="min-h-screen bg-[#050708] text-white">
				<Hero />
				<About />
				<Skills />
				<Projects />
			<Contact />
			</main>
			<Footer />
		</>
	);
}