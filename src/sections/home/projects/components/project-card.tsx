import Image from "next/image";

export type TechStack =
	| ".net"
	| "golang"
	| "laravel"
	| "mongodb"
	| "mysql"
	| "nodejs"
	| "php"
	| "postgresql"
	| "react"
	| "svelte"
	| "tailwindcss"
	| "typescript"
	| "vue";

type ProjectCardProps = {
	title: string;
	description: string;
	image: string;
	techStacks: TechStack[];
};

export function ProjectCard(props: ProjectCardProps) {
	return (
		<div className="bg-white p-8 rounded-xl shadow-lg flex gap-6">
			<div className="flex-1 relative rounded-lg overflow-hidden w-[52.5rem] h-auto">
				<Image src={props.image} alt={props.title} fill />
			</div>
			<div className="flex-[1.5] flex flex-col items-start justify-between">
				<div>
					<span className="text-3xl leading-9 font-bold text-gray-600 block mb-4">{props.title}</span>
					<p className="text-2xl leading-8 text-gray-600 mb-8">{props.description}</p>
				</div>
				<div>
					<span className="text-xl text-gray-600 font-medium block mb-3">Build with:</span>
					<div className="flex gap-6">
						{props.techStacks.map((tech) => (
							<Image
								key={tech}
								src={`/assets/tech-stacks/${tech}.png`}
								alt={tech}
								width={48}
								height={48}
								className="object-contain"
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
