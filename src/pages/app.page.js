import { ArticlePage, AuthPage, YourFeed, MainPage, NavHeader, PopularTags } from './index.pages';

export class App {
	constructor(page) {
		this.page = page;
		this.article = new ArticlePage(page);
		this.auth = new AuthPage(page);
		this.feed = new YourFeed(page);
		this.main = new MainPage(page);
		this.nav = new NavHeader(page);
		this.tags = new PopularTags(page);
	}
}
