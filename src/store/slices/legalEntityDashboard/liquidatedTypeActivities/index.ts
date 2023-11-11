import { combineReducers } from '@reduxjs/toolkit';
import typeActivitiesLiquidatedAllReducer from '@app/store/slices/legalEntityDashboard/liquidatedTypeActivities/typeActivitiesLiuaidatedAll';
import typeActivitiesLiquidatedYearReducer from '@app/store/slices/legalEntityDashboard/liquidatedTypeActivities/typeActivitiesLiquidatedYear';
import typeActivitiesLiquidatedQuarterReducer from '@app/store/slices/legalEntityDashboard/liquidatedTypeActivities/typeActivitiesLiquidatedQuarter';
import typeActivitiesLiquidatedMonthReducer from '@app/store/slices/legalEntityDashboard/liquidatedTypeActivities/typeActivitiesLiquidatedMonth';

export const typeActivitiesReducer = combineReducers({
  typeActivitiesLiquidatedAll: typeActivitiesLiquidatedAllReducer,
  typeActivitiesLiquidatedYear: typeActivitiesLiquidatedYearReducer,
  typeActivitiesLiquidatedQuarter: typeActivitiesLiquidatedQuarterReducer,
  typeActivitiesLiquidatedMonth: typeActivitiesLiquidatedMonthReducer,
});

export default typeActivitiesReducer;
