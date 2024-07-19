const { I } = inject()

module.exports = {
  clickLinkTeam() {
    I.click('//a[@href="/teams"]"]')
  },
  newTeam() {
    I.click('//a[@href="/teams/new"][contains(@class, "base-button")]')
  },
  TeamTitle() {
    I.fillField('//input[@id="teamName"]', 'Team')
  },
  createTeam() {
    I.click(
      '//button[contains(@class, "base-button--type")][contains(@style, "button-white")]//span[@class="icon is-small"]',
    )
  },
  clickTeam() {
    I.click('//p[text()="Team"]')
  },
  AddUser() {
    I.fillField('//input[contains(@placeholder, "a user")]', 'frog')
  },
  AddToTeam() {
    I.click('//button[contains(@class, "is-primary")]//span')
  },
}
