import Image from "next/image";

type ArticleCardProps = {
	type: "large" | "small";
	image: string;
	title: string;
	description: string;
	postedAt: Date;
	author: string;
};

function formatDate(date: Date) {
	return date.toLocaleString("id-ID", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
}

export function ArticleCard(props: ArticleCardProps) {
	return (
		<div
			className={`shadow-lg rounded-2xl overflow-hidden flex ${
				props.type === "large" ? "flex-col row-span-2" : "flex-row"
			}`}
		>
			<div className="relative w-full h-auto min-h-[16rem]">
				<Image className="object-cover" src={props.image} alt={props.title} fill />
			</div>
			<div className="p-4">
				<span className="text-3xl leading-9 font-bold text-gray-600 block mb-2">{props.title}</span>
				<span className="text-xm leading-5 text-gray-600 block mb-4">
					{formatDate(props.postedAt)} | {props.author}
				</span>
				<p className="text-xl leading-7 text-gray-600">{props.description}</p>
			</div>
		</div>
	);
}
