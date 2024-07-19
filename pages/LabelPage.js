const { I } = inject()

module.exports = {
  clickLinkLabel() {
    I.click('//a[@href="/labels"]')
  },
  newLabel() {
    I.click('//a[@href="/labels/new"]//span')
  },
  LabelTitle() {
    I.fillField('//input[@id="labelTitle"]', 'Label')
  },
  createLabel() {
    I.fillField(
      '//button[contains(@class, "base-button--type")][contains(@style, "button-white")]//span[@class="icon is-small"]',
    )
  },
  clickToDelete() {
    I.click('//button[contains(@class, "delete is-small")]')
  },
  DoIt() {
    I.click('//* [text()="Do it!"]')
  },
}
