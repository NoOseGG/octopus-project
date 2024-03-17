import axios from 'axios';
import { AxiosError } from 'axios';
import { ApiError } from '@app/api/ApiError';
import { readToken } from '@app/services/localStorage.service';
import { TOKEN_NAME } from '@app/constants/Constants';

const BASE_URL = 'https://api.analytix.by/api/v1/auth/';

export const httpApi = axios.create({
  baseURL: BASE_URL,
});

export const httpDashboard = axios.create();

httpApi.interceptors.request.use((config) => {
  return config;
});

httpDashboard.interceptors.request.use((config) => {
  const token = readToken();
  if (token && config.headers) {
    config.headers['Authorization'] = `${TOKEN_NAME} ${token}`;
  }
  return config;
});

// axios.interceptors.request.use((config) => {
//   const token = readToken();
//   if (token && config.headers) {
//     config.headers['Authorization'] = `${TOKEN_NAME} ${token}`;
//   }
//   return config;
// });

httpApi.interceptors.response.use(undefined, (error: AxiosError) => {
  throw new ApiError<ApiErrorData>(error.response?.data.message || error.message, error.response?.data);
});

export interface ApiErrorData {
  message: string;
}
