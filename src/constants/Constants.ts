// ------------------------------------------- URL ------------------------------------------- //
interface UrlConfig {
  ADDRESS: string;
  PORT: string;
  API: string;
  VERSION: string;
  BASE: string;
  LOGIN: string;
  RESET_PASSWORD: string;
  SET_NEW_PASSWORD: string;
  SET_NEW_PASSWORD_AFTER_RESET: string;
  ACTIVATE_EMAIL: string;
  LOGOUT: string;
  SIGNUP: string;
  CHECK_USER: string;
  SEARCH: string;
  SEARCH_SUBJECT: string;
  SEARCH_HISTORY: string;
  FAVOURITES: string;
  FEEDBACK: string;
  DEMO: string;
}

export const URLS: UrlConfig = {
  ADDRESS: 'https://api.analytix.by/',
  PORT: '',
  API: 'api/',
  VERSION: 'v1/',
  BASE: '',
  LOGIN: '',
  RESET_PASSWORD: '',
  SET_NEW_PASSWORD: '',
  SET_NEW_PASSWORD_AFTER_RESET: '',
  ACTIVATE_EMAIL: '',
  LOGOUT: '',
  SIGNUP: '',
  CHECK_USER: '',
  SEARCH: '',
  SEARCH_SUBJECT: '',
  SEARCH_HISTORY: '',
  FAVOURITES: '',
  FEEDBACK: '',
  DEMO: '',
};

URLS.BASE = `${URLS.ADDRESS}${URLS.API}${URLS.VERSION}`;
URLS.LOGIN = `${URLS.BASE}auth/login/`;
URLS.RESET_PASSWORD = `${URLS.BASE}auth/users/reset_password/`;
URLS.SET_NEW_PASSWORD = `${URLS.BASE}auth/users/set_password/`;
URLS.SET_NEW_PASSWORD_AFTER_RESET = `${URLS.BASE}auth/users/reset_password_confirm/`;
URLS.ACTIVATE_EMAIL = `${URLS.BASE}auth/users/activation/`;
URLS.LOGOUT = `${URLS.BASE}auth/logout/`;
URLS.SIGNUP = `${URLS.BASE}auth/users/`;
URLS.CHECK_USER = `${URLS.BASE}auth/users/me/`;
URLS.SEARCH = `${URLS.BASE}profile_search/`;
URLS.SEARCH_SUBJECT = `${URLS.BASE}profile/`;
URLS.SEARCH_HISTORY = `${URLS.BASE}user/view_history/`;
URLS.FAVOURITES = `${URLS.BASE}user/favourites/`;
URLS.FEEDBACK = `${URLS.BASE}user/feedback/`;
URLS.DEMO = `${URLS.BASE}demo/request`;

export const SEARCH_FILTERS_URL = {
  TYPE_ACTIVITIES: `${URLS.BASE}dashboard/ref/type_activity`,
  SETTLEMENT: `${URLS.BASE}dashboard/ref/settlement`,
  DISTRICTS: `${URLS.BASE}dashboard/ref/district`,
  REGION: `${URLS.BASE}dashboard/ref/region`,
  TAX_OFFICES: `${URLS.BASE}dashboard/ref/tax_office`,
};

export const REGIONS_URL = {
  MAP_STATISTICS: `${URLS.BASE}dashboard/open_ref/map_statistic`,
};

export const TOKEN_NAME = 'Welcome';

export const YANDEX_MAP_BASE_URL = 'https://yandex.ru/maps/?text=';

// SubjectInfo

export const MODAL_WIDTH_SMALL = 700;
export const MODAL_WIDTH_MIDDLE = 1000;
export const MODAL_WIDTH_BIG = 1400;

// Entity Type

export enum EntityType {
  LEGAl_ENTITY = 'legal_form_entity_type__iexact=Юридическое+лицо&',
  SOLE_TRADE = 'legal_form_entity_type__iexact=Индивидуальный+предприниматель&',
}
