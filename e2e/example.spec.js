// Page Object

import { test, expect } from '@playwright/test'
import { loginPage } from '../framework/pages/Log_in_page'
import { logoutPage } from '../framework/pages/Log_out_page'
import { LabelElement } from '../framework/pages/Manage_labels_page'
// import { LabelFormElement } from '../framework/pages/Correct_label'

test.describe('Тесты для https://try.vikunja.io/', async () => {
  test.beforeEach(async ({ page }) => {
    const LoginPage = await loginPage({ page })
    await LoginPage.login()
  })

  test('Успешный вход', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Current Tasks' }),
    ).toBeVisible()
  })

  test('Успешный выход', async ({ page }) => {
    const LogoutPage = await logoutPage({ page })
    await LogoutPage.logout()
    await expect(
      page.getByRole('heading', { name: 'Welcome Back!' }),
    ).toBeVisible()
  })

  test('Успешное добавление и удаление лэйбла', async ({ page }) => {
    const deleteLabel = await LabelElement({ page })
    await deleteLabel.create()
    await expect(
      page.getByRole('main').getByRole('button').nth(1),
    ).toBeVisible()
    await deleteLabel.deleteLab()
    await expect(
      page.getByText('You currently do not have any labels. Create a label.'),
    ).toBeVisible()
  })

  // Этот тест тоже проходит, но тогда, когда другие закомментированы
  // test('Успешное редактирование лэйбла', async ({ page }) => {
  //   const manageLabelsPage = await LabelElement({ page })
  //   await manageLabelsPage.create();
  //   const сorrectLabel = await LabelFormElement({ page });
  //   await сorrectLabel.correction();
  //   await expect(page.getByRole('button', { name: 'New Label' })).toBeVisible()
  //   const deleteLabele = await LabelElement ({ page });
  //   await deleteLabele.deleteLab();
  // });
})
