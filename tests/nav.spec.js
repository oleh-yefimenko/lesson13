import { test } from '../src/helpers/fixtures/fixture';
import { expect } from '@playwright/test';

test('Возвращение на главную страницу по клику на лого', async ({ app, openMainUrl, page }) => {
	await app.nav.clickLogin();
	await app.nav.clickConduit();
	await expect(page).toHaveURL(app.main.urlHomeBack);
});

test('Проверка ссылки перехода на github', async ({ app, openMainUrl, page }) => {
	await app.nav.openGithub();
	await expect(page).toHaveURL(app.main.urlSourceCode);
});
