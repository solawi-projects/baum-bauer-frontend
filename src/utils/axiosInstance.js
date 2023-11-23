import axios from "axios";

const axiosApiInstance = axios.create();
axiosApiInstance.defaults.baseURL = 'http://localhost:4000';
// axiosApiInstance.defaults.withCredentials = false;

export default axiosApiInstance;