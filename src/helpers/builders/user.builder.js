import { faker } from '@faker-js/faker';

export class UserBuilder {
	/* Если нужен обязательный параметр, который 100% используется
	constructor() {
		this.role = 'admin';
	}
*/
	// getEmail - шмара просто решила называть через with
	withUsername() {
		this.username = faker.string.alpha({ length: { min: 5, max: 10 } });
		return this;
	}

	withEmail() {
		this.email = `${faker.string.alphanumeric(10)}@test.com`;
		return this;
	}

	withPass() {
		this.pass = faker.internet.password();
		return this;
	}

	build() {
		const result = { ...this };
		return result;
	}
}
