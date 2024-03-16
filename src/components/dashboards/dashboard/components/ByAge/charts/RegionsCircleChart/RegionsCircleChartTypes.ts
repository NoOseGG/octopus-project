import { RootState } from '@app/store/store';

export type RegionsCircleProps = {
  regionCircle: REGION_CIRCLE_TYPES;
};

export enum REGION_CIRCLE_TYPES {
  LE_BANKRUPTED,
  LE_CHECKED,

  ST_BANKRUPTED,
  ST_CHECKED,
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getStateForRegionCircleChart = (state: RootState, regionCircle: REGION_CIRCLE_TYPES) => {
  switch (regionCircle) {
    case REGION_CIRCLE_TYPES.LE_BANKRUPTED:
      return state.charts.bankruptedByRegionsChart;
    case REGION_CIRCLE_TYPES.LE_CHECKED:
      return state.charts.checkedBySettlementsChart;

    // Sole Trade

    case REGION_CIRCLE_TYPES.ST_BANKRUPTED:
      return state.chartsSoleTrade.bankruptedByRegionsSoleTrade;
    case REGION_CIRCLE_TYPES.ST_CHECKED:
      return state.chartsSoleTrade.checkedBySettlementsChartSoleTrade;
  }
};

export const getTitleForRegionCircleChart = (regionCircle: REGION_CIRCLE_TYPES): string => {
  switch (regionCircle) {
    case REGION_CIRCLE_TYPES.LE_BANKRUPTED:
    case REGION_CIRCLE_TYPES.LE_CHECKED:
    case REGION_CIRCLE_TYPES.ST_BANKRUPTED:
    case REGION_CIRCLE_TYPES.ST_CHECKED:
      return '';
  }
};
