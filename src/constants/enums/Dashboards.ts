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

  GROUP_BY: (field: string): string => {
    return `group_by=${field}&`;
  },

  ORDERING_AGG: (field: string): string => {
    return `ordering_agg=${field}&`;
  },
};
