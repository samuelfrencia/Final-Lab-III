import axios from "axios";

const apiClient = axios.create({
	url: 'https://laboratorio3-f36a.restdb.io/rest/',
	headers: {'APIKEY': '60eb09146661365596af552f'}
});

