import { ARTICLE_ITEMS } from "~/sections/home/articles/article-data";
import { ArticleCard } from "~/sections/home/articles/components/article-card";
import { Button } from "~/components/button";

export function ArticlesSection() {
	return (
		<section className="py-14">
			<span className="block text-3xl text-center font-bold text-gray-600">
				Kunjungi artikel yang pernah WRI Crew tulis.
			</span>
			<p className="text-2xl leading-8 font-medium text-center text-gray-600 mb-10">
				Membaca adalah jendela dunia.
			</p>
			<div className="grid grid-cols-2 gap-6 grid-rows-2 mx-auto max-w-screen-2xl mb-10 sm:px-8">
				{ARTICLE_ITEMS.map((article, index) => (
					<ArticleCard key={article.title} type={index === 0 ? "large" : "small"} {...article} />
				))}
			</div>
			<Button className="block mx-auto">Artikel Selengkapnya</Button>
		</section>
	);
}
