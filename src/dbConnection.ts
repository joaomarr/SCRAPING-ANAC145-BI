import { Client } from 'pg';
require('dotenv').config();

const client = new Client({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	port: Number(process.env.DB_PORT),
	database: process.env.DB_NAME,
});

export default client;