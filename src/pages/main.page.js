import { URLS } from '../helpers/constants/url.constants';

export class MainPage {
	constructor(page) {
		this.page = page;
		// Urls
		this.urlHome = URLS.URL_Home;
		this.urlHomeBack = URLS.URL_HOME_BACK;
		this.urlSourceCode = URLS.URL_SOURCE_CODE;
		this.urlArticle = URLS.URL_ARTICLE;
		this.urlEdit = URLS.URL_EDIT;
		this.urlApi = URLS.URL_API;
		// Locators
		this.mainPage = page.getByRole('main');
		this.mainPage = page.getByRole('main');
		this.mainTitle = page.locator('.banner .container').getByRole('heading', { name: 'conduit' });
		this.mainSubtitle = page.locator('.banner .container p', { hasText: 'A place to share your knowledge.' }); // .getByText('A place to share your')
	}

	// async getMainPage() {
	// 	return this.mainPage;
	// }

	async openPage() {
		await this.page.goto(this.urlHome);
	}
}
