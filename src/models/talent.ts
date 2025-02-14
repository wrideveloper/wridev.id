export type TalentContact = {
	type: "github" | "email" | "dribbble" | "linkedin";
	url: string;
};

export type Proficiency = "backend" | "frontend" | "mobile" | "game" | "ui/ux" | "creative" | "cyber-security" | "general";

export type Availability = "fulltime" | "part-time" | "freelance" | "contract";

export type Talent = {
	name: string;
	position: string;
	about: string; // short description
	profileImage: string;
	contacts: TalentContact[]; // 4 at most
	yearsOfExperience: number;
	proficiencies: Proficiency[];
	availabilities: Availability[];
};
