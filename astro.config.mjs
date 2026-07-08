import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

export default defineConfig({
  base: '/mathematics-of-ai',
  integrations: [mdx()],
  markdown: {
    processor: unified({
      rehypePlugins: [rehypeKatex],
      remarkPlugins: [remarkMath],
    }),
    shikiConfig: {
      theme: 'github-light',
    },
  },
  site: 'https://ustice.github.io',
});
