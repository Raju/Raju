import type { Config } from "jest";

const config: Config = {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: "coverage",
	coverageReporters: ["text", "text-summary", "html"],
	collectCoverageFrom: ["src/**/*.{ts,tsx}"],
	coverageThreshold: {
		global: {
			functions: 0,
			lines: 0,
			statements: 0,
			branches: 80,
		},
	},
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	moduleNameMapper: {
		"\\.(css|less|sass|scss)$": "identity-obj-proxy",
		"^.+\\.svg$": "jest-transformer-svg",
	},
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;
