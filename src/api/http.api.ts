import axios from 'axios';
import { AxiosError } from 'axios';
import { ApiError } from '@app/api/ApiError';
import { readToken } from '@app/services/localStorage.service';

const BASE_URL = 'http://93.125.0.140:1338/api/v1/auth/';

export const httpApi = axios.create({
  baseURL: BASE_URL,
});

httpApi.interceptors.request.use((config) => {
  if (config.url === 'http://93.125.0.140:1338/api/v1/auth/login') {
    const requestData = config.data;
    console.log('Переданные данные в запросе:', requestData);
    config.data = {
      ...config.data,
      additionalField1: 'value1',
      additionalField2: 'value2',
    };
  }

  if (config.url === 'logout') {
    console.log('LOGOUT ->!');
    const token = readToken();
    config.headers = {
      ...config.headers,
      Authorization: `Welcome ${token}`,
    };
  }
  console.log(`Url -> ${config.url}`);

  return config;
});

httpApi.interceptors.response.use(undefined, (error: AxiosError) => {
  throw new ApiError<ApiErrorData>(error.response?.data.message || error.message, error.response?.data);
});

export interface ApiErrorData {
  message: string;
}
