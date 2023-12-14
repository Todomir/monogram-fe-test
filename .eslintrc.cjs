module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
		{
			files: ["*.astro"],
			parser: "astro-eslint-parser",
			extends: ["plugin:astro/recommended", "prettier"],
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
			},
		},
		{
			files: ["*.jsx", "*.tsx"],
			parser: "@typescript-eslint/parser",
			extends: [
				"plugin:@typescript-eslint/recommended",
				"plugin:react/recommended",
				"prettier",
			],
			rules: {
				"react/react-in-jsx-scope": "off",
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["@typescript-eslint", "astro"],
	rules: {},
};
