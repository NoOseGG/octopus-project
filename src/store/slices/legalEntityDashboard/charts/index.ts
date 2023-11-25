import { combineReducers } from '@reduxjs/toolkit';
import createdLineChartReducer from '@app/store/slices/legalEntityDashboard/charts/created/createdLineChartSlice';
import createdColumnChartReducer from '@app/store/slices/legalEntityDashboard/charts/created/createdColumnChartSlice';
import liquidatedLineChartReducer from '@app/store/slices/legalEntityDashboard/charts/liquidated/liquidatedLineChartSlice';
import liquidatedColumnChartReducer from '@app/store/slices/legalEntityDashboard/charts/liquidated/liquidatedColumnChartSlice';
import liquidatedByAgeChartReducer from '@app/store/slices/legalEntityDashboard/charts/liquidated/liquidatedByAgeChartSlice';
import bankruptedLineChartReducer from '@app/store/slices/legalEntityDashboard/charts/bankrupted/bankruptedLineChartSlice';
import bankruptedColumnChartReducer from '@app/store/slices/legalEntityDashboard/charts/bankrupted/bankrutpedColumnChartSlice';
import bankruptedByAgeChartReducer from '@app/store/slices/legalEntityDashboard/charts/bankrupted/bankruptedByAgeChartSlice';
import bankruptedByRegionsChartReducer from '@app/store/slices/legalEntityDashboard/charts/bankrupted/bankruptedByRegionsChart';
import checkedLineChartReducer from '@app/store/slices/legalEntityDashboard/charts/checked/checkedLineChartSlice';
import checkedColumnChartReducer from '@app/store/slices/legalEntityDashboard/charts/checked/checkedColumnChartSlice';
import checkedBySettlementsChartReducer from '@app/store/slices/legalEntityDashboard/charts/checked/checkedBySettlementsChartSlice';

export const chartsReducer = combineReducers({
  createdLineChart: createdLineChartReducer,
  createdColumnChart: createdColumnChartReducer,
  liquidatedLineChart: liquidatedLineChartReducer,
  liquidatedColumnChart: liquidatedColumnChartReducer,
  liquidatedByAgeChart: liquidatedByAgeChartReducer,
  bankruptedLineChart: bankruptedLineChartReducer,
  bankruptedColumnChart: bankruptedColumnChartReducer,
  bankruptedByAgeChart: bankruptedByAgeChartReducer,
  bankruptedByRegionsChart: bankruptedByRegionsChartReducer,
  checkedLineChart: checkedLineChartReducer,
  checkedColumnChart: checkedColumnChartReducer,
  checkedBySettlementsChart: checkedBySettlementsChartReducer,
});

export default chartsReducer;
