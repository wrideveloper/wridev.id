type Article = {
	title: string;
	image: string;
	postedAt: Date;
	author: string;
	description: string;
};

export const ARTICLE_ITEMS: Article[] = [
	{
		title: "UX Case Study — Trabuss (Aplikasi Pemesanan Trevel)",
		image: "/assets/articles/trabuss.png",
		postedAt: new Date("2020-11-02"),
		author: "Panji Awwaludi",
		description:
			"Di pulau sumatra sangat jarang sekali terdapat kereta api yang digunakan secara komersial sehingga seorang treveler asing yang biasa berpergian dengan menggu ....",
	},
	{
		title: "Start Golang with Gin Gonic Framework",
		image: "/assets/articles/golang.png",
		postedAt: new Date("2020-11-02"),
		author: "Panji Awwaludi",
		description:
			"Golang bahasa pemprograman yang dikembangkan di Google oleh Robert Griesemer, Rob Pike, dan Ken Thomps...",
	},
	{
		title: "Anak IT ‘GAK BISA’ Koding ?! Mau Jadi Apa??",
		image: "/assets/articles/laptop.png",
		postedAt: new Date("2020-11-02"),
		author: "Panji Awwaludi",
		description:
			"Tidak sedikit diantara kita terutama anak yang terjun di dunia IT pasti pernah mengalami masa sulit di bidang...",
	},
];
