import { TechnologySlider } from "~/sections/home/miniclass/components/technology-slider";
import { MINICLASS_ITEMS } from "~/sections/home/miniclass/miniclass-data";
import { MiniclassCard } from "~/sections/home/miniclass/components/miniclass-card";
import Image from "next/image";

export function MiniclassSection() {
	return (
		<section className="mx-auto px-8 pt-10 max-w-screen-2xl">
			<h2 className="text-center text-2xl leading-8 text-gray-600 font-medium">
				Kami selalu mengikuti perkembangan dengan teknologi terbaru
			</h2>
			<TechnologySlider />
			<div className="mx-auto">
				<div className="relative rounded-3xl bg-amber-400 overflow-hidden p-16 h-[420px]">
					<Image
						className="saturate-0 brightness-200 opacity-20 absolute right-0 translate-x-20 translate-y-20"
						src="/assets/wri-logo-only.png"
						alt="WRI Logo Only"
						width={320}
						height={320}
					/>
					<h1 className="text-4xl font-bold leading-10 text-white mb-6">Workshop Riset Informatika</h1>
					<p className="text-2xl font-medium leading-8 text-white">
						Suatu komunitas mahasiswa IT Polinema dengan tujuan membina serta mengembangkan kreativitas
						mahasiswa di bidang Ilmu Pengetahuan dan Teknologi
					</p>
				</div>
				<div className="grid grid-cols-4 items-center justify-center gap-10 max-w-screen-xl mx-auto -translate-y-32">
					{MINICLASS_ITEMS.map((miniclass) => (
						<MiniclassCard key={miniclass.name} {...miniclass} />
					))}
				</div>
			</div>
		</section>
	);
}
