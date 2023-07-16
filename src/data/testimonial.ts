import type { Testimonial } from "~/models/testimonial";

export type TestimonialData = {
	title: string;
	subtitle: string;
	miniTitle: string;
	testimonials: Testimonial[];
};

export const TESTIMONIAL_DATA: TestimonialData = {
	title: "Cerita inspiratif alumni tentang pengalaman mereka di WRI",
	subtitle: "Komunitas WRI tak hanya mengubah karier mereka, tetapi juga cara pandang terhadap teknologi",
	miniTitle: "What people say about Workshop Riset Informatika",
	testimonials: Array(16)
		.fill(0)
		.map((_, index) => ({
			name: `John Doe ${index}`,
			position: "CEO Workshop Riset Informatika",
			testimony:
				"I am a very happy user of Workshop Riset Informatika. It has been a great experience working with them.",
		})),
};
