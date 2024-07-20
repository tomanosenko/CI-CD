const { I } = inject()

module.exports = {
  visitLoginPage() {
    I.amOnPage('login')
  },
  FillName(name) {
    I.fillField('//input[@id="username"]', name)
  },
  FillPassword(password) {
    I.fillField('//input[@id="password"]', password)
  },
  clickButton() {
    I.click('//button[text()="Войти"]')
  },
}
