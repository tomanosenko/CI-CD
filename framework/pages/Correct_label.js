export async function CorrectLabel({ page }) {
  const visit = async () => {
    await page.goto('https://try.vikunja.io')
  }

  const fillName = async name => {
    await page.fill('[placeholder="e.g. frederick"]', name)
  }

  const fillPassword = async password => {
    await page.fill('[placeholder="e.g. •••••••••••"]', password)
  }

  const clickLogin = async () => {
    await page.click('button:has-text("Login")')
  }

  const click_labels = async () => {
    await page.click('a:has-text("Labels")')
  }

  const click_new_label = async () => {
    await page.click('a:has-text("New Label")')
  }

  const fill_title = async () => {
    await page.getByPlaceholder('The label title goes here…').fill('Label')
  }

  const create_label = async () => {
    await page.click('button:has-text("Create")')
  }

  const login = async () => {
    await visit()
    await fillName('Toma')
    await fillPassword('Pipipupu')
    await clickLogin()
  }

  const manage = async () => {
    await click_labels()
    await click_new_label()
    await fill_title()
    await create_label()
  }

  const label_click = async () => {
    await page.getByRole('button', { name: 'Label' }).click()
  }

  const label_rename = async () => {
    await page.getByPlaceholder('The label title goes here…').fill(`New label`)
  }

  const label_comment = async () => {
    await page.locator('.tiptap__editor > .tiptap').fill('Это очень срочно')
  }

  const save = async () => {
    await page.getByRole('button', { name: 'Save' }).click()
  }

  const correction = async () => {
    await label_click()
    await label_rename()
    await label_comment()
    await save()
  }

  return {
    visit,
    fillName,
    fillPassword,
    clickLogin,
    click_labels,
    click_new_label,
    fill_title,
    create_label,
    login,
    manage,
    correction,
  }
}
