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
			answer: "Di WRI banyak acara seru yang bisa kamu ikutan, guys! Ada miniclass yang lebih santai daripada kelas kampus, ada 4 pilihan topik: web development, mobile app development, game development, dan ui/ux design. Selain itu, ada juga acara open talks mirip seminar, dan acara WRI OOT yang santai banget buat ngobrol-ngobrol tentang hal-hal random seputar IT, seru banget deh!",
		},
		{
			question: "Siapa yg bakal ngajar di miniclass?",
			answer: "Di tiap miniclass bakal ada mentornya sendiri-sendiri, guys. Nah, mentornya ini sebenarnya mahasiswa yang udah punya pengalaman di bidang itu, jadi belajarnya lebih asik dan santai. Kalo kamu juga punya keahlian di bidang IT tertentu dan pengen jadi mentor, boleh banget lho kasih tau kita! Kami selalu terbuka buat orang-orang berbakat kayak kamu.",
		},
	],
};
