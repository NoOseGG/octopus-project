export interface SearchResponse {
  count: number;
  next: string;
  previous: string;
  results: Organization[];
}

interface Organization {
  unn: string;
  date_reg: string;
  full_name: string;
  full_address: string;
  status_code: string;
  status_name: string;
}
