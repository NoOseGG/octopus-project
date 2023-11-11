import { combineReducers } from '@reduxjs/toolkit';
import MoreThen20SoleTradeReducer from '@app/store/slices/soleTradeDashboard/currentByAgeSoleTrade/moreThen20SoleTradeSlice';
import From10To20SoleTradeReducer from '@app/store/slices/soleTradeDashboard/currentByAgeSoleTrade/from10To20SoleTradeSlice';
import From5To10SoleTradeReducer from '@app/store/slices/soleTradeDashboard/currentByAgeSoleTrade/from5To10SoleTradeSlice';
import LessThen1SoleTradeReducer from '@app/store/slices/soleTradeDashboard/currentByAgeSoleTrade/lessThen1SoleTradeSlice';
import From1To5SoleTradeReducer from '@app/store/slices/soleTradeDashboard/currentByAgeSoleTrade/from1To5SoleTradeSlice';
import AvgAgeSoleTradeReducer from '@app/store/slices/soleTradeDashboard/currentByAgeSoleTrade/avgAgeSoleTradeSlice';

export const currentByAgeReducer = combineReducers({
  moreThen20SoleTrade: MoreThen20SoleTradeReducer,
  from10To20SoleTrade: From10To20SoleTradeReducer,
  from5To10SoleTrade: From5To10SoleTradeReducer,
  from1To5SoleTrade: From1To5SoleTradeReducer,
  lessThen1SoleTrade: LessThen1SoleTradeReducer,
  avgAgeSoleTrade: AvgAgeSoleTradeReducer,
});

export default currentByAgeReducer;
