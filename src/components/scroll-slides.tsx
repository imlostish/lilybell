"use client";

import { m, useScroll, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export const ScrollSlides = () => {
	const container = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["250px center", "center center"],
		axis: "y",
	});

	const yi2Raw = useTransform(scrollYProgress, [0, 1], [36, 720]);
	const yi3Raw = useTransform(scrollYProgress, [0, 1], [64, 1440]);

	const yi2 = useSpring(yi2Raw, {
		stiffness: 80,
		damping: 20,
	});
	const yi3 = useSpring(yi3Raw, {
		stiffness: 80,
		damping: 20,
	});

	return (
		<div ref={container} className="relative hidden lg:block col-span-1">
			<div className="absolute">
				<Image
					className="hidden lg:block min-w-[30rem] max-w-[30rem] min-h-[25rem] max-h-[25rem] rounded-2xl object-cover"
					src="/img/slides/129109482_p0.png"
					alt=""
					width={480}
					height={480}
				/>
			</div>
			<m.div
				className="absolute top-9"
				initial={{
					y: 36,
				}}
				style={{ y: yi2 }}
			>
				<Image
					className="hidden lg:block min-w-[30rem] max-w-[30rem] min-h-[25rem] max-h-[25rem] rounded-2xl object-cover"
					src="/img/slides/128605825_p0.png"
					alt=""
					width={480}
					height={480}
				/>
			</m.div>
			<m.div
				className="absolute top-16"
				initial={{
					y: 64,
				}}
				style={{ y: yi3 }}
			>
				<Image
					className="hidden lg:block min-w-[30rem] max-w-[30rem] min-h-[25rem] max-h-[25rem] rounded-2xl object-cover"
					src="/img/slides/GiNRJ5cXIAAT_SQ.jpeg"
					alt=""
					width={480}
					height={480}
				/>
			</m.div>
		</div>
	);
};
