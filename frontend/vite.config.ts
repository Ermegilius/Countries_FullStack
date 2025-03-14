import react from "@vitejs/plugin-react-swc";
//import { defineConfig } from "vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	server: {
		port: 5180,
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["./src/setupTests.ts"],
		css: false,
		include: ["src/components/__tests__/*.test.{ts,tsx}"],
		exclude: ["node_modules", "dist"],
	},
});
