# Compose the Lesson Catalog from Lesson Pages and Artifact Records

Lesson identity and pedagogical metadata belong to MDX Lesson Page frontmatter, while transcripts and submitted work belong to Artifact Records. Callers use a validated TypeScript Lesson Catalog that composes the two at one seam, avoiding a second canonical copy of titles, slugs, phases, prerequisites, or image lists while preserving raw artifacts independently from published lesson content.
