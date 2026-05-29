import { test } from '../helpers/fixtures/fixture';
import { URLS } from '../helpers/constants/url.constants';

export class ChallengerService {
	constructor(request) {
		this.request = request;
	}

	async post() {
		return test.step('POST /challenger', async () => {
			const response = await this.request.post(`${URLS.URL_API}/challenger`);
			const headers = response.headers();
			// Вытащить токен из хедера
			const key = headers['x-challenger'];
			const link = `${URLS.URL_API}${headers.location}`;
			console.log(link);
			return key;
		});
	}
}
