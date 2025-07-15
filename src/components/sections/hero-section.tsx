import { Badge } from "@/components/ui/badge";
import {
	TiktokLogoIcon,
	YoutubeLogoIcon,
	XLogoIcon,
	TwitchLogoIcon,
} from "@phosphor-icons/react/ssr";
import Link from "next/link";

const badges = [
	{
		key: "net-badge-01",
		href: "https://www.tiktok.com/@lilybell_vt",
		name: "Tiktok",
		icon: <TiktokLogoIcon />,
	},
	{
		key: "net-badge-02",
		href: "https://www.youtube.com/@LilyBell_VT/",
		name: "Youtube",
		icon: <YoutubeLogoIcon />,
	},
	{
		key: "net-badge-03",
		href: "https://x.com/LilyBell_VT",
		name: "Twitter",
		icon: <XLogoIcon />,
	},
	{
		key: "net-badge-04",
		href: "https://www.twitch.tv/lilybell_vt",
		name: "Twitch",
		icon: <TwitchLogoIcon />,
	},
];

const NetworksBadges = () => {
	return (
		<div className="flex flex-row flex-wrap gap-2">
			{badges?.map((b) => (
				<Link
					key={b.key}
					href={b.href}
					target="_blank"
					rel="noreferrer noopener"
				>
					<Badge>
						{b.icon}
						{b.name}
					</Badge>
				</Link>
			))}
		</div>
	);
};

export const HeroSection = () => {
	return (
		<section className="relative h-[90vh] flex flex-row">
			<div className="min-w-lg max-w-lg grid grid-cols-1 auto-rows-min z-10">
				<h1 className="font-quintessential text-8xl mb-8">Lilybell</h1>
				<span className="text-sm py-2">Tu golden retriever de confianza</span>
				<p className="text-lg my-4 py-2">
					¡Hola! Soy Lilybell, creadora de contenido desde hace un año y,
					actualmente, trabajo de forma independiente. Tengo 22 años y pongo
					todo mi corazón en lo que hago.
				</p>
				<NetworksBadges />
			</div>
		</section>
	);
};
