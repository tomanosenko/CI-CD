const { I } = inject()

module.exports = {
  clickLinkLabel() {
    I.click('//a[@href="/labels"]')
  },
  newLabel() {
    I.click('//a[text()="Создать метку"]')
  },
  LabelTitle() {
    I.fillField('//input[@id="labelTitle"]', 'Label123')
  },
  createLabel() {
    I.click(
      '//button[contains(@class, "base-button--type")][contains(@style, "button-white")]//span[@class="icon is-small"]',
    )
  },
  clickToDelete() {
    I.click('//button[contains(@class, "delete is-small")]')
  },
  DoIt() {
    I.click('//* [text()="Сделать это!"]')
  },
}
