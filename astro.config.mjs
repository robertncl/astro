// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	// Astro 7 defaults to JSX whitespace rules ('jsx'), which drop the space
	// between text and an inline element on the next line. Keep Astro 5's
	// behavior so templates render as written.
	compressHTML: true,
	integrations: [mdx(), sitemap()],
});
