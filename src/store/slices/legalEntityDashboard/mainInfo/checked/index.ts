import { combineReducers } from '@reduxjs/toolkit';
import checkedAllReducer from '@app/store/slices/legalEntityDashboard/mainInfo/checked/checkedAllSlice';

export const bankruptedMainInfo = combineReducers({
  checkedAll: checkedAllReducer,
});

export default bankruptedMainInfo;
