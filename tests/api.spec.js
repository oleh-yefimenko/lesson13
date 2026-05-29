import { test } from '../src/helpers/fixtures/fixture';
import { expect } from '@playwright/test';
import { Api } from '../src/services/api.service';

test('Получить токен доступа facade', async ({ app, request }) => {
	const api = new Api(request);
	const token = await api.challenger.post();
	let response = await api.challenges.get(token);

	console.log('Полученный токен: ' + token);
	console.log(response);

	expect(token.length).toEqual(36);

	expect(response.challenges.length).toEqual(59);

	/*
	response = await request.post(`${app.main.urlApi}/todos`, {
		headers: {
			'x-challenger': token,
		},
		data: {
			title: 'title',
			doneStatus: false,
			description: 'description',
		},
	});

	r = await response.json();

	expect(r.id).toBeTruthy();
	expect(r.title).toEqual('title');
	expect(r.doneStatus).toEqual(false);
	expect(r.description).toEqual('description');
	*/
});
