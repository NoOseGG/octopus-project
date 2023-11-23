export interface CheckedColumnChartState {
  results: CheckedColumnChartStateObject[];
  loading: boolean;
  error: string | null;
}

interface CheckedColumnChartObject {
  group_fields: {
    inspection_dttm__month: number;
  };
  Count: number;
}

interface CheckedColumnChartStateObject {
  type: number;
  sales: number;
}

export interface CheckedResponseColumnChart {
  count: number;
  next: string | null;
  previous: string | null;
  results: CheckedColumnChartObject[];
}
