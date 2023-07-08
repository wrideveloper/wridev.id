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
			answer: 'Nah, open recruitment biasanya digelar di awal tahun ajaran baru, kira-kira bulan September gitu. Yang seru, acara ini terbuka buat siapa aja, termasuk mahasiswa baru yang belum punya pengalaman riset informatika sebelumnya. Kalau pengen tau info terbaru tentang open recruitment, bisa cek Instagram WRI kita ya. Sebelum open recruitment, biasanya juga ada acara "Early Access" yang isinya pengenalan WRI. Jangan lupa keep update terus akun media sosial kita biar ga ketinggalan info, guys!',
		},
		{
			question: "Early Access itu acara apa sih?",
			answer: "Oke, jadi Early Access itu sejenis acara buat kalian kenalan sama Workshop Riset Informatika (WRI) kita. Acaranya casual banget, kita bakal santai-santai doang sambil ngobrol-ngobrol santai. Kalian juga bisa tanya-tanya apa aja tentang WRI, ga ada yang dilarang, kok. Biasanya di acara ini juga bakal ada kuis unik dengan hadiah yang menarik, jadi jangan sampai kelewatan, ya!",
		},
		{
			question: "Acara yang ada di WRI itu apa aja?",
			// eslint-disable-next-line quotes
			answer: 'Wah, di WRI ada banyak acara seru yang bisa kamu ikutan, guys! Pertama, kita punya miniclass, mirip-mirip kayak kelas di kampus tapi lebih santai. Ada 4 miniclass, yaitu web development, mobile app development, game development, dan ui/ux design. Selain itu, kita juga sering adain acara open talks yang mirip kayak seminar gitu. Nah, selain itu, ada juga acara WRI OOT, singkatan dari "WRI Out of Topic". Nah, acara ini tuh santai banget, ngobrol-ngobrol tentang hal-hal random seputar IT, seru banget deh!',
		},
		{
			question: "Siapa yg bakal ngajar di miniclass?",
			answer: "Tiap miniclass bakal punya mentornya masing masing. Nah, mentor-mentor ini sebenarnya adalah mahasiswa yang punya keahlian dan pengalaman di bidang tersebut, jadi bisa belajar langsung dari orang yang punya pengalaman, pastinya lebih asik dan santai. Kalau kamu juga punya keahlian dan pengalaman di bidang IT tertentu dan pengen jadi mentor, boleh banget lho kasih tau kita! Kami sangat terbuka untuk orang-orang berbakat seperti kamu.",
		},
	],
};
