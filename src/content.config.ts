import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const categories = {
  fiscal: 'Fiscal',
  hr: 'Resurse umane',
  legislatie: 'Legislație',
  alerte: 'Alerte fiscale',
  talks: 'FISCONT Talks',
  leadership: 'Leadership',
  business: 'Business & antreprenoriat',
} as const;

export type CategoryKey = keyof typeof categories;

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional().default(''),
    pubDate: z.coerce.date(),
    category: z.enum([
      'fiscal',
      'hr',
      'legislatie',
      'alerte',
      'talks',
      'leadership',
      'business',
    ]),
    author: z.string().optional().default('Gabriela Dacu'),
    authorRole: z.string().optional().default('Fondator și CEO'),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
