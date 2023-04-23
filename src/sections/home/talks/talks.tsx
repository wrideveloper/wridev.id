import { TALK_ITEMS } from "~/sections/home/talks/talks-data";
import { TalkCard } from "~/sections/home/talks/components/talk-card";

export function TalksSection() {
	return (
		<section className="with-square-bg relative w-full bg-amber-400 py-20 overflow-hidden">
			<style jsx>{`
				.with-square-bg::before,
				.with-square-bg::after {
					content: "";
					z-index: 0;
					position: absolute;
					border-radius: 80px;
					background-color: rgb(252 211 77);
					width: 1600px;
					height: 980px;
					transform: rotateZ(45deg);
				}

				.with-square-bg::before {
					left: 12rem;
					top: 32rem;
				}

				.with-square-bg::after {
					left: 59rem;
					top: -20rem;
				}
			`}</style>
			<span className="block text-white text-4xl font-bold leading-10 text-center mb-3 relative z-10">
				Yuk, lihat kesuksesan kegiatan dari WRI.
			</span>
			<p className="text-white text-3xl leading-9 font-medium text-center mb-10 relative z-10">
				Berbagai acara diadakan dengan tujuan menambah wawasan mengenai teknologi informasi.
			</p>
			<div className="grid grid-cols-3 gap-10 max-w-screen-2xl mx-auto relative z-10">
				{TALK_ITEMS.map((talk) => (
					<TalkCard key={talk.slug} {...talk} />
				))}
			</div>
		</section>
	);
}
