import { test } from '../src/helpers/fixtures/fixture';
import { expect } from '@playwright/test';
import { Api } from '../src/services/api.service';
import fs from 'fs';

const getToken = () => {
	return process.env.AUTH_TOKEN || JSON.parse(fs.readFileSync('auth-token.json', 'utf-8')).key;
};

test('Получить токен доступа facade 10-1 (Тварь)', async ({ app, api, request }) => {
	const token = getToken();
	const response = await api.challenges.get(token);

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
