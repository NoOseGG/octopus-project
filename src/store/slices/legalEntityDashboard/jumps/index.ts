import { combineReducers } from '@reduxjs/toolkit';
import jumpSettlementReducer from '@app/store/slices/legalEntityDashboard/jumps/jumpSettlementSlice';
import jumpTypeActivityReducer from '@app/store/slices/legalEntityDashboard/jumps/jumpTypeActivitySlice';

export const jumps = combineReducers({
  jumpSettlement: jumpSettlementReducer,
  jumpTypeActivity: jumpTypeActivityReducer,
});

export default jumps;
