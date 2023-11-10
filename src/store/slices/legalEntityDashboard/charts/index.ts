import { combineReducers } from '@reduxjs/toolkit';
import createdLineChartReducer from '@app/store/slices/legalEntityDashboard/charts/createdLineChart';
import createdColumnChartReducer from '@app/store/slices/legalEntityDashboard/charts/createdColumnChart';
import liquidatedLineChartReducer from '@app/store/slices/legalEntityDashboard/charts/liquidatedLineChart';
import liquidatedColumnChartReducer from '@app/store/slices/legalEntityDashboard/charts/liquidatedColumnChart';

export const chartsReducer = combineReducers({
  createdLineChart: createdLineChartReducer,
  createdColumnChart: createdColumnChartReducer,
  liquidatedLineChart: liquidatedLineChartReducer,
  liquidatedColumnChart: liquidatedColumnChartReducer,
});

export default chartsReducer;
