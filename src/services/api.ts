import axios from 'axios';

const DATA_URL = `https://swapi.dev/api/people/`;

function Api(uri: string) {
	return axios.get(`${DATA_URL}${uri}`);
}

export default Api;
