import { RootState } from '@app/store/store';

export type RegionsCircleProps = {
  regionCircle: REGION_CIRCLE_TYPES;
};

export enum REGION_CIRCLE_TYPES {
  LE_BANKRUPTED,
  LE_CHECKED,
}

export const getStateForRegionCircleChart = (state: RootState, regionCircle: REGION_CIRCLE_TYPES) => {
  switch (regionCircle) {
    case REGION_CIRCLE_TYPES.LE_BANKRUPTED:
      return state.charts.bankruptedByRegionsChart;
    case REGION_CIRCLE_TYPES.LE_CHECKED:
      return state.charts.checkedBySettlementsChart;
  }
};

export const getTitleForRegionCircleChart = (regionCircle: REGION_CIRCLE_TYPES): string => {
  switch (regionCircle) {
    case REGION_CIRCLE_TYPES.LE_BANKRUPTED:
      return '';
    case REGION_CIRCLE_TYPES.LE_CHECKED:
      return '';
  }
};
