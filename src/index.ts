import client from './dbConnection';

(async (): Promise<void> => {
	await client.connect();

	await client.end();
})();
