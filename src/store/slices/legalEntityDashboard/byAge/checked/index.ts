import { combineReducers } from '@reduxjs/toolkit';
import checkedAvgAgeReducer from '@app/store/slices/legalEntityDashboard/byAge/checked/checkedAvgAgeSlice';

export const checkedCurrentByAgeReducer = combineReducers({
  checkedAvgAge: checkedAvgAgeReducer,
});

export default checkedCurrentByAgeReducer;
