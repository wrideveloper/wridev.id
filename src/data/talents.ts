import type { Talent } from "~/models/talent";

type TalentData = {
	title: string;
	subtitle: string;
	miniTitle: string;
	talents: Talent[];
};

export const TALENT_DATA: TalentData = {
	title: "Talent Pool",
	subtitle: "These are the people from Workshop Riset Informatika who are ready to work professionally",
	miniTitle: "Talents from Workshop Riset Informatika",
	talents: [
		{
			name: "Muhammad Ilzam Mulkhaq",
			about: "Kang Santri Kudu Nguasai Teknologi. Kerja, kerja, kerja.",
			position: "Web and Mobile Developer",
			profileImage: "https://avatars.githubusercontent.com/u/44225519?v=4",
			yearsOfExperience: 4,
			proficiencies: ["backend", "frontend", "mobile"],
			availabilities: ["freelance"],
			contacts: [
				{ type: "github", url: "https://github.com/4RSIM3R" },
				{ type: "linkedin", url: "https://www.linkedin.com/in/ilzam-mulkhaq-309709189/" },
				{ type: "email", url: "mailto:ilzammulkhaq85@gmail.com" },
			],
		},
		{
			name: "Muhammad Ali Zulfikar",
			about: "Innovative and High Curiosity with a lot of crazy ideas",
			position: "Web Developer",
			profileImage:
				"https://media.licdn.com/dms/image/C4E03AQERUEmXZjsIrg/profile-displayphoto-shrink_200_200/0/1628156772321?e=1694044800&v=beta&t=KAjY0ur59pzBS5RQTQlYHjMkPQTx7TMCsVatG64GfAU",
			yearsOfExperience: 4,
			proficiencies: ["backend", "frontend"],
			availabilities: ["freelance"],
			contacts: [
				{ type: "github", url: "https://github.com/alizul01" },
				{ type: "linkedin", url: "https://www.linkedin.com/in/alizulfikar/" },
				{ type: "email", url: "mailto:alizulfikar032@gmail.com" },
			],
		},
		{
			name: "Ahmad Shodikin",
			about: "Head of UI/UX Division at Workshop Riset Informatika",
			position: "UI/UX Designer",
			profileImage:
				"https://media.licdn.com/dms/image/D5603AQHOvoLiXlMxHQ/profile-displayphoto-shrink_200_200/0/1675064044571?e=1694044800&v=beta&t=QkuvDQgonIsZgAfpoE0bMTw1BcfhidQ7V1s_WMjL_bk",
			yearsOfExperience: 4,
			proficiencies: ["ui/ux"],
			availabilities: ["freelance"],
			contacts: [
				{ type: "linkedin", url: "https://www.linkedin.com/in/ahmadshodikin/" },
				{ type: "email", url: "mailto:dikiahmad05@gmail.com" },
			],
		},
		{
			name: "Fitrah Rahmadhani Ahmad",
			about: "Saya seorang mahasiswa yang tengah mempelajari dunia informatika, tertarik dengan desain, programming, serta teknologi.",
			position: "UI/UX Designer",
			profileImage:
				"https://media.licdn.com/dms/image/D5603AQH03DfNua6WrQ/profile-displayphoto-shrink_200_200/0/1671933716567?e=1694044800&v=beta&t=sP3LRo8dw_tYqTWXo2lnYgF2kYkanjcfcIPDlYB7veI",
			yearsOfExperience: 4,
			proficiencies: ["ui/ux"],
			availabilities: ["freelance"],
			contacts: [
				{ type: "linkedin", url: "https://www.linkedin.com/in/fitrahrahmadhani/" },
				{ type: "email", url: "mailto:fitrahrahmadani625@gmail.com" },
			],
		},
		{
			name: "Ziedny Mubarok",
			about: "Game and Web development enthusiast",
			position: "Game Developer",
			profileImage:
				"https://media.licdn.com/dms/image/D5603AQHnbvEnoLj8rg/profile-displayphoto-shrink_200_200/0/1685533298044?e=1694044800&v=beta&t=FJ3ZoEx7opd71gq2LN3hRP1n2oxhQm1ewZJHeTTBldk",
			yearsOfExperience: 4,
			proficiencies: ["game"],
			availabilities: ["freelance"],
			contacts: [
				{ type: "linkedin", url: "https://www.linkedin.com/in/ziedny-mubarok-b99466220/" },
				{ type: "email", url: "mailto:mubarokziedny@gmail.com" },
			],
		},
		{
			name: "Maulana Arif",
			about: "I'm a fast learner and have a high curiosity about programming.",
			position: "Mobile and Web Developer",
			profileImage:
				"https://media.licdn.com/dms/image/C5603AQENdjd61mHkpw/profile-displayphoto-shrink_200_200/0/1662975121163?e=1694044800&v=beta&t=Ndkd7SXFdCYLA5rMuI_UGHRitr_MHRJToNLHfr5Ik3Q",
			yearsOfExperience: 4,
			proficiencies: ["mobile", "backend"],
			availabilities: ["freelance"],
			contacts: [
				{ type: "github", url: "https://github.com/LeToyek" },
				{ type: "linkedin", url: "https://www.linkedin.com/in/maulana-arif/" },
				{ type: "email", url: "mailto:maulanatoyek@gmail.com" },
			],
		},
		{
			name: "Agus Prayogi",
			about: "I like new things | I like to share and problem solving",
			position: "Mobile App Developer",
			profileImage:
				"https://media.licdn.com/dms/image/C5603AQHLHndZL3bdXw/profile-displayphoto-shrink_200_200/0/1624317404980?e=1694044800&v=beta&t=-6D3GImwwk3wR48fyaLovCjzJBH7xylqkWLaSOZpCFw",
			yearsOfExperience: 4,
			proficiencies: ["mobile"],
			availabilities: ["freelance"],
			contacts: [
				{ type: "github", url: "https://github.com/agusprayogi02" },
				{ type: "linkedin", url: "https://www.linkedin.com/in/agus-prayogi/" },
				{ type: "email", url: "mailto:agus21apy@gmail.com" },
			],
		},
		{
			name: "Alfan (Alivan) Olivan",
			about: "College Student at State Polytechnic of Malang",
			position: "Web Developer",
			profileImage: "https://avatars.githubusercontent.com/u/79490122?v=4",
			yearsOfExperience: 4,
			proficiencies: ["frontend", "backend"],
			availabilities: ["freelance"],
			contacts: [
				{ type: "github", url: "https://github.com/Alivan21" },
				{ type: "linkedin", url: "https://www.linkedin.com/in/alivan21/" },
				{ type: "email", url: "mailto:alfanalivan@gmail.com" },
			],
		},
		{
			name: "Tio Irawan",
			about: "I'm fast in learning new technologies, especially in the programming field, and have a high curiosity about it.",
			position: "Mobile and Web Developer",
			profileImage:
				"https://media.licdn.com/dms/image/C5603AQHwKjo7RkiFUQ/profile-displayphoto-shrink_200_200/0/1646063094549?e=1694044800&v=beta&t=BGJDf8wJwIrIZ5vcMQcKD1sYZHHIf1YOI-VPffpJYpM",
			yearsOfExperience: 4,
			proficiencies: ["mobile", "backend"],
			availabilities: ["freelance"],
			contacts: [
				{ type: "github", url: "https://github.com/indmind " },
				{ type: "linkedin", url: "https://www.linkedin.com/in/tioirawan/" },
				{ type: "email", url: "mailto:tioirawan063@gmail.com" },
			],
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
		},
	],
};
