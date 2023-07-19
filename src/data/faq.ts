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
			question: "Kapan bakal ada open recruitment?",
			// eslint-disable-next-line quotes
			answer: 'Open recruitment WRI biasanya diadakan di awal tahun ajaran baru, sekitar bulan September. Acara ini terbuka untuk siapa saja, termasuk mahasiswa baru yang belum memiliki pengalaman riset informatika sebelumnya. Jangan lupa pantau akun Instagram WRI untuk informasi terbaru dan ikuti acara "Early Access" untuk pengenalan WRI.',
		},
		{
			question: "Early Access itu acara apa sih?",
			answer: "Jadi Early Access tuh acara casual buat kenalan sama WRI kita. Kita bisa santai-santai ngobrol dan tanya-tanya tentang WRI, seru banget deh! Jadi jangan sampai ketinggalan!",
		},
		{
			question: "Acara yang ada di WRI itu apa aja?",
			answer: "Di WRI banyak acara yang bisa kamu ikutin! Ada miniclass yg isinya ada 4 topik: web development, mobile app development, game development, dan ui/ux design. Selain itu, ada juga acara open talks mirip seminar, dan acara WRI OOT yang santai banget buat ngobrol-ngobrol tentang hal-hal random seputar IT.",
		},
		{
			question: "Siapa yg bakal ngajar di miniclass?",
			answer: "Tiap miniclass bakal ada mentornya sendiri-sendiri. Nah, mentornya ini mahasiswa yang udah punya pengalaman di bidangnya masing masing. Kalo kamu juga punya keahlian di bidang IT tertentu dan pengen jadi mentor, boleh banget lho kasih tau kita! Kami selalu terbuka buat orang-orang berbakat kaya kamu.",
		},
	],
};
