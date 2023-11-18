export const DASH = {
  BASE: 'https://api.analytix.by/api/v1/dashboard/main/?',
  LEGAL_ENTITY: 'legal_form_entity_type__iexact=Юридическое+лицо&',
  SOLE_TRADE: 'legal_form_entity_type__iexact=Индивидуальный+предприниматель&',
  LIQUIDATED_ENTITY: 'company_status_code__in=DH,SL,PR,BP,PL,RG,SA,LC&',
  COUNT: 'count=1&',
  DATE_BEFORE: (date: string): string => {
    return `company_date_registration__lte=${date}&`;
  },
  DATE_AFTER: (date: string): string => {
    return `company_date_registration__gte=${date}&`;
  },

  DATE_BEFORE_LIQUIDATED: (date: string): string => {
    return `company_status_from_dttm__lte=${date}&`;
  },

  DATE_AFTER_LIQUIDATED: (date: string): string => {
    return `company_status_from_dttm__gte=${date}&`;
  },

  STATUS_AT: 'company_status_code=AT&',
  AGR_COUNT: 'aggregate_by=Count&',
  AGR_AVERAGE: 'aggregate_by=Avg&',

  GROUP_BY: (field: string): string => {
    return `group_by=${field}&`;
  },

  GROUP_BY_PERIOD_ACTIVITY: (): string => {
    return `group_by=company_status_from_dttm__year,period_activity&`;
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
    return `type_activity_name__icontains=${field}&`;
  },

  TYPE_ACTIVITY: (field: string): string => {
    return `type_activity_name__iexact=${field}&`;
  },

  CODE_ACTIVITY: (field: string): string => {
    return `type_activity_code__iexact=${field}&`;
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
