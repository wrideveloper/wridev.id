type TechStack =
	| ".net"
	| "go"
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
	techStack: TechStack[];
};

export function ProjectCard(props: ProjectCardProps) {
	return <div>project card</div>;
}
