import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */

const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: '/yitongxia.github.io', 
		}
	}
};

export default config;
