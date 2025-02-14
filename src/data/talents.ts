import type { Talent } from "~/models/talent";

type TalentData = {
	title: string;
	subtitle: string;
	miniTitle: string;
	talents: Talent[];
	buttonText: string;
};

export const TALENT_DATA: TalentData = {
	title: "Memiliki Pengetahuan dan Pengalaman yang Mumpuni",
	subtitle:
		"Kami memiliki individu terampil dari berbagai divisi, bersatu padu menciptakan kekuatan kolaboratif dalam dunia kerja IT",
	miniTitle: "Talents from Workshop Riset Informatika",
	buttonText: "Jelajahi Talent Berbakat",
	talents: [
		{
			name: "Muhammad Ilzam Mulkhaq",
			about: "Kang Santri Kudu Nguasai Teknologi. Kerja, kerja, kerja.",
			position: "Web and Mobile Developer",
			profileImage: "/talents/muhammad-ilzam-mulkhaq.png",
			yearsOfExperience: 4,
			proficiencies: ["backend", "frontend", "mobile"],
			availabilities: ["freelance"],
			contacts: [
				{ type: "github", url: "https://github.com/4RSIM3R" },
				{ type: "linkedin", url: "https://www.linkedin.com/in/ilzam-mulkhaq-309709189/" },
				{ type: "email", url: "mailto:ilzammulkhaq85@gmail.com" },
			],
			isVerified: true,
		},
		{
			name: "Muhammad Ali Zulfikar",
			about: "Innovative and High Curiosity with a lot of crazy ideas",
			position: "Web Developer",
			profileImage: "/talents/muhammad-ali-zulfikar.png",
			yearsOfExperience: 4,
			proficiencies: ["backend", "frontend"],
			availabilities: ["freelance"],
			contacts: [
				{ type: "github", url: "https://github.com/alizul01" },
				{ type: "linkedin", url: "https://www.linkedin.com/in/alizulfikar/" },
				{ type: "email", url: "mailto:alizulfikar032@gmail.com" },
			],
			isVerified: true,
		},
		{
			name: "Ahmad Shodikin",
			about: "Head of UI/UX Division at Workshop Riset Informatika",
			position: "UI/UX Designer",
			profileImage: "/talents/ahmad-shodikin.png",
			yearsOfExperience: 4,
			proficiencies: ["ui/ux"],
			availabilities: ["freelance"],
			contacts: [
				{ type: "linkedin", url: "https://www.linkedin.com/in/ahmadshodikin/" },
				{ type: "email", url: "mailto:dikiahmad05@gmail.com" },
			],
			isVerified: true,
		},
		{
			name: "Fitrah Rahmadhani Ahmad",
			about: "Head of Information Media Division at Workshop Riset Informatika",
			position: "UI/UX Designer",
			profileImage: "/talents/fitrah-rahmadhani.png",
			yearsOfExperience: 4,
			proficiencies: ["ui/ux"],
			availabilities: ["freelance"],
			contacts: [
				{ type: "linkedin", url: "https://www.linkedin.com/in/fitrahrahmadhani/" },
				{ type: "email", url: "mailto:fitrahrahmadani625@gmail.com" },
			],
			isVerified: true,
		},
		{
			name: "Ziedny Mubarok",
			about: "Game and Web development enthusiast",
			position: "Game Developer",
			profileImage: "/talents/ziedny-mubarok.png",
			yearsOfExperience: 4,
			proficiencies: ["game"],
			availabilities: ["freelance"],
			contacts: [
				{ type: "linkedin", url: "https://www.linkedin.com/in/ziedny-mubarok-b99466220/" },
				{ type: "email", url: "mailto:mubarokziedny@gmail.com" },
			],
			isVerified: true,
		},
		{
			name: "Maulana Arif",
			about: "I'm a fast learner and have a high curiosity about programming.",
			position: "Mobile and Web Developer",
			profileImage: "/talents/maulana-arif.png",
			yearsOfExperience: 4,
			proficiencies: ["mobile", "backend"],
			availabilities: ["freelance"],
			contacts: [
				{ type: "github", url: "https://github.com/LeToyek" },
				{ type: "linkedin", url: "https://www.linkedin.com/in/maulana-arif/" },
				{ type: "email", url: "mailto:maulanatoyek@gmail.com" },
			],
			isVerified: true,
		},
		{
			name: "Agus Prayogi",
			about: "I like new things | I like to share and problem solving",
			position: "Mobile App Developer",
			profileImage: "/talents/agus-prayogi.png",
			yearsOfExperience: 4,
			proficiencies: ["mobile"],
			availabilities: ["freelance"],
			contacts: [
				{ type: "github", url: "https://github.com/agusprayogi02" },
				{ type: "linkedin", url: "https://www.linkedin.com/in/agus-prayogi/" },
				{ type: "email", url: "mailto:agus21apy@gmail.com" },
			],
			isVerified: true,
		},
		{
			name: "Alfan Olivan",
			about: "College Student at State Polytechnic of Malang",
			position: "Web Developer",
			profileImage: "/talents/alfan-olivan.png",
			yearsOfExperience: 4,
			proficiencies: ["frontend", "backend"],
			availabilities: ["freelance"],
			contacts: [
				{ type: "github", url: "https://github.com/Alivan21" },
				{ type: "linkedin", url: "https://www.linkedin.com/in/alivan21/" },
				{ type: "email", url: "mailto:alfanalivan@gmail.com" },
			],
			isVerified: true,
		},
		{
			name: "Tio Irawan",
			about: "I'm fast in learning new technologies, especially in the programming field, and have a high curiosity about it.",
			position: "Mobile and Web Developer",
			profileImage: "/talents/tio-irawan.png",
			yearsOfExperience: 4,
			proficiencies: ["mobile", "backend"],
			availabilities: ["freelance"],
			contacts: [
				{ type: "github", url: "https://github.com/indmind " },
				{ type: "linkedin", url: "https://www.linkedin.com/in/tioirawan/" },
				{ type: "email", url: "mailto:tioirawan063@gmail.com" },
			],
			isVerified: true,
		},
		{
			name: "Dicha Zelianivan Arkana",
			about: "Mostly full-stack web developer. Loves to work with Typescript, Svelte, and .NET",
			position: "Full-stack Web Developer",
			profileImage: "https://avatars.githubusercontent.com/u/51877647?v=4",
			yearsOfExperience: 3,
			proficiencies: ["backend", "frontend"],
			availabilities: ["freelance"],
			contacts: [
				{ type: "github", url: "https://github.com/elianiva" },
				{ type: "linkedin", url: "https://linkedin.com/in/dichaa" },
				{ type: "email", url: "mailto:contact@elianiva.my.id" },
			],
			isVerified: true,
		},
		{
			name: "Muhammmad Hamdan Ubaidillah",
			about: "Pernah ngoding web fullstack, bot discord, scrapper",
			position: "Full-stack Web Developer",
			profileImage: "https://avatars.githubusercontent.com/u/68896885?v=4",
			yearsOfExperience: 2,
			proficiencies: ["backend", "frontend"],
			availabilities: ["part-time"],
			contacts: [
				{ type: "github", url: "https://github.com/hmdnu" }
			]
		},
		{
			name: "Rensi Meila Yulvinata",
			about: "U/UX Designer with 2+ years of experience in designing user-friendly and engaging interfaces for web and mobile applications.",
			position: "UI/UX Designer",
			profileImage: "/talents/rensi-meila-yulvinata.jpg",
			yearsOfExperience: 2,
			proficiencies: ["ui/ux"],
			availabilities: ["part-time"],
			contacts: [
				{ type: "dribbble", url: "https://dribbble.com/rensimeila" },
				{ type: "linkedin", url: "https://www.linkedin.com/in/rensi-meila-yulvinata-34b21a193/" },
				{ type: "email", url: "rensimeila8@gmail.com" },
			]
		},
		{
			name: "Muhammad Khalid Atthoriq",
			about: "I focus on front-end development and UI/UX design, currently working on a website for Dinas Ketahanan Pangan and previously delivered one for IsFor. I also handle videography, photography, and video editing, with a portfolio of diverse projects. Expanding my skills into data analytics and AI, I’m fluent in English and building my French.",
			position: "Frontend, UI/UX, and Creative",
			profileImage: "/talents/muhammad-khalid-atthoriq.webp",
			yearsOfExperience: 4,
			proficiencies: ["creative", "ui/ux", "frontend"],
			availabilities: ["freelance"],
			contacts: [
				{ type: "github", url: "https://github.com/KhalidFinny" },
				{ type: "linkedin", url: "https://www.linkedin.com/in/khalid-atthoriq-2a8a06253" },
				{ type: "email", url: "katthoriq@gmail.com"},
			]
		},
		{
			name: "Moch. Naufal Ardian Ramadhan",
			about: "Halo, saya Naufal seorang Desainer UI/UX dengan pengalaman lebih dari 2 tahun dalam membuat antarmuka pengguna dan pengalaman pengguna untuk aplikasi seluler, situs web, dan perangkat lunak. Untuk Project yang saya sedang kerjakan sekarang adalah gurustudios.id yang dimana mereka melakukan rebranding product mereka yang sebelumnya hanya platform game sekarang ekspansi ke pengajaran offline, nah dengan adanya platform website untuk pengajaran offline gurustudios.id provide pemesanan secara online dengan sistem subscribe, jadi mereka bisa mengikuti kelas dengan mendaftar melalui website tersebut. nah tugas saya di project ini, yang pertama karena ini sudah menjadi solusi yang harus saya develop atau saya deliver menjadi sebuah visual nah dari brief teman teman gurustudios.id itu meminta ada beberapa fitur untuk ada didalam website tersebut, lalu saya juga melakukan deliver visual design yang sudah saya kerjakan ke developer, untuk memastikan dan mengkomunikasikan apakah design saya ini bisa di develop oleh mereka.",
			position: "UI/UX Designer",
			profileImage: "/talents/moch-naufal-ardian-ramadhan.jpg",
			yearsOfExperience: 2,
			proficiencies: ["ui/ux"],
			availabilities: ["freelance"],
			contacts: [
				{ type: "dribbble", url: "https://dribbble.com/NaufalAR" },
				{ type: "linkedin", url: "http://www.linkedin.com/in/naufalardianr/" },
				{ type: "github", url: "https://github.com/NaufalArdian12" },
			]
		},
		{
			name: "Aqsa Herry Prastyo",
			about: "Saya adalah seorang Graphic Designer dengan pengalaman lebih dari 2 tahun dan UI/UX Designer selama 1 tahun. Saya memiliki keahlian dalam menciptakan desain visual yang menarik serta merancang pengalaman pengguna yang intuitif untuk aplikasi mobile dan desktop.Saya juga memilik keahlian dalam membuat logo dan branding perusahaan",
			position: "UI/UX Designer and Creative",
			profileImage: "/talents/aqsa-herry-prastyo.jpeg",
			yearsOfExperience: 2,
			proficiencies: ["ui/ux", "creative"],
			availabilities: ["fulltime", "freelance", "part-time", "contract"],
			contacts: [
				{ type: "dribbble", url: "https://dribbble.com/Herry-Prastya" },
				{ type: "linkedin", url: "https://linkedin.com/in/Aqsa%20Herry%20Prastyo" },
				{ type: "github", url: "https://github.com/AqsaPrastyo" },
				{ type: "email", url: "aqsaherryprasetya@gmail.com" },
			]
		},
		{
			name: "Lavina",
			about: "Anak SMK jurusan RPL yang lanjut kuliah IT 👍🏻",
			position: "Full-stack Developers",
			profileImage: "https://avatars.githubusercontent.com/u/113479861?v=4",
			yearsOfExperience: 3,
			proficiencies: ["frontend", "backend", "general"],
			availabilities: ["part-time", "freelance", "contract"],
			contacts: [
				{ type: "github", url: "https://github.com/Lavina-23" },
				{ type: "linkedin", url: "https://www.linkedin.com/in/lavina-a3151327a"},
				{ type: "email", url: "lavina8000@gmail.com" },
			]
		},
		{
			name: "Riovaldo Alfiyan Fahmi Rahman",
			about: "Web development enthusiast",
			position: "Frontend Developer",
			profileImage: "/talents/riovaldo-alfiyan-fahmi-rahman.jpg",
			yearsOfExperience: 1,
			proficiencies: ["frontend"],
			availabilities: ["freelance"],
			contacts: [
				{ type: "github", url: "github.com/ckckckcz" },
				{ type: "linkedin", url: "https://linkedin.com/in/riovaldorahman"},
				{ type: "email", url: "rriovld@gmail.com" },
			]
		},
		{
			name: "Rakai Seto Sembodo",
			about: "Passionate fullstack developer with 2 years of working experience. Specializing in Go, PostgreSQL, Redis, Laravel, and RabbitMQ. Driven to continuously learning new skills and technologies",
			position: "Full-stack Developer",
			profileImage: "/talents/rakai-seto-sembodo.jpg",
			yearsOfExperience: 3,
			proficiencies: ["frontend", "backend"],
			availabilities: ["contract", "freelance", "fulltime", "part-time"],
			contacts: [
				{ type: "github", url: "https://github.com/rakaiseto" },
				{ type: "linkedin", url: "linkedin.com/in/rakaiseto" },
				{ type: "email", url: "mamangrakai@gmail.com" },
			]
		},
		{
			name: "Adam Nur Alifi",
			about: "Suka design yang keren keren",
			position: "UI/UX Designer and Creative",
			profileImage: "/talents/adam-nur-alifi.png",
			yearsOfExperience: 3,
			proficiencies: ["ui/ux", "creative"],
			availabilities: ["part-time", "freelance", "contract"],
			contacts: [
				{ type: "email", url: "adamnuralifi11@gmail.com" }
			]
		}
	],
};
