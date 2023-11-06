export const DASH = {
  BASE: 'http://93.125.0.140:1338/api/v1/dashboard/main/?',
  LEGAL_ENTITY: 'legal_form_entity_type__iexact=Юридическое+лицо&',
  COUNT: 'count=1&',
  DATE_BEFORE: (date: string): string => {
    return `company_date_registration__lte=${date}&`;
  },
  DATE_AFTER: (date: string): string => {
    return `company_date_registration__gte=${date}&`;
  },
  STATUS_AT: 'company_status_code=AT&',
  AGR_COUNT: 'aggregate_by=Count&',
  AGR_AVERAGE: 'aggregate_by=Avg&',

  GROUP_BY: (field: string): string => {
    return `group_by=${field}&`;
  },

  AVG_FIELD: (field: string): string => {
    return `avg_field=${field}&`;
  },

  ORDERING_AGG: (field: string): string => {
    return `ordering_agg=${field}&`;
  },

  ORDERING: (field: string): string => {
    return `ordering=${field}&`;
  },

  ADDRESS_FULL_ICONTAINS: (field: string): string => {
    return `address_full__icontains=${field}&`;
  },

  ADDRESS_SETTLEMENT_ICONTAINS: (field: string): string => {
    return `address_settlement__icontains=${field}&`;
  },

  ADDRESS_DISTRICT_ICONTAINS: (field: string): string => {
    return `address_district__icontains=${field}&`;
  },

  ADDRESS_REGION_ICONTAINS: (field: string): string => {
    return `address_region__icontains=${field}&`;
  },

  PAGE_SIZE: (field: number): string => {
    return `page_size=${field}&`;
  },

  IS_NULL_FALSE: (field: string): string => {
    return `${field}__isnull=False&`;
  },

  AGE_RANGE: (start: number, end: number): string => {
    return `age_short__gte=${start}&age_short__lt=${end}&`;
  },
};
