export async function logoutPage({ page }) {
  const visit = async () => {
    await page.goto('https://try.vikunja.io')
  }

  const fillName = async name => {
    await page.getByPlaceholder('e.g. frederick').fill(name)
  }

  const fillPassword = async password => {
    await page.getByPlaceholder('e.g. •••••••••••').fill(password)
  }

  const clickLogin = async () => {
    await page.getByRole('button', { name: 'Login' }).click()
  }

  const login = async () => {
    await visit()
    await fillName('Toma')
    await fillPassword('Pipipupu')
    await clickLogin()
  }

  const clickProfile = async name => {
    await page.getByRole('button', { name }).click()
  }

  const clickLogout = async () => {
    await page.getByRole('button', { name: 'Logout' }).click()
  }

  const logout = async () => {
    await clickProfile('Toma')
    await clickLogout()
  }

  return {
    visit,
    fillName,
    fillPassword,
    clickLogin,
    login,
    logout,
  }
}
