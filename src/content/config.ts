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

const miniclassCollection = defineCollection({
	schema: z.object({
		title: z.string().min(1),
		icon: z.string().min(1),
		description: z.string().min(1),
		image: z.string().url(),
		day: z.enum(["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"]),
		time: z.tuple([z.string().min(1), z.string().min(1)]),
	}),
});

export const collections = {
	articles: articlesCollection,
	miniclass: miniclassCollection,
};
