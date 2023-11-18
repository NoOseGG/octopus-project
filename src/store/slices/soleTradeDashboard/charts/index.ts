import { combineReducers } from '@reduxjs/toolkit';
import createdLineChartSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/createdLineChartSoleTradeSlice';
import createdColumnChartSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/createdColumnChartSoleTradeSlice';
import liquidatedLineChartSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/liquidatedLineChartSoleTradeSlice';
import liquidatedColumnChartSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/liquidatedColumnChartSoleTradeSlice';
import liquidatedByAgeSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/liquidatedByAgeChartSoleTradeSlice';

export const chartsSoleTradeReducer = combineReducers({
  createdLineChartSoleTrade: createdLineChartSoleTradeReducer,
  createdColumnChartSoleTrade: createdColumnChartSoleTradeReducer,
  liquidatedLineChartSoleTrade: liquidatedLineChartSoleTradeReducer,
  liquidatedColumnChartSoleTrade: liquidatedColumnChartSoleTradeReducer,
  liquidatedByAgeSoleTrade: liquidatedByAgeSoleTradeReducer,
});

export default chartsSoleTradeReducer;
