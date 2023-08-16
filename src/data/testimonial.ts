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
	testimonials: [
		{
			name: "M. Nindra Zaka",
			position: "Lead Frontend Engineer, KarirLab",
			testimony:
				"Saya mengenal komunitas IT pertama kali di WRI, disana saya bisa mempelajari teknologi terbaru yang digunakan di industri IT, sehingga materi dasar yang diajarkan di perkuliahan dapat saya kembangkan lebih jauh lagi. Hal tersebut yang membantu saya untuk mendapatkan pekerjaan sebagai Frontend Engineer.",
		},
		{
			name: "Hilal Arsa Himawan",
			position: "Senior Fullstack Engineer, AIA Singapore",
			testimony:
				"WRI menyelamatkanku dari kegabutan diantara senggangnya perkuliahan. Andai dulu ga ikut WRI, mungkin ga pernah tau kalau dunia IT bisa se-menyenangkan ini, dan ga akan pernah tau karir IT bisa se-menjanjikan ini. Satu-satunya wadah terbaik yang mendukung materi kuliah sekaligus jadi garis start untuk membangun karir di bidang IT",
		},
		{
			name: "Meuti Zari Annisa",
			position: "Junior Game Dev, FXMedia Internet Pte Ltd",
			testimony:
				"Setelah kenal dan join WRI dari tingkat 1 itu ngasih banyak hal bahkan sampai sekarang. Dari bisa ikut banyak event GameDev, dapet proyekan sama dosen, ikut lomba, juga bisa sharing-sharing dengan temen baru baik kating, temen angkatan, bahkan adek tingkat yang pastinya memperlancar kehidupan kuliah",
		},
		{
			name: "Fauzan Pradana",
			position: "Frontend Intern, Elux Space",
			testimony:
				"WRI merupakan wadah yang sangat bagus bagi temen-temen yang ingin belajar banyak hal, khususnya di dunia IT. Lingkungan di WRI sangat mendukung untuk belajar, berdiskusi, dan berkolaborasi karena temen-temen disini memiliki keahlian di bidang yang berbeda-beda, mulai dari web, mobile, ui/ux, game, bahkan keamanan siber. Pokoknya WRI explore wes!",
		},
		{
			name: "Mochamad Farid Maulana",
			position: "Mahasiswa JTI (WRI 7)",
			testimony:
				"Pastinya bersyukur sih bisa kontribusi di WRI, bisa dapet ilmu dan pengalaman yang banyak, dapet banyak info projectan juga, temen juga dapet banyak. Jadinya masa kuliah ga bosenin, dan wri jadi tempat yang tepat buat sharing baik itu tentang teknologi maupun keadaan indo (contohnya kek politik). Join wri termasuk keputusan yang ga ku sesali di masa perkuliahan.",
		},
	],
};
