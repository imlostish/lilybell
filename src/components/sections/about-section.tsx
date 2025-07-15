import Image from "next/image";
import { ScrollSlides } from "@/components/scroll-slides";

export const AboutSection = () => {
	return (
		<section className="grid grid-cols-1 lg:grid-cols-2 lg:h-[220vh]">
			<ScrollSlides />
			<article className="grid grid-rows-3 gap-24">
				<div>
					<Image
						className="lg:hidden"
						src="/img/slides/129109482_p0.png"
						alt=""
						width={480}
						height={480}
					/>
					<div>
						<h2 className="text-6xl font-quintessential mb-8">About me</h2>
						<p className="text-sm font-mono mb-2">
							Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
							faucibus ex sapien vitae pellentesque sem placerat. In id cursus
							mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
							urna tempor.
						</p>
						<p className="text-sm font-mono mb-2">
							Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
							Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
							hendrerit semper vel class aptent taciti sociosqu. Ad litora
							torquent per conubia nostra inceptos himenaeos.
						</p>
					</div>
				</div>
				<div>
					<Image
						className="lg:hidden"
						src="/img/slides/128605825_p0.png"
						alt=""
						width={480}
						height={480}
					/>
					<div>
						<h3 className="text-4xl font-quintessential mb-8">Sub Section 1</h3>
						<p className="text-sm font-mono mb-2">
							Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
							faucibus ex sapien vitae pellentesque sem placerat. In id cursus
							mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
							urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
							egestas. Iaculis massa nisl malesuada lacinia integer nunc
							posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
							litora torquent per conubia nostra inceptos himenaeos.
						</p>
						<p className="text-sm font-mono mb-2">
							Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
							faucibus ex sapien vitae pellentesque sem placerat. In id cursus
							mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
							urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
							egestas. Iaculis massa nisl malesuada lacinia integer nunc
							posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
							litora torquent per conubia nostra inceptos himenaeos.
						</p>
					</div>
				</div>
				<div>
					<Image
						className="lg:hidden"
						src="/img/slides/GiNRJ5cXIAAT_SQ.jpeg"
						alt=""
						width={480}
						height={480}
					/>
					<div>
						<h3 className="text-4xl font-quintessential mb-8">Sub Section 2</h3>
						<p className="text-sm font-mono mb-2">
							Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
							faucibus ex sapien vitae pellentesque sem placerat. In id cursus
							mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
							urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
							egestas. Iaculis massa nisl malesuada lacinia integer nunc
							posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
							litora torquent per conubia nostra inceptos himenaeos.
						</p>
						<p className="text-sm font-mono mb-2">
							Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
							faucibus ex sapien vitae pellentesque sem placerat. In id cursus
							mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
							urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
							egestas. Iaculis massa nisl malesuada lacinia integer nunc
							posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
							litora torquent per conubia nostra inceptos himenaeos.
						</p>
					</div>
				</div>
			</article>
		</section>
	);
};
