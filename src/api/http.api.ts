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
    Authorization: `Welcome 10c6ba2a234c10ed2a52af9d1aa784a8bfbae82e8f51931e0eff9a7ecdc7e0df`,
  };

  return config;
});

httpApi.interceptors.response.use(undefined, (error: AxiosError) => {
  throw new ApiError<ApiErrorData>(error.response?.data.message || error.message, error.response?.data);
});

export interface ApiErrorData {
  message: string;
}
