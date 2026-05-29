import { test } from '../src/helpers/fixtures/fixture';
import { expect } from '@playwright/test';

test('Проверка тегов', async ({ app, openMainUrl, registeredUser, user }) => {
	await expect(app.main.mainPage).toContainText('Your Feed');

	await app.tags.clickAd();
	await expect(app.tags.feedTag).toHaveText('реклама');

	await app.tags.clickAutus();
	await expect(app.tags.feedTag).toHaveText('autus');

	await app.tags.clickIste();
	await expect(app.tags.feedTag).toHaveText('iste');
});
