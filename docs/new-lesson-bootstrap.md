# New Lesson Bootstrap

Use this prompt at the start of a fresh ChatGPT session when asking for the next Mathematics of AI lesson.

```text
Read Ustice/mathematics-of-ai first.
Start with course-state.yaml.
Then read README.md, curriculum/roadmap.md, curriculum/progress-tracker.md, data/lesson-artifacts.json, and the latest lesson in src/content/lessons.

Generate the next lesson from course-state.yaml and the curriculum.
Do not ask for a lesson artifact unless I explicitly ask you to review handwritten exercises.
Do not treat prior exercise images as the source of truth for what comes next.
The source of truth is the repo state, especially course-state.yaml, MDX Lesson Pages, and data/lesson-artifacts.json.

Follow the established teaching style:
- intuition first,
- formal math after intuition,
- local symbol tables,
- explicit symbol definitions,
- low working-memory load,
- programming analogies when helpful,
- group theory or category theory connections only when they clarify the concept.
```

## First Read The Repo State

1. Read `AGENTS.md`, `README.md`, `lessons/README.md`, `course-state.yaml`, `curriculum/README.md`, `curriculum/roadmap.md`, `curriculum/progress-tracker.md`, and `data/lesson-artifacts.json`.

2. Check the lesson files under `src/content/lessons/`, the lesson routes under `src/pages/lessons/`, and the exercise index under `exercises/index.md`.

3. Treat MDX frontmatter as Lesson Page identity and `data/lesson-artifacts.json` as the registry for Source Transcripts and Exercise Artifact Modules.

## Choose The Next Lesson

1. Use `course-state.yaml` to identify the next topic.

2. If the Lesson Catalog already has a page for that topic, continue that page instead of asking for a new source artifact.

3. If there is no page for the requested lesson, generate the next lesson from the curriculum state.

   - Use `curriculum/roadmap.md` for topic order.
   - Use `curriculum/progress-tracker.md` for current status.
   - Use nearby lessons, reference docs, and source-map entries for continuity.

4. If prose docs disagree with the Lesson Catalog or actual files, call out the disagreement and prefer the checked repo state.

## Exercise Image Rule

Do not ask Jason to upload an artifact to start, draft, or continue a lesson.

Use submitted images for exercise or handwritten-work review. Store nonblank pages in `exercises/lesson-NNN-slug/`; numeric filenames define order and the Artifact Record registers the module once.

## Normal Lesson Output

A coherent lesson pass should update or create the Lesson Page, its Artifact Record, embedded exercise prompts, and continuity notes when those are naturally part of the task. Stop only when the next pedagogical decision is genuinely ambiguous or requires Jason's original thinking.
