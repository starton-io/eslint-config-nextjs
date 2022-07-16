/*
| Developed by Starton
| Filename : index.js
*/

module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:prettier/recommended',
		'prettier',
	],
	plugins: ['prettier', 'import'],
	overrides: [
		{
			parser: '@typescript-eslint/parser',
			files: ['*.ts', '*.tsx'], // Your TypeScript files extension
			// As mentioned in the comments, you should extend TypeScript plugins here,
			// instead of extending them outside the `overrides`.
			// If you don't want to extend any rules, you don't need an `extends` attribute.
			extends: [
				'plugin:@typescript-eslint/eslint-recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
			],
			plugins: ['@typescript-eslint'],
			parserOptions: {
				project: ['./tsconfig.json'], // Specify it only for TypeScript files
			},
			rules: {
				'@typescript-eslint/no-unused-vars': 'error',
				'@typescript-eslint/ban-ts-comment': 'off',
				'@typescript-eslint/no-empty-interface': 'off',
			},
		},
	],
	rules: {
		semi: ['error', 'never'],
		'comma-dangle': ['error', 'always-multiline'],
		'quote-props': ['error', 'as-needed'],
		'no-unused-vars': 'off',
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'internal', 'object'],
			},
		],
		'import/extensions': [
			'error',
			{
				js: 'never',
				jsx: 'never',
				svg: 'always',
				ts: 'never',
				tsx: 'never',
			},
		],
		'import/prefer-default-export': 'off',
		'jsx-a11y/anchor-is-valid': 'off',
		'jsx-a11y/label-has-associated-control': [
			'error',
			{
				assert: 'either',
			},
		],
		'jsx-a11y/label-has-for': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/no-children-prop': ['warn'],
		'react/jsx-no-leaked-render': ['warn', { validStrategies: ['ternary'] }],
		'react/jsx-filename-extension': ['warn', { extensions: ['.ts', '.tsx'] }],
		'react/no-namespace': 'off',
		'react/react-in-jsx-scope': 'off',
		'react-hooks/exhaustive-deps': 'warn',
		'prettier/prettier': ['error', {
			printWidth: 120,
			tabWidth: 4,
			useTabs: true,
			semi: false,
			singleQuote: true,
			quoteProps: 'as-needed',
			jsxSingleQuote: false,
			trailingComma: 'all',
			bracketSpacing: true,
			jsxBracketSameLine: false,
			arrowParens: 'always',
			proseWrap: 'preserve',
			htmlWhitespaceSensitivity: 'css',
			endOfLine: 'lf',
		}],
	},
}