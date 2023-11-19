import { combineReducers } from '@reduxjs/toolkit';
import createdLineChartSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/created/createdLineChartSoleTradeSlice';
import createdColumnChartSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/created/createdColumnChartSoleTradeSlice';
import liquidatedLineChartSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/liquidated/liquidatedLineChartSoleTradeSlice';
import liquidatedColumnChartSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/liquidated/liquidatedColumnChartSoleTradeSlice';
import liquidatedByAgeSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/liquidated/liquidatedByAgeChartSoleTradeSlice';

export const chartsSoleTradeReducer = combineReducers({
  createdLineChartSoleTrade: createdLineChartSoleTradeReducer,
  createdColumnChartSoleTrade: createdColumnChartSoleTradeReducer,
  liquidatedLineChartSoleTrade: liquidatedLineChartSoleTradeReducer,
  liquidatedColumnChartSoleTrade: liquidatedColumnChartSoleTradeReducer,
  liquidatedByAgeSoleTrade: liquidatedByAgeSoleTradeReducer,
});

export default chartsSoleTradeReducer;
