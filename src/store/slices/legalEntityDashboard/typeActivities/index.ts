import { combineReducers } from '@reduxjs/toolkit';
import typeActivitiesAllReducer from '@app/store/slices/legalEntityDashboard/typeActivities/typeActivitiesAll';
import typeActivitiesYearReducer from '@app/store/slices/legalEntityDashboard/typeActivities/typeActivitiesYear';
import typeActivitiesQuarterReducer from '@app/store/slices/legalEntityDashboard/typeActivities/typeActivitiesQuarter';
import typeActivitiesMonthReducer from '@app/store/slices/legalEntityDashboard/typeActivities/typeActivitiesMonth';

export const typeActivitiesReducer = combineReducers({
  typeActivitiesAll: typeActivitiesAllReducer,
  typeActivitiesYear: typeActivitiesYearReducer,
  typeActivitiesQuarter: typeActivitiesQuarterReducer,
  typeActivitiesMonth: typeActivitiesMonthReducer,
});
