import { combineReducers } from '@reduxjs/toolkit';
import LiquidatedAllReducer from '@app/store/slices/legalEntityDashboard/liquidatedMainInfo/liquidatedAllSlice';
import LiquidatedYearReducer from '@app/store/slices/legalEntityDashboard/liquidatedMainInfo/liquidatedYearSlice';
import LiquidatedQuarterReducer from '@app/store/slices/legalEntityDashboard/liquidatedMainInfo/liquidatedQuarterSlice';
import LiquidatedCalculatePercentReducer from '@app/store/slices/legalEntityDashboard/liquidatedMainInfo/liquidatedCalculatePercentSlice';

export const liquidatedMainInfo = combineReducers({
  liquidatedAll: LiquidatedAllReducer,
  liquidatedYear: LiquidatedYearReducer,
  liquidatedQuarter: LiquidatedQuarterReducer,
  liquidatedPercent: LiquidatedCalculatePercentReducer,
});

export default liquidatedMainInfo;
