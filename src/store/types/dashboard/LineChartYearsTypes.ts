export interface LineChartYearsState {
  results: LineChartYearsObject[];
  loading: boolean;
  error: string | null;
}
export interface LineChartYearsObject {
  type: number;
  sales: number;
}
