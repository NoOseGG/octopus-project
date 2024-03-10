export interface ColumnChartMonthState {
  results: ColumnChartMonthObject[];
  loading: boolean;
  error: string | null;
}

export interface ColumnChartMonthObject {
  type: number;
  sales: number;
}
