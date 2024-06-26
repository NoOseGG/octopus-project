import { RootState } from '@app/store/store';

export type LineChartYearsProps = {
  lineChart: LINE_CHART_YEAR;
};

export enum LINE_CHART_YEAR {
  LE_CREATED,
  LE_LIQUIDATED,
  LE_BANKRUPTED,
  LE_CHECKED,

  ST_CREATED,
  ST_LIQUIDATED,
  ST_BANKRUPTED,
  ST_CHECKED,
}

export const getStateForLineChartYears = (state: RootState, lineChart: LINE_CHART_YEAR) => {
  switch (lineChart) {
    case LINE_CHART_YEAR.LE_CREATED:
      return state.charts.createdLineChart;
    case LINE_CHART_YEAR.LE_LIQUIDATED:
      return state.charts.liquidatedLineChart;
    case LINE_CHART_YEAR.LE_BANKRUPTED:
      return state.charts.bankruptedLineChart;
    case LINE_CHART_YEAR.LE_CHECKED:
      return state.charts.checkedLineChart;

    case LINE_CHART_YEAR.ST_CREATED:
      return state.chartsSoleTrade.createdLineChartSoleTrade;
    case LINE_CHART_YEAR.ST_LIQUIDATED:
      return state.chartsSoleTrade.liquidatedLineChartSoleTrade;
    case LINE_CHART_YEAR.ST_BANKRUPTED:
      return state.chartsSoleTrade.bankruptedLineChartSoleTrade;
    case LINE_CHART_YEAR.ST_CHECKED:
      return state.chartsSoleTrade.checkedLineChartSoleTrade;
  }
};

export const getTitleForLineChartYears = (lineChart: LINE_CHART_YEAR): string => {
  switch (lineChart) {
    case LINE_CHART_YEAR.LE_CREATED:
      return 'Динамика регистрации компаний';
    case LINE_CHART_YEAR.LE_LIQUIDATED:
      return 'Динамика ликвидаций компаний';
    case LINE_CHART_YEAR.LE_BANKRUPTED:
      return 'Динамика банкротств компаний';
    case LINE_CHART_YEAR.LE_CHECKED:
      return 'Динамика проверок компаний';

    case LINE_CHART_YEAR.ST_CREATED:
      return 'Динамика регистрации ИП';
    case LINE_CHART_YEAR.ST_LIQUIDATED:
      return 'Динамика ликвидаций ИП';
    case LINE_CHART_YEAR.ST_BANKRUPTED:
      return 'Динамика банкротств ИП';
    case LINE_CHART_YEAR.ST_CHECKED:
      return 'Динамика проверок ИП';
  }
};
