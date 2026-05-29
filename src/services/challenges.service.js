import { test } from '../helpers/fixtures/fixture';
import { URLS } from '../helpers/constants/url.constants';

export class ChallengesService {
	constructor(request) {
		this.request = request;
	}

	async get(token) {
		return test.step('POST /challenger', async () => {
			let response = await this.request.get(`${URLS.URL_API}/challenges`, {
				headers: {
					'x-challenger': token,
				},
			});
			const r = await response.json();
			return r;
		});
	}
}
