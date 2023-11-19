import { combineReducers } from '@reduxjs/toolkit';
import CreatedAllReducer from '@app/store/slices/legalEntityDashboard/mainInfo/created/createdAllSlice';
import CreatedYearReducer from '@app/store/slices/legalEntityDashboard/mainInfo/created/createdYearSlice';
import CreatedQuarterReducer from '@app/store/slices/legalEntityDashboard/mainInfo/created/createdQuarterSlice';
import CreatedOperatingReducer from '@app/store/slices/legalEntityDashboard/mainInfo/created/createdOperatingSlice';
import CalculatePercentReducer from '@app/store/slices/legalEntityDashboard/mainInfo/created/createdPercentSlice';

export const mainInfoReducer = combineReducers({
  createdAll: CreatedAllReducer,
  createdYear: CreatedYearReducer,
  createdQuarter: CreatedQuarterReducer,
  createdOperating: CreatedOperatingReducer,
  calculatePercent: CalculatePercentReducer,
});

export default mainInfoReducer;
