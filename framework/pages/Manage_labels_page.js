export async function LabelElement({ page }) {
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

  const create = async () => {
    await clickLabels()
    await clickNewLabel()
    await fillTitle()
    await createLabel()
  }

  return {
    clickLabels,
    clickNewLabel,
    fillTitle,
    createLabel,
    create,
    deleteLab,
  }
}
