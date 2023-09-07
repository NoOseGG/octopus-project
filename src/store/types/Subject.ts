export interface SubjectType {
  unn: string | null;
  date_reg_mns: string | null;
  date_reg_egr: string | null;
  decision_create_number: string | null;
  decision_liquidation_number: string | null;
  period_activity: string;
  age_full: string;
  age_short: string;
  emails: Emails[];
  addresses: Address[];
  names: Name[];
  phones: Phone[];
  web_sites: WebSite[];
  descriptions: any[];
  tax_offices: TaxOffice[];
  tax_offices_arrears: TaxOfficeArrea[];
}

export interface Emails {
  email: string;
  from_dttm: string;
}

export interface Address {
  postcode: string | null;
  region: string;
  district: string | null;
  settlement: string;
  full_address: string;
  from_dttm: string;
}

export interface Name {
  short_name: string;
  full_name: string;
  from_dttm: string;
  to_dttm: string | null;
}

export interface Phone {
  phone_number: string;
  from_dttm: string;
  to_dttm: string | null;
}

export interface WebSite {
  url: string;
  from_dttm: string;
  to_dttm: string | null;
}

export interface TaxOffice {
  code: string;
  name: string;
  region_code: string;
  region_name: string;
  from_dttm: string;
  to_dttm: string | null;
}

export interface TaxOfficeArrea {
  code: string;
  name: string;
  region_code: string;
  region_name: string;
  from_dttm: string;
  to_dttm: string;
}
