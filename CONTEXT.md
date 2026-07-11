# Mathematics of AI Course

This repository is a living self-learning course and the publishing system that turns its lessons, artifacts, and continuity records into a navigable website.

## Language

**Course Checkpoint**:
The compact record of completed lessons, the current phase, and the next topic.
_Avoid_: Lesson status, page status

**Lesson Page**:
The canonical MDX explanation of one numbered course lesson.
_Avoid_: Dynamic page, polished page

**Lesson Catalog**:
The validated view that joins Lesson Page metadata with the lesson's Artifact Record for callers.
_Avoid_: Source map, lesson sources

**Artifact Record**:
The machine-readable record of source and learner artifacts associated with one numbered lesson.
_Avoid_: Source entry, lesson metadata

**Source Transcript**:
The preserved raw conversation export from which an older Lesson Page was reconstructed.
_Avoid_: Lesson markdown

**Exercise Artifact**:
A submitted handwritten exercise image, historical review note, or lesson-specific implementation produced after studying a Lesson Page.
_Avoid_: Exercise set

**Exercise Artifact Module**:
The lesson-numbered directory that owns all Exercise Artifacts for one lesson.
_Avoid_: Exercise folder, image folder

**Reference Authority**:
The canonical reusable notation, vocabulary, mental model, or dependency material under `reference/`.
_Avoid_: Top-level notation, top-level glossary

## Relationships

- The **Course Checkpoint** identifies completed **Lesson Pages** and the next topic.
- A **Lesson Page** owns lesson identity, title, phase, prerequisites, objectives, symbols, and slug.
- An **Artifact Record** belongs to exactly one **Lesson Page**.
- The **Lesson Catalog** joins every **Lesson Page** to zero or one **Artifact Records**.
- An **Artifact Record** may reference one **Source Transcript** and one **Exercise Artifact Module**.
- An **Exercise Artifact Module** contains zero or more ordered **Exercise Artifacts**.
- A **Lesson Page** may promote recurring concepts into a **Reference Authority**.

## Example Dialogue

> **Developer:** "Where do I change a lesson title?"
> **Course author:** "Change the Lesson Page. The Lesson Catalog reads identity from MDX and joins it to the Artifact Record; do not duplicate the title in the artifact manifest."

## Flagged Ambiguities

- "lesson status" previously mixed page lifecycle and course completion. Resolution: the **Course Checkpoint** owns completion; Lesson Pages have no lifecycle status.
- "source map" previously mixed lesson identity with artifact paths. Resolution: Lesson Pages own identity, Artifact Records own artifact relationships, and the **Lesson Catalog** composes them.
