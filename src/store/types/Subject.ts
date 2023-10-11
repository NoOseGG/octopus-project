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
  gias_accredited_customer: GiasAccreditedCustomer[];
  gias_accredited_participant: GiasAccreditedParticipant[];
  gias_black_list: GiasBlackList[];
  gias_plan: GiasPlan[];
  gias_complaint_submit: GiasComplaintSubmit[];
  gias_complaint_receive: GiasComplaintReceive[];
  icetrade_customer: IceTradeCustomer[];
  // iceTradeParticipant: IceTradeParticipant[];
  // iceTradeOtherParticipant: IceTradeOtherParticipant[];
  // iceTradeOrganizerNegotiations: IceTradeOrganizerNegotiations[];
  // iceTradeOrganizer: IceTradeOrganizer[];
  government_inspection: GovernmentInspection[];
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

// ------------ GIAS -------------

export interface GiasAccreditedCustomer {
  from_dttm: string | null;
  to_dttm: string | null;
  is_customer: string | null;
  is_organizer: string | null;
  departmental_affiliation: string | null;
}
export interface GiasAccreditedParticipant {
  from_dttm: string | null;
  to_dttm: string | null;
}

export interface GiasBlackList {
  from_dttm: string | null;
  basis_inclusion: string | null;
  to_dttm: string | null;
  basis_exclusion: string | null;
}

export interface GiasPlan {
  from_dttm: string | null;
  plan_version: string | null;
  identification_number: string | null;
  plan_year: string | null;
  public_number: string | null;
  goods_name: string | null;
  okrb_0072012_code: string | null;
  okrb_0072012_name: string | null;
  okrb_0081995_code: string | null;
  okrb_0081995_name: string | null;
  subject_purchase: string | null;
  approximate_value: string | null;
  is_organizer: string | null;
  legal_entity_id_budget: string | null;
  procedure_months: string | null;
  budget_cost: string | null;
  budget_cost_usd: string | null;
  fund_cost: string | null;
  fund_cost_usd: string | null;
  inner_cost: string | null;
  inner_cost_usd: string | null;
  fin_year: string | null;
  dsct: string | null;
  dssct: string | null;
  dknd: string | null;
  dprgr: string | null;
  chp: string | null;
  dpro: string | null;
  dspro: string | null;
  dctg: string | null;
  dart: string | null;
  dsart: string | null;
  ditm: string | null;
  finid: string | null;
  unk: string | null;
  tkid: string | null;
  name_state_organization: string | null;
}

export interface GiasComplaintSubmit {
  from_dttm: string | null;
  reg_number: string | null;
  status_code: string | null;
  status_name: string | null;
  from_dttm_gias: string | null;
  purchase_hash_diff: string | null;
  tender_form: string | null;
  suspend_from_dttm: string | null;
  suspend_to_dttm: string | null;
  review_dttm: string | null;
  redeployment_dttm: string | null;
  complaint_file_url: string | null;
  withdrawal_complaint_descr: string | null;
  withdrawal_complaint_dttm: string | null;
  complaint_refuse_url: string | null;
}

export interface GiasComplaintReceive {
  from_dttm: string | null;
  reg_number: string | null;
  status_code: string | null;
  status_name: string | null;
  from_dttm_gias: string | null;
  purchase_hash_diff: string | null;
  tender_form: string | null;
  suspend_from_dttm: string | null;
  suspend_to_dttm: string | null;
  review_dttm: string | null;
  redeployment_dttm: string | null;
  complaint_file_url: string | null;
  withdrawal_complaint_descr: string | null;
  withdrawal_complaint_dttm: string | null;
  complaint_refuse_url: string | null;
  legal_entity_id_name: string | null;
  legal_entity_id: string | null;
}

export interface IceTradeCustomer {
  purchase_number: string | null;
  lot_number: number | null;
  contract_date: string | null;
  purchase_url: string | null;
  title: string | null;
  description: string | null;
  volume: string | null;
  participants: string | null;
  price_byn: number | null;
  price_usd: number | null;
  price: number | null;
  currency: string | null;
  purchase_status: string | null;
  locations_participants: string | null;
  participants_identifier: string | null;
  other_participants: string | null;
  contest_url: string | null;
  industry: string | null;
  subindustry: string | null;
  request_start: string | null;
  request_end: string | null;
  currency_purchase: string | null;
  total_price_purchase: number | null;
  total_price_purchase_byn: number | null;
  total_price_purchase_usd: number | null;
  lot_price: number | null;
  lot_currency: string | null;
  lot_price_byn: number | null;
  lot_price_usd: number | null;
  purchase_subject: string | null;
  volume_lot: string | null;
  lot_status: string | null;
  source_financing: string | null;
  okrb_code: string | null;
}

// export interface IceTradeParticipant extends IceTradeCustomer {
//   test: string | null;
// }
//
// export interface IceTradeOtherParticipant extends IceTradeCustomer {
//   test: string | null;
// }
//
// export interface IceTradeOrganizerNegotiations extends IceTradeCustomer {
//   test: string | null;
// }
//
// export interface IceTradeOrganizer extends IceTradeCustomer {
//   test: string | null;
// }

export interface GovernmentInspection {
  legal_entity_id_gov: string;
  legal_entity_id_gov_name: string;
  plan_type: string;
  state_body: string;
  plan_name: string;
  reason: string;
  from_dttm: string;
}
