import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
// import pluginVue from 'eslint-plugin-vue'
import std from '../../h2/local-env/lint/es/standard.js'
import vue3 from '../../h2/local-env/lint/es/vue3.js'
import tailwind from '../../h2/local-env/lint/es/tailwind.js'

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  js.configs.recommended,
  // ...pluginVue.configs['flat/essential'],

  ...std,
  ...tailwind,
  ...vue3,
])
