export interface CheckedLineChartState {
  results: CheckedLineChartStateObject[];
  loading: boolean;
  error: string | null;
}

interface CheckedLineChartObject {
  group_fields: {
    inspection_dttm__year: number;
  };
  Count: number;
}

interface CheckedLineChartStateObject {
  type: number;
  sales: number;
}

export interface CheckedResponseLineChart {
  count: number;
  next: string | null;
  previous: string | null;
  results: CheckedLineChartObject[];
}
