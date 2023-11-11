import { combineReducers } from '@reduxjs/toolkit';
import typeActivitiesSoleTradeAllReducer from '@app/store/slices/soleTradeDashboard/typeActivitiesSoleTrade/typeSoleTradeActivitiesAll';
import typeActivitiesSoleTradeYearReducer from '@app/store/slices/soleTradeDashboard/typeActivitiesSoleTrade/typeSoleTradeActivitiesYear';
import typeActivitiesSoleTradeQuarterReducer from '@app/store/slices/soleTradeDashboard/typeActivitiesSoleTrade/typeSoleTradeActivitiesQuarter';
import typeActivitiesSoleTradeMonthReducer from '@app/store/slices/soleTradeDashboard/typeActivitiesSoleTrade/typeSoleTradeActivitiesMonth';

export const typeActivitiesReducer = combineReducers({
  typeActivitiesSoleTradeAll: typeActivitiesSoleTradeAllReducer,
  typeActivitiesSoleTradeYear: typeActivitiesSoleTradeYearReducer,
  typeActivitiesSoleTradeQuarter: typeActivitiesSoleTradeQuarterReducer,
  typeActivitiesSoleTradeMonth: typeActivitiesSoleTradeMonthReducer,
});

export default typeActivitiesReducer;
