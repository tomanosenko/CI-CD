const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure')
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS)

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins()

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: '_test/**/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://try.vikunja.io/',
      show: true,
    },
  },
  include: {
    I: './steps_file.js',
    AuthPage: './pages/AuthPage.js',
    LabelPage: './pages/LabelPage.js',
    TeamPage: './pages/TeamPage.js',
  },
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js'],
  },
  name: 'CI-CD',
}
