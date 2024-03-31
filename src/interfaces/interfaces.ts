import { NumericLiteral } from 'typescript';

export type Dimension = number | string;

export type ChartData = number[];

export type xData = number[] | string[];

export type LanguageType = 'en' | 'ru';

export type ThemeType = 'light' | 'dark';

export interface ChartSeries {
  seriesName: string;
  value: number;
  data: {
    day: number;
    value: NumericLiteral;
  };
  name: string;
}

export type ChartSeriesData = ChartSeries[];

export type Severity = 'success' | 'error' | 'info' | 'warning';

export type TwoFactorAuthOption = 'is_email_confirmed';

export type CurrencyType = 'USD' | 'ETH' | 'BTC';

export type ActivityStatusType = 'sold' | 'booked' | 'added';

// Competitors profile info

export type CountCompetitorsResponse = {
  count: number;
};

// Column chart

export interface ColumnChartObject {
  group_fields: {
    company_date_registration__month: number;
  };
  Count: number;
}

export interface ColumnChart {
  type: number;
  sales: number;
}

export interface ResponseColumnChart {
  count: number;
  next: string | null;
  previous: string | null;
  results: ColumnChartObject[];
}
