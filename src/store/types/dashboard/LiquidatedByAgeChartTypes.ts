export interface LiquidatedByAgeChartState {
  results: LiquidatedByAgeChartObject[];
  loading: boolean;
  error: string | null;
}

export interface LiquidatedByAgeChartResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: LiquidatedByAgeChartObject[];
}

interface LiquidatedByAgeChartObject {
  group_fields: {
    company_status_from_dttm__year: number;
    period_activity: string;
  };
  Count: number;
}

export interface LiquidatedByAgeChartStateObject {
  year: number;
  value: number;
  category: string;
  key: number;
}
