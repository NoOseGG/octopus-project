import { RootState } from '@app/store/store';

export type ColumnChartMonthProps = {
  columnChart: COLUMN_CHART_MONTH;
};

export enum COLUMN_CHART_MONTH {
  LE_CREATED,
  LE_LIQUIDATED,
  LE_BANKRUPTED,
  LE_CHECKED,

  ST_CREATED,
  ST_LIQUIDATED,
  ST_BANKRUPTED,
}

export const getStateForColumnChartMonth = (state: RootState, columnChart: COLUMN_CHART_MONTH) => {
  switch (columnChart) {
    case COLUMN_CHART_MONTH.LE_CREATED:
      return state.charts.createdColumnChart;
    case COLUMN_CHART_MONTH.LE_LIQUIDATED:
      return state.charts.liquidatedColumnChart;
    case COLUMN_CHART_MONTH.LE_BANKRUPTED:
      return state.charts.bankruptedColumnChart;
    case COLUMN_CHART_MONTH.LE_CHECKED:
      return state.charts.checkedColumnChart;

    case COLUMN_CHART_MONTH.ST_CREATED:
      return state.chartsSoleTrade.createdColumnChartSoleTrade;
    case COLUMN_CHART_MONTH.ST_LIQUIDATED:
      return state.chartsSoleTrade.liquidatedColumnChartSoleTrade;
    case COLUMN_CHART_MONTH.ST_BANKRUPTED:
      return state.chartsSoleTrade.bankruptedColumnChartSoleTrade;
  }
};

export const getTitleForColumnChartMonth = (columnChart: COLUMN_CHART_MONTH): string => {
  switch (columnChart) {
    case COLUMN_CHART_MONTH.LE_CREATED:
      return 'Динамика регистрации компаний по месяцам';
    case COLUMN_CHART_MONTH.LE_LIQUIDATED:
      return 'Динамика ликвидаций компаний по месяцам';
    case COLUMN_CHART_MONTH.LE_BANKRUPTED:
      return 'Динамика банкротств компаний по месяцам';
    case COLUMN_CHART_MONTH.LE_CHECKED:
      return 'Динамика проверок компаний по месяцам';

    case COLUMN_CHART_MONTH.ST_CREATED:
      return 'Динамика регистрации ИП по месяцам';
    case COLUMN_CHART_MONTH.ST_LIQUIDATED:
      return 'Динамика ликвидаций ИП по месяцам';
    case COLUMN_CHART_MONTH.ST_BANKRUPTED:
      return 'Динамика банкротств ИП по месяцам';
  }
};
