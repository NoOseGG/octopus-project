export type DashboardMainInfo = {
  count: number;
};

export type DashboardLineChartObject = {
  group_fields: {
    company_date_registration__year: number;
  };
  Count: number;
};

export type DashboardLineChart = {
  count: number;
  next: string | null;
  previous: string | null;
  results: DashboardLineChartObject[];
};
