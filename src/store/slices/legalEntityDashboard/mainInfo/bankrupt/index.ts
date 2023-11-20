import { combineReducers } from '@reduxjs/toolkit';
import BankruptedAllReducer from '@app/store/slices/legalEntityDashboard/mainInfo/bankrupt/bankruptedAllSlice';
import BankruptedYearReducer from '@app/store/slices/legalEntityDashboard/mainInfo/bankrupt/bankruptedYearSlice';
import BankruptedQuarterReducer from '@app/store/slices/legalEntityDashboard/mainInfo/bankrupt/bankruptedQuarterSlice';
import BankruptedCalculatePercentReducer from '@app/store/slices/legalEntityDashboard/mainInfo/bankrupt/bankruptedPercentSlice';

export const bankruptedMainInfo = combineReducers({
  bankruptedAll: BankruptedAllReducer,
  bankruptedYear: BankruptedYearReducer,
  bankruptedQuarter: BankruptedQuarterReducer,
  bankruptedPercent: BankruptedCalculatePercentReducer,
});

export default bankruptedMainInfo;
