import { CREW_ITEMS } from "~/sections/home/crews/crew-data";
import { CrewCard } from "~/sections/home/crews/components/crew-card";
import { Button } from "~/components/button";

export function CrewsSection() {
	return (
		<section className="py-14">
			<span className="text-3xl font-bold text-gray-600 block text-center">Meet our Crew!</span>
			<p className="text-2xl font-medium text-gray-600 mb-10 text-center">
				Berikut adalah talent kami yang siap Bekerja
			</p>
			<div className="mx-auto max-w-screen-xl grid grid-cols-4 grid-rows-2 gap-24 mb-14">
				{CREW_ITEMS.map((crew) => (
					<CrewCard key={crew.name} {...crew} />
				))}
			</div>
			<Button className="block mx-auto">Lihat Lebih Banyak</Button>
		</section>
	);
}
