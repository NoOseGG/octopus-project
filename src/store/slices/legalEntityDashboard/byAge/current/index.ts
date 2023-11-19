import { combineReducers } from '@reduxjs/toolkit';
import MoreThen20Reducer from '@app/store/slices/legalEntityDashboard/byAge/current/moreThen20Slice';
import From10To20Reducer from '@app/store/slices/legalEntityDashboard/byAge/current/from10To20Slice';
import From5To10Reducer from '@app/store/slices/legalEntityDashboard/byAge/current/from5To10Slice';
import LessThen1Reducer from '@app/store/slices/legalEntityDashboard/byAge/current/lessThen1Slice';
import From1To5Slice from '@app/store/slices/legalEntityDashboard/byAge/current/from1To5Slice';
import AvgAgeReducer from '@app/store/slices/legalEntityDashboard/byAge/current/avgAgeSlice';

export const currentByAgeReducer = combineReducers({
  moreThen20: MoreThen20Reducer,
  from10To20: From10To20Reducer,
  from5To10: From5To10Reducer,
  from1To5: From1To5Slice,
  lessThen1: LessThen1Reducer,
  avgAge: AvgAgeReducer,
});

export default currentByAgeReducer;
