import { combineReducers } from '@reduxjs/toolkit';
import jumpSettlementSoleTradeReducer from '@app/store/slices/soleTradeDashboard/jumps/jumpSettlementSoleTradeSlice';
import jumpTypeActivitySoleTradeReducer from '@app/store/slices/soleTradeDashboard/jumps/jumpTypeActivitySoleTradeSlice';

export const jumpsSoleTrade = combineReducers({
  jumpSettlement: jumpSettlementSoleTradeReducer,
  jumpTypeActivity: jumpTypeActivitySoleTradeReducer,
});

export default jumpsSoleTrade;
