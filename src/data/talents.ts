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
	],
};
