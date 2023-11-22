export interface BankruptedByRegionsChartState {
  results: BankruptedByRegionsChartStateObject[];
  loading: boolean;
  error: string | null;
}

export interface BankruptedByRegionsChartResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: BankruptedByRegionsChartObject[];
}

interface BankruptedByRegionsChartObject {
  group_fields: {
    address_region: string;
  };
  Count: number;
}

export interface BankruptedByRegionsChartStateObject {
  type: string;
  value: number;
}
