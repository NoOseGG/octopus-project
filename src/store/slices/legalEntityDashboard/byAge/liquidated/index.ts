import { combineReducers } from '@reduxjs/toolkit';
import LiquidatedMoreThen20Reducer from '@app/store/slices/legalEntityDashboard/byAge/liquidated/LiquidatedMoreThen20Slice';
import LiquidatedFrom10To20Reducer from '@app/store/slices/legalEntityDashboard/byAge/liquidated/LiquidatedFrom10To20Slice';
import LiquidatedFrom5To10Reducer from '@app/store/slices/legalEntityDashboard/byAge/liquidated/LiquidatedFrom5To10Slice';
import LiquidatedLessThen1Reducer from '@app/store/slices/legalEntityDashboard/byAge/liquidated/LiquidatedLessThen1Slice';
import LiquidatedFrom1To5Slice from '@app/store/slices/legalEntityDashboard/byAge/liquidated/LiquidatedFrom1To5Slice';
import LiquidatedAvgAgeReducer from '@app/store/slices/legalEntityDashboard/byAge/liquidated/LiquidatedAvgAgeSlice';

export const liquidateCurrentByAgeReducer = combineReducers({
  liquidateMoreThen20: LiquidatedMoreThen20Reducer,
  liquidateFrom10To20: LiquidatedFrom10To20Reducer,
  liquidateFrom5To10: LiquidatedFrom5To10Reducer,
  liquidateFrom1To5: LiquidatedFrom1To5Slice,
  liquidateLessThen1: LiquidatedLessThen1Reducer,
  liquidateAvgAge: LiquidatedAvgAgeReducer,
});

export default liquidateCurrentByAgeReducer;
