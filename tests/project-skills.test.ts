import { describe, expect, test } from 'bun:test';
import { existsSync, readFileSync } from 'node:fs';
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
});
