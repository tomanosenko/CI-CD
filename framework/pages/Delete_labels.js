export async function DeleteLabel({ page }) {
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

  const clickLabels = async () => {
    await page.click('a:has-text("Labels")')
  }

  const clickNewLabel = async () => {
    await page.click('a:has-text("New Label")')
  }

  const fillTitle = async () => {
    await page.getByPlaceholder('The label title goes here…').fill('Label')
  }

  const createLabel = async () => {
    await page.click('button:has-text("Create")')
  }

  const login = async () => {
    await visit()
    await fillName('Toma')
    await fillPassword('Pipipupu')
    await clickLogin()
  }

  const manage = async () => {
    await clickLabels()
    await clickNewLabel()
    await fillTitle()
    await createLabel()
  }

  const clickDelete = async () => {
    await page.getByRole('main').getByRole('button').nth(1).click()
  }

  const doIt = async () => {
    await page.getByRole('button', { name: 'Do it!' }).click()
  }

  const deleteLab = async () => {
    await clickDelete()
    await doIt()
  }

  return {
    visit,
    fillName,
    fillPassword,
    clickLogin,
    clickLabels,
    clickNewLabel,
    fillTitle,
    createLabel,
    login,
    manage,
    deleteLab,
  }
}
