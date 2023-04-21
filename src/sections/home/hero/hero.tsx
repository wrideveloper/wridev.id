import { Button } from "~/components/button";
import Image from "next/image";

export function HeroSection() {
	return (
		<section className="mx-auto max-w-screen-2xl h-[800px] pl-8 grid grid-cols-2">
			<div className="h-full flex flex-col items-start justify-center text-gray-600">
				<h1 className="font-bold text-7xl">
					Learn Together, <br /> Grow Together
				</h1>
				<p className="text-xl font-semibold py-8">
					Bersama Workshop Riset Informatika, sudahi galaumu mari nguli ngoding bersamaku, bersama tuhan mari
					kita kerjakan seluruh proyekan.
				</p>
				<div className="mb-14 flex flex-col gap-1">
					<span className="text-lg leading-7 font-bold">Muhammad Ilzam M. / Suku</span>
					<span className="text-lg leading-7 font-normal">HOKAGE WRI 9</span>
				</div>
				<Button>Telusuri Selengkapnya</Button>
			</div>
			<div className="relative w-full h-full rounded-b-3xl overflow-hidden">
				<Image src="/assets/hero.png" alt="Hero" fill className="object-cover" />
			</div>
		</section>
	);
}
