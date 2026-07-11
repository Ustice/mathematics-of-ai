import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lessons = defineCollection({
  loader: glob({ base: './src/content/lessons', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    description: z.string(),
    lesson: z.number().int().positive(),
    objectives: z.array(z.string()),
    phase: z.string(),
    prerequisites: z.array(
      z.object({
        lesson: z.number().int().positive(),
        title: z.string(),
      }),
    ),
    slug: z.string(),
    symbols: z.array(
      z.object({
        meaning: z.string(),
        symbol: z.string(),
      }),
    ),
    title: z.string(),
    widgets: z.array(z.string()).default([]),
  }),
});

export const collections = { lessons };
