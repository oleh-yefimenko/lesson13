import { faker } from '@faker-js/faker';

export class ArticleBuilder {
	getTitle() {
		this.title = faker.string.alpha({ length: { min: 5, max: 10 } });
		// this.title = faker.lorem.word();
		return this;
	}
	getAbout() {
		this.about = faker.lorem.words({ min: 5, max: 7 });
		return this;
	}
	getText() {
		this.text = faker.lorem.paragraph({ min: 1, max: 3 });
		return this;
	}
	getTag() {
		this.tag = faker.lorem.word({ length: { min: 5, max: 7 } });
		return this;
	}
	build() {
		const result = { ...this };
		return result;
	}
}
