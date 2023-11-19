import { combineReducers } from '@reduxjs/toolkit';
import typeActivitiesLiquidatedAllReducer from '@app/store/slices/legalEntityDashboard/typeActivities/liquidated/typeActivitiesLiuaidatedAll';
import typeActivitiesLiquidatedYearReducer from '@app/store/slices/legalEntityDashboard/typeActivities/liquidated/typeActivitiesLiquidatedYear';
import typeActivitiesLiquidatedQuarterReducer from '@app/store/slices/legalEntityDashboard/typeActivities/liquidated/typeActivitiesLiquidatedQuarter';
import typeActivitiesLiquidatedMonthReducer from '@app/store/slices/legalEntityDashboard/typeActivities/liquidated/typeActivitiesLiquidatedMonth';

export const typeActivitiesReducer = combineReducers({
  typeActivitiesLiquidatedAll: typeActivitiesLiquidatedAllReducer,
  typeActivitiesLiquidatedYear: typeActivitiesLiquidatedYearReducer,
  typeActivitiesLiquidatedQuarter: typeActivitiesLiquidatedQuarterReducer,
  typeActivitiesLiquidatedMonth: typeActivitiesLiquidatedMonthReducer,
});

export default typeActivitiesReducer;
