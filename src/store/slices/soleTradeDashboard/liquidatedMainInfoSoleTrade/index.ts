import { combineReducers } from '@reduxjs/toolkit';
import LiquidatedAllSoleTradeReducer from '@app/store/slices/soleTradeDashboard/liquidatedMainInfoSoleTrade/liquidatedSoleTradeAllSlice';
import LiquidatedYearSoleTradeReducer from '@app/store/slices/legalEntityDashboard/liquidatedMainInfo/liquidatedYearSlice';
import LiquidatedQuarterSoleTradeReducer from '@app/store/slices/legalEntityDashboard/liquidatedMainInfo/liquidatedQuarterSlice';
import LiquidatedCalculatePercentSoleTradeReducer from '@app/store/slices/legalEntityDashboard/liquidatedMainInfo/liquidatedCalculatePercentSlice';

export const liquidatedMainInfo = combineReducers({
  liquidatedAllSoleTrade: LiquidatedAllSoleTradeReducer,
  liquidatedYearSoleTrade: LiquidatedYearSoleTradeReducer,
  liquidatedQuarterSoleTrade: LiquidatedQuarterSoleTradeReducer,
  liquidatedPercentSoleTrade: LiquidatedCalculatePercentSoleTradeReducer,
});

export default liquidatedMainInfo;
