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

// Line Chart

export interface LineChartObject {
  group_fields: {
    company_date_registration__year: number;
  };
  Count: number;
}

export interface LineChart {
  type: number;
  sales: number;
}

export interface ResponseLineChart {
  count: number;
  next: string | null;
  previous: string | null;
  results: LineChartObject[];
}

// Detailed competitors

export interface ResponseDashboard {
  results: DashboardObject[];
}

export interface DashboardObject {
  legal_entity_id: string | null;
  company_short_name: string | null;
  type_activity_name: string | null;
  age_short: number | null;
  company_date_registration: string | null;
  company_status_name: string | null;
  address_full: string | null;
  address_settlement: string | null;
  contact_web_site: string | null;
  contact_email: string | null;
  contact_phone_number: string | null;
  tax_office_name: string | null;
  inspection_short_name: string | null;
  inspection_dttm: string | null;
  king: number;
  king_group: number;
}

export interface ResponseDashboardForRating {
  results: DashboardObject[];
}

export interface DashboardObjectForRating extends DashboardObject {
  position: number;
  highlight?: boolean;
}
