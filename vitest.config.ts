import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true,
		mockReset: true,
		coverage: {
			reporter: ["text", "text-summary", "json", "html"],
			reportsDirectory: "coverage",
			include: ["**/*.{ts,tsx}"],
			thresholds: {
				global: {
					branches: 0,
					functions: 0,
					lines: 0,
					statements: 0,
				},
			},
		},
		environment: "jsdom",
		esbuild: {
			loader: "tsx",
			include: /.*\.[tj]sx?$/,
			exclude: [],
		},
		resolve: {
			alias: {
				"\\.(css|less|sass|scss)$": "identity-obj-proxy",
				"^.+\\.svg$": "jest-transformer-svg",
			},
		},
		setupFiles: "./jest.setup.ts",
	},
});
