import js from '@eslint/js'
import pluginImport from 'eslint-plugin-import'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReactRefresh from 'eslint-plugin-react-refresh'
import pluginUnusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'

export default [
  { ignores: ['dist'] },
  js.configs.recommended,
  pluginJsxA11y.flatConfigs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  pluginReactHooks.configs['recommended-latest'],
  pluginReactRefresh.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        React: 'readonly', // React 프로젝트인 경우
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      'unused-imports': pluginUnusedImports,
      import: pluginImport,
    },
    rules: {
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'react/prop-types': 'off',
    },
  },
  pluginPrettierRecommended,
]
