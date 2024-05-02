import axios from 'axios';
import { AxiosError } from 'axios';
import { ApiError } from '@app/api/ApiError';
import { readToken } from '@app/services/localStorage.service';
import { TOKEN_NAME } from '@app/constants/Constants';

const BASE_URL = 'https://api.analytix.by/api/v1/auth/';

export const dashboardSourceToken = axios.CancelToken.source();

export const httpApi = axios.create({
  baseURL: BASE_URL,
});

export const httpDashboard = axios.create();

export const httpAxios = axios.create();

httpApi.interceptors.request.use((config) => {
  return config;
});

httpDashboard.interceptors.request.use((config) => {
  const token = readToken();
  if (token && config.headers) {
    config.headers['Authorization'] = `${TOKEN_NAME} ${token}`;
    config.cancelToken = dashboardSourceToken.token;
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

httpAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // notificationController.success({ message: 'Вы не авторизированны, войдите в свой аккаунт' });
      window.location.href = '/auth/login';
    }
  },
);

httpAxios.interceptors.request.use((config) => {
  const token = readToken();
  if (token && config.headers) {
    config.headers['Authorization'] = `${TOKEN_NAME} ${token}`;
  }
  return config;
});

export interface ApiErrorData {
  message: string;
}
