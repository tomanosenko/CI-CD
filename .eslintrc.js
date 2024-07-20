module.exports = {
  env: {
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['standard', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['tests/**/*.test.js'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      env: {
        jest: true,
      },
    },
    {
      files: [
        'step_file.js',
        'step_definitions/**/*.js',
        'pages/**/*.js',
        '_test/**/*_test.js',
      ],
      extends: ['plugin:codeceptjs/recommended'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
}
