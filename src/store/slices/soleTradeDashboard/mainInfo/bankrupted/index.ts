import { combineReducers } from '@reduxjs/toolkit';
import BankruptedAllSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfo/bankrupted/bankruptedAllSoleTradeSlice';
import BankruptedYearSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfo/bankrupted/bankruptedYearSoleTradeSlice';
import BankruptedQuarterSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfo/bankrupted/bankruptedQuarterSoleTradeSlice';
import BankruptedCalculatePercentSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfo/bankrupted/bankruptedPercentSoleTradeSlice';

export const bankruptedMainInfo = combineReducers({
  bankruptedAllSoleTrade: BankruptedAllSoleTradeReducer,
  bankruptedYearSoleTrade: BankruptedYearSoleTradeReducer,
  bankruptedQuarterSoleTrade: BankruptedQuarterSoleTradeReducer,
  bankruptedPercentSoleTrade: BankruptedCalculatePercentSoleTradeReducer,
});

export default bankruptedMainInfo;
