interface BankruptedLineChartObject {
  group_fields: {
    company_status_from_dttm__year: number;
  };
  Count: number;
}
export interface BankruptedResponseLineChart {
  count: number;
  next: string | null;
  previous: string | null;
  results: BankruptedLineChartObject[];
}
