export interface DetailedInformationState {
  results: ResponseDate[];
  loading: boolean;
  error: string | null;
}

export interface ResponseDetailedInformation {
  results: ResponseDate[];
}

export interface ResponseDate {
  legal_entity_id: string | null;
  company_short_name: string | null;
  type_activity_name: string | null;
  company_date_registration: string | null;
  company_status_name: string | null;
  address_full: string | null;
  contact_web_site: string | null;
  contact_email: string | null;
  contact_phone_number: string | null;
  tax_office_name: string | null;
}
