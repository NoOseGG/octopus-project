import { combineReducers } from '@reduxjs/toolkit';
import typeActivitiesBankruptedAllReducer from '@app/store/slices/legalEntityDashboard/typeActivities/bankrupted/typeActivitiesBankruptedAll';
import typeActivitiesBankruptedYearReducer from '@app/store/slices/legalEntityDashboard/typeActivities/bankrupted/typeActivitiesBankruptedYear';
import typeActivitiesBankruptedQuarterReducer from '@app/store/slices/legalEntityDashboard/typeActivities/bankrupted/typeActivitiesBankruptedQuarter';
import typeActivitiesBankruptedMonthReducer from '@app/store/slices/legalEntityDashboard/typeActivities/bankrupted/typeActivitiesBankruptedMonth';

export const typeActivitiesBankruptedReducer = combineReducers({
  typeActivitiesBankruptedAll: typeActivitiesBankruptedAllReducer,
  typeActivitiesBankruptedYear: typeActivitiesBankruptedYearReducer,
  typeActivitiesBankruptedQuarter: typeActivitiesBankruptedQuarterReducer,
  typeActivitiesBankruptedMonth: typeActivitiesBankruptedMonthReducer,
});

export default typeActivitiesBankruptedReducer;
