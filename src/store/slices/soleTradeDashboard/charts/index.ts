import { combineReducers } from '@reduxjs/toolkit';
import createdLineChartSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/created/createdLineChartSoleTradeSlice';
import createdColumnChartSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/created/createdColumnChartSoleTradeSlice';
import liquidatedLineChartSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/liquidated/liquidatedLineChartSoleTradeSlice';
import liquidatedColumnChartSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/liquidated/liquidatedColumnChartSoleTradeSlice';
import liquidatedByAgeSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/liquidated/liquidatedByAgeChartSoleTradeSlice';
import bankruptedLineChartSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/bankrupted/bankruptedLineChartSoleTradeSlice';
import bankruptedColumnChartSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/bankrupted/bankrutpedColumnChartSoleTradeSlice';

export const chartsSoleTradeReducer = combineReducers({
  createdLineChartSoleTrade: createdLineChartSoleTradeReducer,
  createdColumnChartSoleTrade: createdColumnChartSoleTradeReducer,
  liquidatedLineChartSoleTrade: liquidatedLineChartSoleTradeReducer,
  liquidatedColumnChartSoleTrade: liquidatedColumnChartSoleTradeReducer,
  liquidatedByAgeSoleTrade: liquidatedByAgeSoleTradeReducer,
  bankruptedLineChartSoleTrade: bankruptedLineChartSoleTradeReducer,
  bankruptedColumnChartSoleTrade: bankruptedColumnChartSoleTradeReducer,
});

export default chartsSoleTradeReducer;
