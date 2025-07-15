import ContactForm from "@/components/contact-form";
import { Card } from "@/components/ui/card";

export const ContactSection = () => {
	return (
		<section className="grid grid-cols-1 place-items-center py-8 gap-16">
			<h2 className="text-6xl font-quintessential">Dejame tu mensaje</h2>
			<Card className="shadow-2xl shadow-amber-500/40 px-6">
				<ContactForm />
			</Card>
		</section>
	);
};
