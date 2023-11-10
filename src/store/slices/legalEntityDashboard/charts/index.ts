import { combineReducers } from '@reduxjs/toolkit';
import createdLineChartReducer from '@app/store/slices/legalEntityDashboard/charts/createdLineChart';
import createdColumnChartReducer from '@app/store/slices/legalEntityDashboard/charts/createdColumnChart';

export const chartsReducer = combineReducers({
  createdLineChart: createdLineChartReducer,
  createdColumnChart: createdColumnChartReducer,
});

export default chartsReducer;
