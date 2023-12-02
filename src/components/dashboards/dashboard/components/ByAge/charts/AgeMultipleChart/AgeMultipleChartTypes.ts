import { RootState } from '@app/store/store';

export type AgeMultipleChartProps = {
  ageMultiple: AGE_MULTIPLE_TYPES;
};

export enum AGE_MULTIPLE_TYPES {
  LE_LIQUIDATED,
  LE_BANKRUPTED,
  ST_LIQUIDATED,
  ST_BANKRUPTED,
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getStateForAgeMultipleChart = (state: RootState, ageMultiple: AGE_MULTIPLE_TYPES) => {
  switch (ageMultiple) {
    case AGE_MULTIPLE_TYPES.LE_LIQUIDATED:
      return state.charts.liquidatedByAgeChart;
    case AGE_MULTIPLE_TYPES.LE_BANKRUPTED:
      return state.charts.bankruptedByAgeChart;
    case AGE_MULTIPLE_TYPES.ST_LIQUIDATED:
      return state.chartsSoleTrade.liquidatedByAgeSoleTrade;
    case AGE_MULTIPLE_TYPES.ST_BANKRUPTED:
      return state.chartsSoleTrade.bankruptedByAgeSoleTrade;
  }
};

export const getTitleForAgeMultipleChart = (ageMultiple: AGE_MULTIPLE_TYPES): string => {
  switch (ageMultiple) {
    case AGE_MULTIPLE_TYPES.LE_LIQUIDATED:
      return '';
    case AGE_MULTIPLE_TYPES.LE_BANKRUPTED:
      return '';
    case AGE_MULTIPLE_TYPES.ST_LIQUIDATED:
      return '';
    case AGE_MULTIPLE_TYPES.ST_BANKRUPTED:
      return '';
  }
};
