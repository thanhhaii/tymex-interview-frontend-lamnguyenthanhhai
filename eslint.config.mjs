import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ['**/node_modules/**', '.next/**', 'dist/**'],
  },
  ...compat.extends('next/core-web-vitals'),
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'off',
      'semi': ['warn', 'always'],
      'quotes': ['error', 'single'],
      'indent': ['warn', 4],
      'comma-dangle': ['error', 'always-multiline'],
      'no-multiple-empty-lines': ['error', { 'max': 1 }],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          'argsIgnorePattern': '^_',
          'destructuredArrayIgnorePattern': '^_',
        },
      ],
      'no-trailing-spaces': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      'react-hooks/exhaustive-deps': 'off',
    },
  },
];

export default eslintConfig;
