import { pathsToModuleNameMapper } from "ts-jest";
import tsconfig from "./tsconfig.json";

const { compilerOptions } = tsconfig;

export default {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: "<rootDir>/src/", // ¡ojo aquí! El prefijo debe apuntar a 'src/'
  }),
};
