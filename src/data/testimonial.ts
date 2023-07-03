export type Testimonial = {
	name: string;
	profileImage?: string;
	position: string;
	testimony: string;
};

export type TestimonialData = {
	title: string;
	subtitle: string;
	miniTitle: string;
	testimonials: Testimonial[];
};

export const TESTIMONIAL_DATA: TestimonialData = {
	title: "Testimonials",
	subtitle: "See what they say about us. They are the people who have collaborate with us.",
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
