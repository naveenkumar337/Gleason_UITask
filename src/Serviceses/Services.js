import axios from 'axios';
import { baseUrl } from './ServiceUrl';
const LoginService = (userName, passWord) => {
	var tocken = new Buffer(userName + ':' + passWord);
	return axios.get(`${baseUrl}Validate`, {
		headers: {
			Authorization: `Basic ${tocken.toString('base64')}`,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': 'Content-Type',
			'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
			'Content-Type': 'application/json'
		}
	});
};
const FetchUser = () => {
	return axios.get(`${baseUrl}allUsers`);
};
const AddUser = (userInfo) => {
	return axios.post(`${baseUrl}addUser`, userInfo);
};
const UpdateUser = (userInfo) => {
	return axios.post(`${baseUrl}updateUser`, userInfo);
};

export { LoginService, FetchUser, AddUser, UpdateUser };
