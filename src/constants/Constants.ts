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
  SEARCH_HISTORY: string;
  FAVOURITES: string;
}

export const URLS: UrlConfig = {
  ADDRESS: 'https://api.analytix.by/',
  PORT: '',
  API: 'api/',
  VERSION: 'v1/',
  BASE: '',
  LOGIN: '',
  LOGOUT: '',
  SIGNUP: '',
  CHECK_USER: '',
  SEARCH: '',
  SEARCH_SUBJECT: '',
  SEARCH_HISTORY: '',
  FAVOURITES: '',
};

URLS.BASE = `${URLS.ADDRESS}${URLS.API}${URLS.VERSION}`;
URLS.LOGIN = `${URLS.BASE}auth/login/`;
URLS.LOGOUT = `${URLS.BASE}auth/logout/`;
URLS.SIGNUP = `${URLS.BASE}auth/users/`;
URLS.CHECK_USER = `${URLS.BASE}auth/users/me/`;
URLS.SEARCH = `${URLS.BASE}profile_search/`;
URLS.SEARCH_SUBJECT = `${URLS.BASE}profile/`;
URLS.SEARCH_HISTORY = `${URLS.BASE}user/view_history/`;
URLS.FAVOURITES = `${URLS.BASE}user/favourites/`;

export const SEARCH_FILTERS_URL = {
  TYPE_ACTIVITIES: `${URLS.BASE}dashboard/ref/type_activity`,
  SETTLEMENT: `${URLS.BASE}dashboard/ref/settlement`,
  DISTRICTS: `${URLS.BASE}dashboard/ref/district`,
  REGION: `${URLS.BASE}dashboard/ref/region`,
};

export const TOKEN_NAME = 'Welcome';

// SubjectInfo

export const MODAL_WIDTH_SMALL = 700;
export const MODAL_WIDTH_MIDDLE = 1000;
export const MODAL_WIDTH_BIG = 1400;

// Entity Type

export enum EntityType {
  LEGAl_ENTITY = 'legal_form_entity_type__iexact=Юридическое+лицо&',
  SOLE_TRADE = 'legal_form_entity_type__iexact=Индивидуальный+предприниматель&',
}
