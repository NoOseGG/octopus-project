export interface CreatedState {
  count: number;
  loading: boolean;
  error: string | null;
}

export interface PercentState {
  percent: number;
  loading: boolean;
  error: string | null;
}

export interface ResponsePercent {
  results: [
    {
      group_fields: {
        company_date_registration__year: number;
      };
      Count: number;
    },
    {
      group_fields: {
        company_date_registration__year: number;
      };
      Count: number;
    },
  ];
}

export interface ResponseCreated {
  count: number;
}

export interface CalculatePercentState {
  count: boolean;
  next: string | null;
  previous: string | null;
  results: [
    {
      group_fields: {
        company_date_registration__year: number;
      };
      Count: number;
    },
    {
      group_fields: {
        company_date_registration__year: number;
      };
      Count: number;
    },
  ];
}

// Line Chart

export interface LineChartState {
  results: LineChartObject[];
  loading: boolean;
  error: string | null;
}
interface LineChartObject {
  group_fields: {
    company_date_registration__year: number;
  };
  Count: number;
}
export interface ResponseLineChart {
  count: number;
  next: string | null;
  previous: string | null;
  results: LineChartObject[];
}

// Column Chart

export interface ColumnChartState {
  results: ColumnChartObject[];
  loading: boolean;
  error: string | null;
}

interface ColumnChartObject {
  group_fields: {
    company_date_registration__month: number;
  };
  Count: number;
}

export interface ResponseColumnChart {
  count: number;
  next: string | null;
  previous: string | null;
  results: ColumnChartObject[];
}
