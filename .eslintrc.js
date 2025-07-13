module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    // Security rules
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-new-func': 'error',
    'no-script-url': 'error',
    
    // Best practices
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-alert': 'warn',
    'no-confirm': 'warn',
    'no-prompt': 'warn',
    
    // Code quality
    'no-unused-vars': 'warn',
    'no-undef': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    
    // Accessibility
    'no-global-assign': 'error',
    'no-implicit-globals': 'error'
  },
  globals: {
    // Global variables used in the project
    'feather': 'readonly',
    'THREE': 'readonly',
    'google': 'readonly',
    'RSMConfig': 'writable'
  }
}