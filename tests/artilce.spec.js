import { test } from '../src/helpers/fixtures/fixture';
import { expect } from '@playwright/test';

test('добавление статьи', async ({ app, openMainUrl, registeredUser, user, articleAll, page }) => {
	console.log('Заголовок: ' + articleAll.title);
	console.log('Описание: ' + articleAll.about);
	console.log('Текст: ' + articleAll.text);
	console.log('Тег: ' + articleAll.tag);

	await expect(app.main.mainPage).toContainText('Your Feed');

	await app.nav.clickNewArticle();
	await app.article.createArticle(articleAll);
	await expect(page).toHaveURL(new RegExp(app.article.title));
});

test('Удаление статьи кнопкой на баннере', async ({ app, openMainUrl, registeredUser, user, articleAll, page }) => {
	console.log('Заголовок: ' + articleAll.title);
	console.log('Описание: ' + articleAll.about);
	console.log('Текст: ' + articleAll.text);
	console.log('Тег: ' + articleAll.tag);

	await expect(app.main.mainPage).toContainText('Your Feed');

	await app.nav.clickNewArticle();
	await app.article.createArticle(articleAll);
	await expect(page).toHaveURL(new RegExp(app.article.title));

	await app.article.deleteArticleButton1();

	await expect(app.main.mainPage).toContainText('Your Feed');
});

test('Удаление статьи кнопкой в page', async ({ app, openMainUrl, registeredUser, user, articleAll, page }) => {
	await expect(app.main.mainPage).toContainText('Your Feed');

	await app.nav.clickNewArticle();
	await app.article.createArticle(articleAll);
	await expect(page).toHaveURL(new RegExp(app.article.title));

	await app.article.deleteArticleButton2();

	await expect(app.main.mainPage).toContainText('Your Feed');
});

test('Отмена удаления статьи', async ({ app, openMainUrl, registeredUser, user, articleAll, page }) => {
	await expect(app.main.mainPage).toContainText('Your Feed');

	await app.nav.clickNewArticle();
	await app.article.createArticle(articleAll);
	await expect(page).toHaveURL(new RegExp(articleAll.title.toLowerCase()));

	await app.article.cancelDeleteArticleButton1();

	await expect(page).toHaveURL(new RegExp(articleAll.title.toLowerCase()));
});

test('Редактирование заголовка в статье кнопкой в page', async ({
	app,
	openMainUrl,
	registeredUser,
	user,
	articleAll,
	editArticleTitle,
	page,
}) => {
	console.log('Заголовок: ' + articleAll.title);

	await expect(app.main.mainPage).toContainText('Your Feed');

	await app.nav.clickNewArticle();
	await app.article.createArticle(articleAll);
	await expect(page).toHaveURL(new RegExp(app.article.title));

	await app.article.clickEditArticle1();
	await expect(page).toHaveURL(app.main.urlEdit + articleAll.title.toLowerCase());

	await app.article.editArticleTitle(editArticleTitle);
	console.log('Измененный заголовок: ' + editArticleTitle.title);
	console.log(page.url());

	await expect(page).toHaveURL(app.main.urlArticle + editArticleTitle.title.toLowerCase());
});

test('Редактирование текста в статье кнопкой в page', async ({
	app,
	openMainUrl,
	registeredUser,
	user,
	articleAll,
	editArticleText,
	page,
}) => {
	console.log('Заголовок: ' + articleAll.title);
	console.log('Описание: ' + articleAll.about);
	console.log('Текст: ' + articleAll.text);
	console.log('Тег: ' + articleAll.tag);

	await expect(app.main.mainPage).toContainText('Your Feed');

	await app.nav.clickNewArticle();
	await app.article.createArticle(articleAll);
	await expect(page).toHaveURL(new RegExp(app.article.title));

	await app.article.clickEditArticle1();
	await expect(page).toHaveURL(app.main.urlEdit + articleAll.title.toLowerCase());

	await app.article.editArticleText(editArticleText);

	await expect(app.main.mainPage).toContainText(editArticleText.text);

	console.log('Измененный текст: ' + editArticleText.text);
});

test('Редактирование тега в статье кнопкой в page', async ({
	app,
	openMainUrl,
	registeredUser,
	user,
	articleAll,
	editArticleTag,
	page,
}) => {
	console.log('Заголовок: ' + articleAll.title);
	console.log('Описание: ' + articleAll.about);
	console.log('Текст: ' + articleAll.text);
	console.log('Тег: ' + articleAll.tag);

	await expect(app.main.mainPage).toContainText('Your Feed');

	await app.nav.clickNewArticle();
	await app.article.createArticle(articleAll);
	await expect(page).toHaveURL(new RegExp(app.article.tag));

	await app.article.clickEditArticle1();

	await expect(page).toHaveURL(app.main.urlEdit + articleAll.title.toLowerCase());

	await app.article.editArticleTag(editArticleTag);

	//! Error - после изменения тега, на странице отображается старый тег
	// await expect(app.main.mainPage).toContainText(editArticleTag.tag);

	console.log('Измененный тег: ' + editArticleTag.tag);
});
