import Image from "next/image";
import Link from "next/link";
import CircleChevronRight from "~/icons/circle-chevron-right.svg";

type TalkCardProps = {
	title: string;
	image: string;
	description: string;
	slug: string;
};

export function TalkCard(props: TalkCardProps) {
	return (
		<div className="bg-white rounded-2xl p-8 shadow-lg">
			<span className="text-3xl leading-9 font-bold text-gray-600 mb-8 block">{props.title}</span>
			<div className="relative rounded-2xl overflow-hidden w-full h-[300px]">
				<Image className="object-cover" src={props.image} alt={props.title} fill />
			</div>
			<p className="text-xl leading-7 text-gray-600 py-8">{props.description}</p>
			<Link href={props.slug} className="flex gap-4 items-center">
				<CircleChevronRight /> <span className="text-xl font-bold leading-7 text-gray-600">Read More</span>
			</Link>
		</div>
	);
}
