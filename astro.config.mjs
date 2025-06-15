// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";


// https://astro.build/config
export default defineConfig({
	site: 'https://tomkeim.nl',
	integrations: [mdx(), sitemap(), icon()],
	  redirects: {
		"/blog/fabric-wheels-deployment": "/fabric-wheels-deployment/"
	}
});
