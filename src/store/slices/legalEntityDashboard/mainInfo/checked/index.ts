import { combineReducers } from '@reduxjs/toolkit';
import checkedAllReducer from '@app/store/slices/legalEntityDashboard/mainInfo/checked/checkedAllSlice';
import checkedLiquidatedReducer from '@app/store/slices/legalEntityDashboard/mainInfo/checked/checkedLiquidatedSlice';
import checkedBankruptedReducer from '@app/store/slices/legalEntityDashboard/mainInfo/checked/checkedBankruptedSlice';

export const bankruptedMainInfo = combineReducers({
  checkedAll: checkedAllReducer,
  checkedLiquidated: checkedLiquidatedReducer,
  checkedBankrupted: checkedBankruptedReducer,
});

export default bankruptedMainInfo;
