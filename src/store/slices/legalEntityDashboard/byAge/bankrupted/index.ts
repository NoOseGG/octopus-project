import { combineReducers } from '@reduxjs/toolkit';
import bankruptedMoreThen20Reducer from '@app/store/slices/legalEntityDashboard/byAge/bankrupted/bankruptedMoreThen20Slice';
import bankruptedFrom10To20Reducer from '@app/store/slices/legalEntityDashboard/byAge/bankrupted/bankruptedFrom10To20Slice';
import bankruptedFrom5To10Reducer from '@app/store/slices/legalEntityDashboard/byAge/bankrupted/bankruptedFrom5To10Slice';
import bankruptedFrom1To5Slice from '@app/store/slices/legalEntityDashboard/byAge/bankrupted/bankruptedFrom1To5Slice';
import bankruptedLessThen1Reducer from '@app/store/slices/legalEntityDashboard/byAge/bankrupted/bankruptedLessThen1Slice';
import bankruptedAvgAgeReducer from '@app/store/slices/legalEntityDashboard/byAge/bankrupted/bankruptedAvgAgeSlice';

export const bankruptedCurrentByAgeReducer = combineReducers({
  liquidateMoreThen20: bankruptedMoreThen20Reducer,
  liquidateFrom10To20: bankruptedFrom10To20Reducer,
  liquidateFrom5To10: bankruptedFrom5To10Reducer,
  liquidateFrom1To5: bankruptedFrom1To5Slice,
  liquidateLessThen1: bankruptedLessThen1Reducer,
  liquidateAvgAge: bankruptedAvgAgeReducer,
});

export default bankruptedCurrentByAgeReducer;
