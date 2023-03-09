import { test, expect } from '@playwright/test';

test ('test1', async ({ page }) => {
  await page.goto('https://netology.ru/');
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByPlaceholder('Email').fill(email);;
  await page.getByPlaceholder('Пароль').fill(password);
  await page.getByTestId('login-submit-btn').click();
  await expect (page).toHaveURL('https://netology.ru/profile');
  await expect(page.getByRole('heading', { name: 'Мои курсы и профессии' })).toHaveText('Мои курсы и профессии');
});

test ('test2', async ({ page }) => {
    await page.goto('https://netology.ru/');
    await page.getByRole('link', { name: 'Войти' }).click();
    await page.getByPlaceholder('Email').fill('anay_1991@bk.ru');;
    await page.getByPlaceholder('Пароль').fill('123');
    await page.getByTestId('login-submit-btn').click();
    await expect(page.getByTestId('login-error-hint')).toHaveText('Вы ввели неправильно логин или пароль');
  });
