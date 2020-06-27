import axios from 'axios';
import { baseURL } from '../constants/baseUrl';

const apiClient = axios.create({
    baseURL,
    timeout: 2500,
});


export default apiClient;
