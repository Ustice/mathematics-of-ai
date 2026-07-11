import { getCollection } from 'astro:content';
import lessonSources from '../../../data/lesson-sources.json';
import { buildLessonDependencyGraph } from '../../lib/lesson-dependency-graph.js';

export const GET = async () => {
  const lessons = await getCollection('lessons');
  const graph = buildLessonDependencyGraph(
    lessons.map(({ data }) => ({
      lesson: data.lesson,
      phase: data.phase,
      prerequisites: data.prerequisites,
      slug: data.slug,
      title: data.title,
    })),
    lessonSources.lessons.map(({ lesson, title }) => ({
      lesson,
      title,
    })),
  );

  return new Response(JSON.stringify(graph, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
};
