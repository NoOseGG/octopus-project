export interface LineChartYearsState {
  results: LineChartYearsObject[];
  loading: boolean;
  error: string | null;
}
export interface LineChartYearsObject {
  year: number;
  count: number;
}
export interface ResponseLineChart {
  count: number;
  next: string | null;
  previous: string | null;
  results: LineChartYearsObject[];
}
