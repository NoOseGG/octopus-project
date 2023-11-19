import { combineReducers } from '@reduxjs/toolkit';
import LiquidatedAllSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfo/liquidated/liquidatedSoleTradeAllSlice';
import LiquidatedYearSoleTradeReducer from '@app/store/slices/legalEntityDashboard/mainInfo/liquidated/liquidatedYearSlice';
import LiquidatedQuarterSoleTradeReducer from '@app/store/slices/legalEntityDashboard/mainInfo/liquidated/liquidatedQuarterSlice';
import LiquidatedCalculatePercentSoleTradeReducer from '@app/store/slices/legalEntityDashboard/mainInfo/liquidated/liquidatedCalculatePercentSlice';

export const liquidatedMainInfo = combineReducers({
  liquidatedAllSoleTrade: LiquidatedAllSoleTradeReducer,
  liquidatedYearSoleTrade: LiquidatedYearSoleTradeReducer,
  liquidatedQuarterSoleTrade: LiquidatedQuarterSoleTradeReducer,
  liquidatedPercentSoleTrade: LiquidatedCalculatePercentSoleTradeReducer,
});

export default liquidatedMainInfo;
