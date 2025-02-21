import { z, defineCollection } from "astro:content";

const articlesCollection = defineCollection({
	schema: z.object({
		title: z.string().min(1),
		description: z.string().min(1),
		author: z.string(),
		github: z.string().optional(),
		linkedin: z.string().optional(),
		tags: z.array(z.string().min(1)),
		image: z.string().url(),
		date: z.coerce.date(),
	}),
});

const talentsCollection = defineCollection({
	schema: z.object({
		name: z.string().min(1),
		about: z.string().min(1),
		position: z.string().min(1),
		profileImage: z.string().url(),
		contacts: z.array(z.object({ platform: z.string(), link: z.string().url() })),
		yearsOfExperience: z.number(),
		proficiencies: z.array(z.string()),
		availabilities: z.array(z.string()),
		isVerified: z.boolean(),
	})
})

const miniclassCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string().min(1),
			icon: image(),
			description: z.string().min(1),
			image: z.string().url(),
			day: z.enum(["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"]),
			time: z.tuple([z.string().min(1), z.string().min(1)]),
			mentors: z.array(z.string()),
		}),
});

export const collections = {
	articles: articlesCollection,
	miniclass: miniclassCollection,
	talents: talentsCollection,
};
