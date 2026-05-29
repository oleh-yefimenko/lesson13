import { test } from '../src/helpers/fixtures/fixture';
import { expect } from '@playwright/test';

test('Переход на сайт RealWorld', async ({ app, openMainUrl, user }) => {
	await expect(app.main.mainTitle).toContainText('conduit');
	await expect(app.main.mainSubtitle).toContainText('A place to share your knowledge.');
});

test('Регистрация пользователя', async ({ app, openMainUrl, registeredUser, user }) => {
	console.log('Сайт: ' + app.main.urlHome);
	console.log('Имя: ' + user.username);
	console.log('Email: ' + user.email);
	console.log('Пароль: ' + user.pass);

	await expect(app.main.mainPage).toContainText('Your Feed');
});

test('Проверка никнейма пользователя', async ({ app, openMainUrl, registeredUser, user }) => {
	console.log('Имя: ' + user.username);
	console.log('Email: ' + user.email);
	console.log('Пароль: ' + user.pass);

	await expect(app.main.mainPage).toContainText('Your Feed');
	await expect(app.nav.profileName).toHaveText(user.username);
});

test('Выход из аккаунта', async ({ app, openMainUrl, registeredUser, user, page }) => {
	await expect(app.main.mainPage).toContainText('Your Feed');
	await app.nav.clickName();
	await expect(app.nav.logoutButton).toBeVisible();
	await app.nav.logoutUser();
	await expect(page).toHaveURL(app.main.urlHomeBack);
});

test('Проверка входа созданным аккаунтом', async ({ app, openMainUrl, registeredUser, user, page }) => {
	console.log('Сайт: ' + app.main.urlHome);
	console.log('Имя: ' + user.username);
	console.log('Email: ' + user.email);
	console.log('Пароль: ' + user.pass);

	await expect(app.main.mainPage).toContainText('Your Feed');

	await app.nav.clickName();
	await expect(app.nav.logoutButton).toBeVisible();
	await app.nav.logoutUser();
	await expect(page).toHaveURL(app.main.urlHomeBack);

	await app.main.openPage();
	await app.nav.clickLogin();
	await app.auth.loginUser(user);
	await expect(app.main.mainPage).toContainText('Your Feed');
});
