export interface CheckedBySettlementsChartState {
  results: CheckedBySettlementsChartStateObject[];
  loading: boolean;
  error: string | null;
}

export interface CheckedBySettlementsChartResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: CheckedBySettlementsChartObject[];
}

interface CheckedBySettlementsChartObject {
  group_fields: {
    address_settlement: string;
  };
  Count: number;
}

export interface CheckedBySettlementsChartStateObject {
  type: string;
  value: number;
}
