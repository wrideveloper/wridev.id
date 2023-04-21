import { Header } from "~/components/header";
import { HeroSection } from "~/sections/home/hero";
import { MiniclassSection } from "~/sections/home/miniclass";
import { TalksSection } from "~/sections/home/talks";

export default function HomePage() {
	return (
		<>
			<Header />
			<HeroSection />
			<MiniclassSection />
			<TalksSection />
		</>
	);
}
