import { combineReducers } from '@reduxjs/toolkit';
import typeActivitiesAllReducer from '@app/store/slices/legalEntityDashboard/typeActivities/current/typeActivitiesAll';
import typeActivitiesYearReducer from '@app/store/slices/legalEntityDashboard/typeActivities/current/typeActivitiesYear';
import typeActivitiesQuarterReducer from '@app/store/slices/legalEntityDashboard/typeActivities/current/typeActivitiesQuarter';
import typeActivitiesMonthReducer from '@app/store/slices/legalEntityDashboard/typeActivities/current/typeActivitiesMonth';

export const typeActivitiesReducer = combineReducers({
  typeActivitiesAll: typeActivitiesAllReducer,
  typeActivitiesYear: typeActivitiesYearReducer,
  typeActivitiesQuarter: typeActivitiesQuarterReducer,
  typeActivitiesMonth: typeActivitiesMonthReducer,
});

export default typeActivitiesReducer;
