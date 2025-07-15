import { pathsToModuleNameMapper } from "ts-jest";
import tsconfig from "./tsconfig.app.json";

const { compilerOptions } = tsconfig;

export default {
  preset: "ts-jest/presets/js-with-ts", // Usa preset para TS y JSX
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "./tsconfig.jest.json" }],
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths ?? {}, {
    prefix: "<rootDir>/src/",
  }),
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
