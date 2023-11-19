import { combineReducers } from '@reduxjs/toolkit';
import LiquidatedAllSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfo/liquidated/liquidatedSoleTradeAllSlice';
import LiquidatedYearSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfo/liquidated/liquidatedSoleTradeYearSlice';
import LiquidatedQuarterSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfo/liquidated/liquidatedSoleTradeQuarterSlice';
import LiquidatedCalculatePercentSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfo/liquidated/liquidatedPercentSoleTradeSlice';

export const liquidatedMainInfo = combineReducers({
  liquidatedAllSoleTrade: LiquidatedAllSoleTradeReducer,
  liquidatedYearSoleTrade: LiquidatedYearSoleTradeReducer,
  liquidatedQuarterSoleTrade: LiquidatedQuarterSoleTradeReducer,
  liquidatedPercentSoleTrade: LiquidatedCalculatePercentSoleTradeReducer,
});

export default liquidatedMainInfo;
