export async function logoutPage({ page }) {
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
    logout,
  }
}
