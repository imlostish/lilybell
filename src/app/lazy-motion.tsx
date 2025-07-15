import { LazyMotion } from "motion/react";
import type React from "react";

const loadFeatures = await import("./features").then((res) => res.default);

const LazyAnimations = (props: Readonly<{ children: React.ReactNode }>) => {
	return (
		<LazyMotion features={loadFeatures} strict>
			{props.children}
		</LazyMotion>
	);
};

export default LazyAnimations;
