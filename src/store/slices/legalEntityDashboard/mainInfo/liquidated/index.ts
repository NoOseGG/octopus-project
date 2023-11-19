import { combineReducers } from '@reduxjs/toolkit';
import LiquidatedAllReducer from '@app/store/slices/legalEntityDashboard/mainInfo/liquidated/liquidatedAllSlice';
import LiquidatedYearReducer from '@app/store/slices/legalEntityDashboard/mainInfo/liquidated/liquidatedYearSlice';
import LiquidatedQuarterReducer from '@app/store/slices/legalEntityDashboard/mainInfo/liquidated/liquidatedQuarterSlice';
import LiquidatedCalculatePercentReducer from '@app/store/slices/legalEntityDashboard/mainInfo/liquidated/liquidatedPercentSlice';

export const liquidatedMainInfo = combineReducers({
  liquidatedAll: LiquidatedAllReducer,
  liquidatedYear: LiquidatedYearReducer,
  liquidatedQuarter: LiquidatedQuarterReducer,
  liquidatedPercent: LiquidatedCalculatePercentReducer,
});

export default liquidatedMainInfo;
