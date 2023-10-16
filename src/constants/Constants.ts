// ------------------------------------------- URL ------------------------------------------- //
interface UrlConfig {
  ADDRESS: string;
  PORT: string;
  API: string;
  VERSION: string;
  BASE: string;
  LOGIN: string;
  LOGOUT: string;
  SIGNUP: string;
  CHECK_USER: string;
  SEARCH: string;
  SEARCH_SUBJECT: string;
}

export const URLS: UrlConfig = {
  ADDRESS: 'http://93.125.0.140:',
  PORT: '1338/',
  API: 'api/',
  VERSION: 'v1/',
  BASE: '',
  LOGIN: '',
  LOGOUT: '',
  SIGNUP: '',
  CHECK_USER: '',
  SEARCH: '',
  SEARCH_SUBJECT: '',
};

URLS.BASE = `${URLS.ADDRESS}${URLS.PORT}${URLS.API}${URLS.VERSION}`;
URLS.LOGIN = `${URLS.BASE}auth/login/`;
URLS.LOGOUT = `${URLS.BASE}auth/logout/`;
URLS.SIGNUP = `${URLS.BASE}auth/users/`;
URLS.CHECK_USER = `${URLS.BASE}auth/users/me/`;
URLS.SEARCH = `${URLS.BASE}profile_search/`;
URLS.SEARCH_SUBJECT = `${URLS.BASE}profile/`;

export const TOKEN_NAME = 'Welcome';

// SubjectInfo

export const MODAL_WIDTH = 700;
