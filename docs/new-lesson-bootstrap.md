# New Lesson Bootstrap

Use this prompt at the start of a fresh ChatGPT session when asking for the next Mathematics of AI lesson.

```text
Read Ustice/mathematics-of-ai first.
Start with course-state.yaml.
Then read README.md, curriculum/roadmap.md, and the latest lesson in src/content/lessons.

Generate the next lesson from course-state.yaml and the curriculum.
Do not ask for a lesson PDF unless I explicitly ask you to review handwritten exercises.
Do not treat prior lesson PDFs as the source of truth for what comes next.
The source of truth is the repo state, especially course-state.yaml.

Follow the established teaching style:
- intuition first,
- formal math after intuition,
- local symbol tables,
- explicit symbol definitions,
- low working-memory load,
- programming analogies when helpful,
- group theory or category theory connections only when they clarify the concept.
```

## Agent Workflow

1. Read `course-state.yaml`.
2. Identify the next topic.
3. Read `curriculum/roadmap.md` to place that topic in the larger sequence.
4. Read the latest polished lesson in `src/content/lessons/`.
5. Generate the next lesson using the current MDX lesson structure.
6. After the lesson is accepted, update continuity files:
   - `course-state.yaml`
   - `data/lesson-sources.json`
   - relevant notation/glossary/journal files when durable concepts changed

## Common Failure To Avoid

Do not respond with:

> Please upload the previous lesson PDF.

The PDFs are handwritten exercise artifacts. They are useful for reviewing completed work, not for deciding the next lesson.
