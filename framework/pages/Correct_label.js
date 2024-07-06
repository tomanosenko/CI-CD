export async function LabelFormElement({ page }) {
  const labelClick = async () => {
    await page.getByRole('button', { name: 'Label' }).click()
  }

  const labelRename = async () => {
    await page.getByPlaceholder('The label title goes here…').fill(`New label`)
  }

  const labelComment = async () => {
    await page.locator('.tiptap__editor > .tiptap').fill('Это очень срочно')
  }

  const save = async () => {
    await page.getByRole('button', { name: 'Save' }).click()
  }

  const correction = async () => {
    await labelClick()
    await labelRename()
    await labelComment()
    await save()
  }

  return {
    labelClick,
    labelRename,
    labelComment,
    save,
    correction,
  }
}
