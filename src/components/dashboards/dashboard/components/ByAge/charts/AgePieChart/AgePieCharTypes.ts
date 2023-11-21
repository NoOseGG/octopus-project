import { AGE_TYPES } from '@app/components/dashboards/dashboard/components/ByAge/components/Age/AgeTypes';

export type AgePieChartProps = {
  more20: AGE_TYPES;
  from10To20: AGE_TYPES;
  from5To10: AGE_TYPES;
  from1To5: AGE_TYPES;
  less1: AGE_TYPES;
  chartType: CHART_TYPE;
};

export enum CHART_TYPE {
  PIE,
  ROSE,
}
