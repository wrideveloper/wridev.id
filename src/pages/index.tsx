import { Header } from "~/components/header";
import { HeroSection } from "~/sections/home/hero";
import { MiniclassSection } from "~/sections/home/miniclass";
import { TalksSection } from "~/sections/home/talks";
import { ArticlesSection } from "~/sections/home/articles";
import { ProjectsSection } from "~/sections/home/projects";
import { CrewsSection } from "~/sections/home/crews";

export default function HomePage() {
	return (
		<>
			<Header />
			<HeroSection />
			<MiniclassSection />
			<TalksSection />
			<ArticlesSection />
			<ProjectsSection />
			<CrewsSection />
		</>
	);
}
