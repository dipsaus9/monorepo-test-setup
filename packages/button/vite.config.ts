import { defineConfig } from 'vite';
import { resolve } from "path"


export default defineConfig({
	esbuild: {
		jsxInject: "import React from 'react'",
	},
	build: {
		lib: {
			// Could also be a dictionary or array of multiple entry points
			entry: resolve(__dirname, 'src/main.ts'),
			formats: ['es'],
		},
		rollupOptions: {
			external: ['react'],
		},
	},
});
