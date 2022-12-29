module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	modulePathIgnorePatterns: ['dist'],
	collectCoverageFrom: [
		"**/*.ts",
		"!**/node_modules/**",
		"!**/vendor/**"
	]
};