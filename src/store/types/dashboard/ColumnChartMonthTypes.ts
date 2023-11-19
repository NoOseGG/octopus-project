export interface ColumnChartMonthState {
  results: ColumnChartMonthObject[];
  loading: boolean;
  error: string | null;
}

interface ColumnChartMonthObject {
  type: number;
  sales: number;
}
