import { combineReducers } from '@reduxjs/toolkit';
import createdLineChartReducer from '@app/store/slices/legalEntityDashboard/charts/createdLineChartSlice';
import createdColumnChartReducer from '@app/store/slices/legalEntityDashboard/charts/createdColumnChartSlice';
import liquidatedLineChartReducer from '@app/store/slices/legalEntityDashboard/charts/liquidatedLineChartSlice';
import liquidatedColumnChartReducer from '@app/store/slices/legalEntityDashboard/charts/liquidatedColumnChartSlice';

export const chartsReducer = combineReducers({
  createdLineChart: createdLineChartReducer,
  createdColumnChart: createdColumnChartReducer,
  liquidatedLineChart: liquidatedLineChartReducer,
  liquidatedColumnChart: liquidatedColumnChartReducer,
});

export default chartsReducer;
