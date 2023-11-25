import { combineReducers } from '@reduxjs/toolkit';
import typeActivitiesCheckedAllReducer from '@app/store/slices/legalEntityDashboard/typeActivities/checked/typeActivitiesCheckedAll';
import typeActivitiesCheckedYearReducer from '@app/store/slices/legalEntityDashboard/typeActivities/checked/typeActivitiesCheckedYear';
import typeActivitiesCheckedQuarterReducer from '@app/store/slices/legalEntityDashboard/typeActivities/checked/typeActivitiesCheckedQuarter';
import typeActivitiesCheckedMonthReducer from '@app/store/slices/legalEntityDashboard/typeActivities/checked/typeActivitiesCheckedMonth';

export const typeActivitiesCheckedReducer = combineReducers({
  typeActivitiesCheckedAll: typeActivitiesCheckedAllReducer,
  typeActivitiesCheckedYear: typeActivitiesCheckedYearReducer,
  typeActivitiesCheckedQuarter: typeActivitiesCheckedQuarterReducer,
  typeActivitiesCheckedMonth: typeActivitiesCheckedMonthReducer,
});

export default typeActivitiesCheckedReducer;
