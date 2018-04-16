import axios from 'axios';

const client = axios.create({ baseURL: 'http://localhost:3001/api' });

export function getAll() {
	return client.get('/projects').then(response => response.data);
}

export default {
	getAll,
};
