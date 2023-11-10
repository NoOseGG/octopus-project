// Line Chart

export interface LiquidatedLineChartState {
  results: LiquidatedLineChartObject[];
  loading: boolean;
  error: string | null;
}
interface LiquidatedLineChartObject {
  group_fields: {
    company_status_from_dttm__year: number;
  };
  Count: number;
}
export interface LiquidatedResponseLineChart {
  count: number;
  next: string | null;
  previous: string | null;
  results: LiquidatedLineChartObject[];
}

// Column Chart

export interface LiquidatedColumnChartState {
  results: LiquidatedColumnChartObject[];
  loading: boolean;
  error: string | null;
}

interface LiquidatedColumnChartObject {
  group_fields: {
    company_status_from_dttm__month: number;
  };
  Count: number;
}

export interface LiquidatedResponseColumnChart {
  count: number;
  next: string | null;
  previous: string | null;
  results: LiquidatedColumnChartObject[];
}
