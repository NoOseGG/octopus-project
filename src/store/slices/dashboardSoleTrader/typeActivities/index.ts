import { combineReducers } from '@reduxjs/toolkit';
import typeActivitiesAllSoleTradeReducer from '@app/store/slices/dashboardSoleTrader/typeActivities/typeActivitiesAllSoleTrade';
import typeActivitiesYearSoleTradeReducer from '@app/store/slices/dashboardSoleTrader/typeActivities/typeActivitiesYearSoleTrade';
import typeActivitiesQuarterSoleTradeReducer from '@app/store/slices/dashboardSoleTrader/typeActivities/typeActivitiesQuarterSoleTrade';
import typeActivitiesMonthSoleTradeReducer from '@app/store/slices/dashboardSoleTrader/typeActivities/typeActivitiesMonthSoleTrade';

export const typeActivitiesSoleTradeReducer = combineReducers({
  typeActivitiesAll: typeActivitiesAllSoleTradeReducer,
  typeActivitiesYear: typeActivitiesYearSoleTradeReducer,
  typeActivitiesQuarter: typeActivitiesQuarterSoleTradeReducer,
  typeActivitiesMonth: typeActivitiesMonthSoleTradeReducer,
});
