// ------------------------------------------- URL ------------------------------------------- //
interface UrlConfig {
  ADDRESS: string;
  PORT: string;
  API: string;
  VERSION: string;
  BASE: string;
  LOGIN: string;
  LOGOUT: string;
  REGISTRATION: string;
  CHECK_USER: string;
  SEARCH: string;
  SEARCH_SUBJECT: string;
}

export const URL: UrlConfig = {
  ADDRESS: 'http://93.125.0.140:',
  PORT: '1338/',
  API: 'api/',
  VERSION: 'v1/',
  BASE: '',
  LOGIN: '',
  LOGOUT: '',
  REGISTRATION: '',
  CHECK_USER: '',
  SEARCH: '',
  SEARCH_SUBJECT: '',
};

URL.BASE = `${URL.ADDRESS}${URL.PORT}${URL.API}${URL.VERSION}`;
URL.LOGIN = `${URL.BASE}auth/login/`;
URL.LOGOUT = `${URL.BASE}auth/logout/`;
URL.REGISTRATION = `${URL.BASE}auth/users/`;
URL.CHECK_USER = `${URL.BASE}auth/users/me/`;
URL.SEARCH = `${URL.BASE}profile_search/`;
URL.SEARCH_SUBJECT = `${URL.BASE}profile/`;
