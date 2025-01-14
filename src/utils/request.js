import axios from 'axios'

const request = axios.create({
	baseURL: 'http: 127.0.0.1:8008',
	timeout: 5000,
})

request.interceptors.request.use(
	config => {
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

request.interceptors.response.use(
	response => {
		return response
	},
	error => {
		return Promise.reject(error)
	}
)

export default request