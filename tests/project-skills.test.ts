import { describe, expect, test } from 'bun:test';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

type ProjectSkill = {
  descriptionNeedle: string;
  name: string;
};

const repoRoot = path.resolve(import.meta.dir, '..');
const skillsDir = path.join(repoRoot, '.codex', 'skills');
const projectSkills: ProjectSkill[] = [
  {
    descriptionNeedle: 'lesson pages',
    name: 'moa-create-lesson',
  },
  {
    descriptionNeedle: 'Notability-first',
    name: 'moa-create-exercises',
  },
  {
    descriptionNeedle: 'interactive Mathematics of AI lesson widgets',
    name: 'moa-build-widget',
  },
  {
    descriptionNeedle: 'course continuity',
    name: 'moa-maintain-continuity',
  },
];

const readText = (relativePath: string) => readFileSync(path.join(repoRoot, relativePath), 'utf8');

const skillPath = (skillName: string, ...parts: string[]) => path.join(skillsDir, skillName, ...parts);

describe('project skills', () => {
  test('AGENTS.md points to each project skill', () => {
    const agentsText = readText('AGENTS.md');
    const missingSkillPointers = projectSkills
      .map(({ name }) => `.codex/skills/${name}`)
      .filter((pointer) => !agentsText.includes(pointer));

    expect(missingSkillPointers).toEqual([]);
  });

  test('skill folders have concrete instructions and UI metadata', () => {
    const issues = projectSkills.flatMap(({ descriptionNeedle, name }) => {
      const skillMarkdownPath = skillPath(name, 'SKILL.md');
      const openAiYamlPath = skillPath(name, 'agents', 'openai.yaml');
      const skillMarkdown = readFileSync(skillMarkdownPath, 'utf8');
      const openAiYaml = readFileSync(openAiYamlPath, 'utf8');

      return [
        skillMarkdown.includes(`name: ${name}`) ? null : `${name}: missing skill name frontmatter`,
        skillMarkdown.includes(descriptionNeedle) ? null : `${name}: description does not match project workflow`,
        skillMarkdown.includes('TODO') ? `${name}: still contains template TODO text` : null,
        openAiYaml.includes(`$${name}`) ? null : `${name}: default prompt does not invoke $${name}`,
      ].filter((issue): issue is string => issue !== null);
    });

    expect(issues).toEqual([]);
  });

  test('referenced skill resources exist', () => {
    const missingReferences = [
      skillPath('moa-create-lesson', 'references', 'lesson-schema.md'),
      skillPath('moa-create-exercises', 'references', 'exercise-patterns.md'),
      skillPath('moa-build-widget', 'references', 'widget-patterns.md'),
      skillPath('moa-maintain-continuity', 'references', 'continuity-checklist.md'),
    ].filter((referencePath) => !existsSync(referencePath));

    expect(missingReferences).toEqual([]);
  });

  test('lesson workflow encourages finishing coherent lesson work', () => {
    const agentsText = readText('AGENTS.md');
    const createLessonSkill = readFileSync(skillPath('moa-create-lesson', 'SKILL.md'), 'utf8');
    const continuitySkill = readFileSync(skillPath('moa-maintain-continuity', 'SKILL.md'), 'utf8');
    const missingAutonomyInstructions = [
      agentsText.includes('finish the lesson to a coherent stopping point')
        ? null
        : 'AGENTS.md should tell agents to finish coherent lesson work',
      createLessonSkill.includes('finish the lesson to a coherent draft')
        ? null
        : 'moa-create-lesson should prefer completing the actual draft',
      continuitySkill.includes('finish all routine continuity updates')
        ? null
        : 'moa-maintain-continuity should complete routine continuity updates',
    ].filter((issue): issue is string => issue !== null);

    expect(missingAutonomyInstructions).toEqual([]);
  });

  test('skills point continuity work at canonical course references', () => {
    const createLessonSkill = readFileSync(skillPath('moa-create-lesson', 'SKILL.md'), 'utf8');
    const createExercisesSkill = readFileSync(skillPath('moa-create-exercises', 'SKILL.md'), 'utf8');
    const continuitySkill = readFileSync(skillPath('moa-maintain-continuity', 'SKILL.md'), 'utf8');
    const combinedSkillText = [createLessonSkill, createExercisesSkill, continuitySkill].join('\n');
    const canonicalReferenceIssues = [
      combinedSkillText.includes('reference/notation.md')
        ? null
        : 'skills should read or update reference/notation.md',
      combinedSkillText.includes('reference/glossary.md')
        ? null
        : 'skills should read or update reference/glossary.md',
      continuitySkill.includes('learning-journal/journal-template.md')
        ? null
        : 'continuity skill should route new journal entries through the learning-journal template',
      /\bAdd durable notation to `notation\.md`/.test(continuitySkill)
        ? 'continuity skill should not update legacy notation.md as the primary notation file'
        : null,
      /\bAdd durable vocabulary to `glossary\.md`/.test(continuitySkill)
        ? 'continuity skill should not update legacy glossary.md as the primary glossary file'
        : null,
    ].filter((issue): issue is string => issue !== null);

    expect(canonicalReferenceIssues).toEqual([]);
  });

  test('skill instructions discover live course content instead of snapshotting it', () => {
    const markdownFiles = readdirSync(skillsDir, { recursive: true })
      .filter((relativePath) => relativePath.endsWith('.md'))
      .map((relativePath) => path.join(skillsDir, relativePath));
    const snapshotPatterns = [
      /\bLessons? \d+/,
      /\blesson-\d{3}\b/,
      /\blesson:\s+\d+\b/,
    ];
    const snapshotIssues = markdownFiles.flatMap((markdownPath) => {
      const markdown = readFileSync(markdownPath, 'utf8');

      return snapshotPatterns
        .filter((pattern) => pattern.test(markdown))
        .map((pattern) => `${path.relative(repoRoot, markdownPath)}: contains ${pattern.source}`);
    });

    expect(snapshotIssues).toEqual([]);
  });

  test('project docs and templates describe implementation work as TypeScript-first', () => {
    const docsToCheck = [
      'README.md',
      'implementation/README.md',
      'implementation/project-plan.md',
      'exercises/exercise-template.md',
      'lessons/lesson-template.md',
    ];
    const wordingIssues = docsToCheck
      .filter((relativePath) => readText(relativePath).includes('TypeScript / JavaScript'))
      .map((relativePath) => `${relativePath}: should prefer TypeScript-only wording`);

    expect(wordingIssues).toEqual([]);
  });
});
