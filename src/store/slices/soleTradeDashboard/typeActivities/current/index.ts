import { combineReducers } from '@reduxjs/toolkit';
import typeActivitiesSoleTradeAllReducer from '@app/store/slices/soleTradeDashboard/typeActivities/current/typeActivitiesAllSoleTrade';
import typeActivitiesSoleTradeYearReducer from '@app/store/slices/soleTradeDashboard/typeActivities/current/typeActivitiesYearSoleTrade';
import typeActivitiesSoleTradeQuarterReducer from '@app/store/slices/soleTradeDashboard/typeActivities/current/typeActivitiesQuarterSoleTrade';
import typeActivitiesSoleTradeMonthReducer from '@app/store/slices/soleTradeDashboard/typeActivities/current/typeActivitiesMonthSoleTrade';

export const typeActivitiesReducer = combineReducers({
  typeActivitiesSoleTradeAll: typeActivitiesSoleTradeAllReducer,
  typeActivitiesSoleTradeYear: typeActivitiesSoleTradeYearReducer,
  typeActivitiesSoleTradeQuarter: typeActivitiesSoleTradeQuarterReducer,
  typeActivitiesSoleTradeMonth: typeActivitiesSoleTradeMonthReducer,
});

export default typeActivitiesReducer;
