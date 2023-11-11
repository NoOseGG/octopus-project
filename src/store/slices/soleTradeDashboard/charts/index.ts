import { combineReducers } from '@reduxjs/toolkit';
import createdLineChartSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/createdLineChartSoleTradeSlice';
import createdColumnChartSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/createdColumnChartSoleTradeSlice';
import liquidatedLineChartSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/liquidatedLineChartSoleTradeSlice';
import liquidatedColumnChartSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/liquidatedColumnChartSoleTradeSlice';

export const chartsSoleTradeReducer = combineReducers({
  createdLineChartSoleTrade: createdLineChartSoleTradeReducer,
  createdColumnChartSoleTrade: createdColumnChartSoleTradeReducer,
  liquidatedLineChartSoleTrade: liquidatedLineChartSoleTradeReducer,
  liquidatedColumnChartSoleTrade: liquidatedColumnChartSoleTradeReducer,
});

export default chartsSoleTradeReducer;
