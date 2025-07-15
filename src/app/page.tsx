import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";

export default function Home() {
	return (
		<main className="min-h-screen py-8 px-16">
			<HeroSection />
			<AboutSection />
			<ContactSection />
		</main>
	);
}
