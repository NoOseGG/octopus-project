export interface IInitialState {
  results: SimilarSubject[];
  unnProfile: string | null;
  loading: boolean;
  error: string | null;
}

export interface ResponseData {
  results: SimilarSubject[];
}

export interface SimilarSubject {
  legal_entity_id: string | null;
  address_settlement: string | null;
  tax_office_name: string | null;
  company_short_name: string | null;
}

export interface RequestData {
  unn: string | null;
  settlement: string | null;
  taxOffice: string | null;
  typeActivity: string | null;
}
