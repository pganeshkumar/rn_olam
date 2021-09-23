import axios from 'axios';
import Config from 'react-native-config';
import {API_ERROR_MESSAGE} from '../constants/appConstants';

const axiosInstance = axios.create({
  baseURL: Config.API_URL,
  timeout: Number(Config.API_TIMEOUT),
  timeoutErrorMessage: API_ERROR_MESSAGE,
});

export default axiosInstance;
