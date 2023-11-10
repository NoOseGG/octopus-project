import { combineReducers } from '@reduxjs/toolkit';
import CreatedAllReducer from '@app/store/slices/legalEntityDashboard/mainInfo/createdAllSlice';
import CreatedYearReducer from '@app/store/slices/legalEntityDashboard/mainInfo/createdYearSlice';
import CreatedQuarterReducer from '@app/store/slices/legalEntityDashboard/mainInfo/createdQuarterSlice';
import CreatedOperatingReducer from '@app/store/slices/legalEntityDashboard/mainInfo/createdOperatingSlice';
import CalculatePercentReducer from '@app/store/slices/legalEntityDashboard/mainInfo/calculatePercentSlice';

export const mainInfoReducer = combineReducers({
  createdAll: CreatedAllReducer,
  createdYear: CreatedYearReducer,
  createdQuarter: CreatedQuarterReducer,
  createdOperating: CreatedOperatingReducer,
  calculatePercent: CalculatePercentReducer,
});

export default mainInfoReducer;
