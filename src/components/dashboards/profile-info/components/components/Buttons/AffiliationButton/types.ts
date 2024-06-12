export type AffiliationResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: AffiliationObject[];
};

export type AffiliationObject = {
  unn: string;
  date_reg: string;
  full_name: string;
  full_address: string;
  status_name: string;
};
