import { combineReducers } from '@reduxjs/toolkit';
import jumpSettlementReducer from '@app/store/slices/legalEntityDashboard/jumps/jumpSettlementSlice';

export const jumps = combineReducers({
  jumpSettlement: jumpSettlementReducer,
});

export default jumps;
