import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    ignores: ['node_modules/**'],
  },

  js.configs.recommended,

  {
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
      },
    },
  },

  stylistic.configs.recommended,
]
