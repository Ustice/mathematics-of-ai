# Repository Instructions

Use bun.sh instead of node.js.
Use `bun` instead of `npm`.
Use Typescript for all projects, including skills and automations.

## Typescript

- Prefer using `.map`, `.reduce`, `.flatMap`, etc. over for-loops.

## Markdown

- Add one blank line before and after each heading.
- Add blank lines before and after all lists.
- Use 3 spaces for sub-items under single-digit numbers.

## Project Skills

Project-specific Codex skills live under `.codex/skills/`.
When a task matches one of these workflows, read that skill's `SKILL.md` completely before acting:

- `.codex/skills/moa-create-lesson` — create forward Mathematics of AI lesson pages and update source metadata.
- `.codex/skills/moa-create-exercises` — design Notability-first exercises and web companion prompts.
- `.codex/skills/moa-build-widget` — build interactive math visualizations for dynamic lesson pages.
- `.codex/skills/moa-maintain-continuity` — update course state, glossary, notation, and learning journal after lessons.

When lesson context is sufficient and the next step is clear, finish the lesson to a coherent stopping point instead of waiting for a separate prompt. This includes drafting the lesson page, exercise scaffold, metadata updates, continuity notes, and validation when those are naturally part of the current task. Stop and ask only when the next pedagogical decision is genuinely ambiguous or would require Jason's original thinking.

## Agent skills

### Issue tracker

Issues and PRDs live in GitHub Issues for `Ustice/mathematics-of-ai`. See `docs/agents/issue-tracker.md`.

### Triage labels

Use the canonical triage-role labels configured in GitHub. See `docs/agents/triage-labels.md`.

### Domain docs

This is a single-context repository. Read the root `CONTEXT.md` and relevant records under `docs/adr/` when they exist. See `docs/agents/domain.md`.
