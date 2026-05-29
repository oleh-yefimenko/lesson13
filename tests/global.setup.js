import { test as setup, request } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import { URLS } from '../src/helpers/constants/url.constants';

setup('auth setup', async () => {
	const apiContext = await request.newContext();

	const response = await apiContext.post(`${URLS.URL_API}/challenger`);

	const key = response.headers()['x-challenger'];

	const tokenPath = path.resolve(process.cwd(), 'auth-token.json');

	fs.writeFileSync(tokenPath, JSON.stringify({ key }, null, 2));

	console.log('Токен успешно сохранен');
	await apiContext.dispose();
});

/* Урок 10 - 1:30:00 Если делать, как советует Тварь для Setup (старый метод)
import { request } from '@playwright/test';

export default async function globalSetup() {
	const apiContext = await request.newContext();
	const response = await apiContext.post(`${URLS.URL_API}/challenger`);
	const headers = response.headers();
	// Вытащить токен из хедера
	const key = headers['x-challenger'];

	const tokenPath = path.resolve(process.cwd(), 'auth-token.json');
	fs.writeFileSync(tokenPath, JSON.stringify({ key }, null, 2));
	console.log('!!!!!!!!!!!!!!!!!! Токен успешно сохранен !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
}
*/
