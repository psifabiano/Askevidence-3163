import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import path from "path";

// Static build config for Hostinger deployment
// Removes Cloudflare and runable-website-runtime plugins
export default defineConfig({
	plugins: [react(), tailwind()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src/web"),
		},
	},
	build: {
		outDir: "dist",
		emptyOutDir: true,
	},
});
