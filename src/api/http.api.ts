import axios from 'axios';
import { AxiosError } from 'axios';
import { ApiError } from '@app/api/ApiError';
import { readToken } from '@app/services/localStorage.service';

const BASE_URL = 'http://93.125.0.140:1338/api/v1/auth/';

export const httpApi = axios.create({
  baseURL: BASE_URL,
});

httpApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Welcome 3fe7e9ba75258e696211278683603066d853a9637274cc0a996e65cce1bdaa0e`,
  };

  return config;
});

httpApi.interceptors.response.use(undefined, (error: AxiosError) => {
  throw new ApiError<ApiErrorData>(error.response?.data.message || error.message, error.response?.data);
});

export interface ApiErrorData {
  message: string;
}
