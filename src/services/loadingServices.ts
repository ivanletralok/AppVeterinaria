// axiosConfig.ts
import axios from 'axios';
import { useAppStore } from '../store/useAppStore';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
	(config) => {
		const setLoading = useAppStore.getState().setLoading;
		setLoading(true);
		return config;
	},
	(error) => {
		const setLoading = useAppStore.getState().setLoading;
		setLoading(false);
		return Promise.reject(error);
	}
);

axiosInstance.interceptors.response.use(
	(response) => {
		const setLoading = useAppStore.getState().setLoading;
		setLoading(false);
		return response;
	},
	(error) => {
		const setLoading = useAppStore.getState().setLoading;
		setLoading(false);
		return Promise.reject(error);
	}
);

export default axiosInstance;
