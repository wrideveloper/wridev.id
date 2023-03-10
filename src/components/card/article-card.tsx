type ArticleCardProps = {
	type: "large" | "small";
	image: string;
	title: string;
	description: string;
	postedAt: Date;
	postedBy: string;
};

export function ArticleCard(props: ArticleCardProps) {
	return <div>article card</div>;
}
