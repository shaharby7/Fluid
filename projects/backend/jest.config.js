/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

// eslint-disable-next-line no-undef
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  globalSetup:"./src/tests/register",
  bail: 0,
  cacheDirectory: "/tmp/jest_rs",
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts"],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageProvider: "v8",
  moduleDirectories: ["node_modules"],
  testMatch: [`**/src/tests/**/*.test.ts`],
  testTimeout:0,
};