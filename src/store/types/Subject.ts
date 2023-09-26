export interface SubjectType {
  unn: string | null;
  date_reg_mns: string | null;
  date_reg_egr: string | null;
  decision_create_number: string | null;
  decision_liquidation_number: string | null;
  period_activity: string | null;
  age_full: string | null;
  age_short: string | null;
  emails: Emails[];
  addresses: Address[];
  names: Name[];
  phones: Phone[];
  web_sites: WebSite[];
  descriptions: Description[];
  tax_offices: TaxOffice[];
  tax_offices_arrears: TaxOfficeArrea[];
  legal_forms: LegalForm[];
  types_activities: TypeActivity[];
  statuses: Status[];
  countries: Country[];
  statuses_types: StatusType[];
  states_bodies: StateBody[];
  licenses: License[];
  vacancy: Vacancy[];
  commercial_register: CommercialRegister[];
}

export interface Emails {
  email: string | null;
  from_dttm: string | null;
}

export interface Address {
  postcode: string | null;
  region: string | null;
  district: string | null;
  settlement: string | null;
  full_address: string | null;
  from_dttm: string | null;
}

export interface Name {
  short_name: string | null;
  full_name: string | null;
  from_dttm: string | null;
  to_dttm: string | null;
}

export interface Phone {
  phone_number: string | null;
  from_dttm: string | null;
  to_dttm: string | null;
}

export interface WebSite {
  url: string | null;
  from_dttm: string | null;
  to_dttm: string | null;
}

export interface Description {
  description: string | null;
  from_dttm: string | null;
}

export interface TaxOffice {
  code: string | null;
  name: string | null;
  region_code: string | null;
  region_name: string | null;
  from_dttm: string | null;
  to_dttm: string | null;
}

export interface TaxOfficeArrea {
  code: string | null;
  name: string | null;
  region_code: string | null;
  region_name: string | null;
  from_dttm: string | null;
  to_dttm: string | null;
}

export interface LegalForm {
  form_code: string | null;
  form_type: string | null;
  name: string | null;
  description: string | null;
  exclusion_date: string | null;
  exception_description: string | null;
  entity_type: string | null;
  from_dttm: string | null;
  to_dttm: string | null;
}

export interface TypeActivity {
  code: string | null;
  name: string | null;
  from_dttm: string | null;
  to_dttm: string | null;
}

export interface Status {
  code: string | null;
  name: string | null;
  description: string | null;
  from_dttm: string | null;
  to_dttm: string | null;
}

export interface Country {
  code: string | null;
  name: string | null;
  from_dttm: string | null;
  to_dttm: string | null;
}

export interface StatusType {
  status_code: string | null;
  name: string | null;
  type_code: string | null;
  from_dttm: string | null;
  to_dttm: string | null;
}

export interface StateBody {
  state_body_code: string | null;
  full_name: string | null;
  status: string | null;
  from_dttm: string | null;
}

export interface License {
  license_number: string | null;
  state_body_name: string | null;
  license_name: string | null;
  status_name: string | null;
  status_code: string | null;
  from_dttm: string | null;
}

export interface Vacancy {
  from_dttm: string | null;
  vacancy_url: string | null;
  vacancy_name: string | null;
  class_group: string | null;
  work_format: string | null;
  working_hours: string | null;
  number_seats: string | null;
  min_salary_byn: string | null;
  max_salary_byn: string | null;
  min_salary_usd: string | null;
  max_salary_usd: string | null;
  work_rate: string | null;
  workplace_address_full: string | null;
  workplace_address_region: string | null;
  workplace_address_district: string | null;
  workplace_address_settlement: string | null;
  education_level: string | null;
  employment_service_division: string | null;
  tariff_category: string | null;
  addition: string | null;
  work_experience: string | null;
  accept_handicapped: string | null;
}

export interface CommercialRegister {
  from_dttm: string | null;
  reg_num: string | null;
  object_type: string | null;
  trade_network_name: string | null;
  type_retail_format: string | null;
  type_retail_goods: string | null;
  object_type_location: string | null;
  brand_retail: string | null;
  type_retail: string | null;
  trade_area: string | null;
  type_catering: string | null;
  number_places_catering: string | null;
  number_public_places_catering: string | null;
  shopping_center_specialization: string | null;
  market_type: string | null;
  market_specialization: string | null;
  forms_retail: string | null;
  object_address_full: string | null;
  object_address_region: string | null;
  object_address_district: string | null;
  object_address_settlement: string | null;
  goods_classes: string | null;
  product_groups: string | null;
  product_subgroups: string | null;
  type_retail_trade: string | null;
  type_wholesale_trade: string | null;
  to_dttm: string | null;
}
