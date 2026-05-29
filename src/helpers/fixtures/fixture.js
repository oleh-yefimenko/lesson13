import { test as base } from '@playwright/test';
import { App } from '../../pages/app.page';
import { Api } from '../../services/api.service';
import { UserBuilder, ArticleBuilder } from '../builders/index.builders';

export const test = base.extend({
	app: async ({ page }, use) => {
		const app = new App(page);
		await use(app);
	},

	api: async ({ request }, use) => {
		const api = new Api(request);
		await use(api);
	},

	openMainUrl: async ({ app }, use) => {
		await app.main.openPage();

		await use();
	},

	registeredUser: async ({ openMainUrl, app, user }, use) => {
		await app.nav.clickSingUp();
		await app.auth.singUpUser(user);

		await use(user);
	},

	user: async ({}, use) => {
		const user = new UserBuilder().withUsername().withEmail().withPass().build();

		await use(user);
	},

	articleAll: async ({}, use) => {
		const articleAll = new ArticleBuilder().getTitle().getAbout().getText().getTag().build();

		await use(articleAll);
	},

	editArticleTitle: async ({}, use) => {
		const editArticleTitle = new ArticleBuilder().getTitle().build();

		await use(editArticleTitle);
	},

	editArticleTitle: async ({}, use) => {
		const editArticleTitle = new ArticleBuilder().getTitle().build();

		await use(editArticleTitle);
	},

	editArticleText: async ({}, use) => {
		const editArticleText = new ArticleBuilder().getText().build();

		await use(editArticleText);
	},

	editArticleTag: async ({}, use) => {
		const editArticleTag = new ArticleBuilder().getTag().build();

		await use(editArticleTag);
	},
});
