import { combineReducers } from '@reduxjs/toolkit';
import createdLineChartSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/created/createdLineChartSoleTradeSlice';
import createdColumnChartSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/created/createdColumnChartSoleTradeSlice';
import liquidatedLineChartSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/liquidated/liquidatedLineChartSoleTradeSlice';
import liquidatedColumnChartSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/liquidated/liquidatedColumnChartSoleTradeSlice';
import liquidatedByAgeSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/liquidated/liquidatedByAgeChartSoleTradeSlice';
import bankruptedLineChartSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/bankrupted/bankruptedLineChartSoleTradeSlice';
import bankruptedColumnChartSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/bankrupted/bankrutpedColumnChartSoleTradeSlice';
import bankruptedByAgeSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/bankrupted/bankruptedByAgeChartSoleTradeSlice';
import bankruptedByRegionsSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/bankrupted/bankruptedByRegionsChartSoleTrade';
import checkedLineChartSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/checked/checkedLineChartSoleTradeSlice';
import checkedColumnChartSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/checked/checkedColumnChartSoleTradeSlice';
import checkedBySettlementsChartSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts/checked/checkedBySettlementsChartSoleTradeSlice';

export const chartsSoleTradeReducer = combineReducers({
  createdLineChartSoleTrade: createdLineChartSoleTradeReducer,
  createdColumnChartSoleTrade: createdColumnChartSoleTradeReducer,
  liquidatedLineChartSoleTrade: liquidatedLineChartSoleTradeReducer,
  liquidatedColumnChartSoleTrade: liquidatedColumnChartSoleTradeReducer,
  liquidatedByAgeSoleTrade: liquidatedByAgeSoleTradeReducer,
  bankruptedLineChartSoleTrade: bankruptedLineChartSoleTradeReducer,
  bankruptedColumnChartSoleTrade: bankruptedColumnChartSoleTradeReducer,
  bankruptedByAgeSoleTrade: bankruptedByAgeSoleTradeReducer,
  bankruptedByRegionsSoleTrade: bankruptedByRegionsSoleTradeReducer,
  checkedLineChartSoleTrade: checkedLineChartSoleTradeReducer,
  checkedColumnChartSoleTrade: checkedColumnChartSoleTradeReducer,
  checkedBySettlementsChartSoleTrade: checkedBySettlementsChartSoleTradeReducer,
});

export default chartsSoleTradeReducer;
