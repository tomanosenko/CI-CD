
// Page Object

import { test, expect } from '@playwright/test';
import {loginPage} from '../framework/pages/Log_in_page'
import {logoutPage} from '../framework/pages/Log_out_page'
import {Manage_labels_page} from '../framework/pages/Manage_labels_page'
import {DeleteLabel} from '../framework/pages/Delete_labels'
import {CorrectLabel} from '../framework/pages/Correct_label'


test('Успешное удаление лэйбла', async ({ page }) => {
  const deleteLabel = await DeleteLabel ({ page });
  await deleteLabel.login();
  await deleteLabel.manage();
  await deleteLabel.delete_lab();
  await expect(page.getByText('You currently do not have any labels. Create a label.')).toBeVisible();
});

test('Успешный вход', async ({ page }) => {
  const LoginPage = await loginPage({ page });
  await LoginPage.login();
  await expect(page.getByRole('heading', { name: 'Current Tasks' })).toBeVisible();
});

// Этот тест тоже проходит, но тогда, когда другие закомментированы
// test('Успешное редактирование лэйбла', async ({ page }) => {
//   const сorrectLabel = await CorrectLabel({ page });
//   await сorrectLabel.login();
//   await сorrectLabel.manage();
//   await сorrectLabel.correction();
//   await expect(page.getByRole('button', { name: 'New Label' })).toBeVisible()
//   const deleteLabele = await DeleteLabel ({ page });
//   await deleteLabele.delete_lab();
// });

test('Успешный выход', async ({ page }) => {
  const LogoutPage = await logoutPage({ page });
  await LogoutPage.login();
  await LogoutPage.logout();
  await expect(page.getByRole('heading', { name: 'Welcome Back!' })).toBeVisible();
});

test('Успешное добавление лэйбла', async ({ page }) => {
  const ManageLabelsPage = await Manage_labels_page({ page });
  await ManageLabelsPage.login();
  await ManageLabelsPage.manage();
  await expect(page.getByRole('main').getByRole('button').nth(1)).toBeVisible();
  const deleteLabele = await DeleteLabel ({ page });
  await deleteLabele.delete_lab();
});

