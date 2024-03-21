export const DASH = {
  BASE: 'https://api.analytix.by/api/v1/dashboard/main/?',
  BASE_INSPECTION: 'https://api.analytix.by/api/v1/dashboard/inspection/?',
  BASE_JUMP_SETTLEMENT: 'https://api.analytix.by/api/v1/dashboard/jump_settlement/?',
  BASE_JUMP_TYPE_ACTIVITY: 'https://api.analytix.by/api/v1/dashboard/jump_type_activity/?',
  BASE_LEVEL_COMPETITION: 'https://api.analytix.by/api/v1/dashboard/level_competition//?',
  LEGAL_ENTITY: 'legal_form_entity_type__iexact=Юридическое+лицо&',
  SOLE_TRADE: 'legal_form_entity_type__iexact=Индивидуальный+предприниматель&',
  LIQUIDATED_ENTITY: 'company_status_code__in=DH,SL,PR,PL,RG,SA,LC&',
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

  DATE_BEFORE_INSPECTION: (date: string): string => {
    return `inspection_dttm__lte=${date}&`;
  },

  DATE_AFTER_INSPECTION: (date: string): string => {
    return `inspection_dttm__gte=${date}&`;
  },

  STATUS_AT: 'company_status_code=AT&',
  STATUS_BP: 'company_status_code=BP&',
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

  ADDRESS_SETTLEMENT_IN: (field: string[]): string => {
    const postfixUrl = createUrlFromArray(field);
    return `address_settlement__in=${postfixUrl}`;
  },

  ADDRESS_DISTRICT_ICONTAINS: (field: string): string => {
    return `address_district__icontains=${field}&`;
  },

  ADDRESS_DISTRICT_IN: (field: string[]): string => {
    const postfixUrl = createUrlFromArray(field);
    return `address_district__in=${postfixUrl}`;
  },

  ADDRESS_REGION_ICONTAINS: (field: string): string => {
    return `address_region__icontains=${field}&`;
  },

  ADDRESS_REGION_IN: (field: string[]): string => {
    const postfixUrl = createUrlFromArray(field);
    return `address_region__in=${postfixUrl}`;
  },

  TAX_OFFICES_ICONTAINS: (field: string): string => {
    return `tax_office_name__icontains=${field}&`;
  },

  TAX_OFFICES_IN: (field: string[]): string => {
    const postfixUrl = createUrlFromArray(field);
    return `tax_office_name__in=${postfixUrl}`;
  },

  TYPE_ACTIVITY: (field: string): string => {
    return `type_activity_name__iexact=${field}&`;
  },

  TYPE_ACTIVITY_IN: (field: string[]): string => {
    const postfixUrl = createUrlFromArray(field);
    return `type_activity_name__in=${postfixUrl}`;
  },

  CODE_ACTIVITY: (field: string): string => {
    return `type_activity_code__iexact=${field}&`;
  },

  CODE_ACTIVITY_IN: (field: string[]): string => {
    const postfixUrl = createUrlFromArray(field);
    return `type_activity_code__in=${postfixUrl}`;
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

  // JumpSettlement

  JUMP_SETTLEMENT_LEGAL_ENTITY: 'legal_form_id__icontains=ЮЛ&',
  JUMP_SETTLEMENT_SOLE_TRADE: 'legal_form_id__icontains=ИП&',

  JUMP_TYPE_REG_PLUS: 'type_reg__iexact=+&',
  JUMP_TYPE_REG_MINUS: 'type_reg__iexact=-&',
};

const createUrlFromArray = (array: string[]): string => {
  let str = '';
  array.forEach((item, index) => {
    if (index === 0 && index === array.length - 1) str += `${item}&`;
    else if (index === 0) str += item;
    else if (index === array.length - 1) str += `, ${item}&`;
    else str += `, ${item}`;
  });
  return str;
};
