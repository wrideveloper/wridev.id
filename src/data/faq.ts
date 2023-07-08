import type { Faq } from "~/models/faq";

export type FaqData = {
	title: string;
	subtitle: string;
	miniTitle: string;
	faqs: Faq[];
};

export const FAQ_DATA: FaqData = {
	title: "FAQ",
	subtitle: "Masih bingung? Cari jawabannya disini",
	miniTitle: "Frequently Asked Questions",
	faqs: [
		{
			question: "Kapan open recruitment?",
			answer: "Open recruitement dilakukan setiap tahun ajaran baru.",
		},
		{
			question: "Pertanyaan lain",
			answer: "Jawaban lain",
		},
	],
};
