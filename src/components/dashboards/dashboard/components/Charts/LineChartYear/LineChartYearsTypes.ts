import { RootState } from '@app/store/store';

export type LineChartYearsProps = {
  lineChart: LINE_CHART_YEAR;
};

export enum LINE_CHART_YEAR {
  LE_CREATED,
  LE_LIQUIDATED,
  ST_CREATED,
  ST_LIQUIDATED,
}

export const getStateForLineChartYears = (state: RootState, lineChart: LINE_CHART_YEAR) => {
  switch (lineChart) {
    case LINE_CHART_YEAR.LE_CREATED:
      return state.charts.createdLineChart;
    case LINE_CHART_YEAR.LE_LIQUIDATED:
      return state.charts.liquidatedLineChart;
    case LINE_CHART_YEAR.ST_CREATED:
      return state.chartsSoleTrade.createdLineChartSoleTrade;
    case LINE_CHART_YEAR.ST_LIQUIDATED:
      return state.chartsSoleTrade.liquidatedLineChartSoleTrade;
  }
};

export const getTitleForLineChartYears = (lineChart: LINE_CHART_YEAR): string => {
  switch (lineChart) {
    case LINE_CHART_YEAR.LE_CREATED:
      return 'Динамика регистрации компаний';
    case LINE_CHART_YEAR.LE_LIQUIDATED:
      return 'Динамика ликвидаций компаний';

    case LINE_CHART_YEAR.ST_CREATED:
      return 'Динамика регистрации ИП';
    case LINE_CHART_YEAR.ST_LIQUIDATED:
      return 'Динамика ликвидаций ИП';
  }
};
