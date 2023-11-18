import { combineReducers } from '@reduxjs/toolkit';
import typeActivitiesSoleTradeAllReducer from '@app/store/slices/soleTradeDashboard/typeActivitiesSoleTrade/typeActivitiesAllSoleTrade';
import typeActivitiesSoleTradeYearReducer from '@app/store/slices/soleTradeDashboard/typeActivitiesSoleTrade/typeActivitiesYearSoleTrade';
import typeActivitiesSoleTradeQuarterReducer from '@app/store/slices/soleTradeDashboard/typeActivitiesSoleTrade/typeActivitiesQuarterSoleTrade';
import typeActivitiesSoleTradeMonthReducer from '@app/store/slices/soleTradeDashboard/typeActivitiesSoleTrade/typeActivitiesMonthSoleTrade';

export const typeActivitiesReducer = combineReducers({
  typeActivitiesSoleTradeAll: typeActivitiesSoleTradeAllReducer,
  typeActivitiesSoleTradeYear: typeActivitiesSoleTradeYearReducer,
  typeActivitiesSoleTradeQuarter: typeActivitiesSoleTradeQuarterReducer,
  typeActivitiesSoleTradeMonth: typeActivitiesSoleTradeMonthReducer,
});

export default typeActivitiesReducer;
