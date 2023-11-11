import { combineReducers } from '@reduxjs/toolkit';
import CreatedAllSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfoSoleTrade/createdSoleTradeAllSlice';
import CreatedYearSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfoSoleTrade/createdSoleTradeYearSlice';
import CreatedQuarterSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfoSoleTrade/createdSoleTradeQuarterSlice';
import CreatedOperatingSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfoSoleTrade/createdSoleTradeOperatingSlice';
import CalculatePercentSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfoSoleTrade/calculateSoleTradePercentSlice';

export const mainInfoReducer = combineReducers({
  createdAllSoleTrade: CreatedAllSoleTradeReducer,
  createdYearSoleTrade: CreatedYearSoleTradeReducer,
  createdQuarterSoleTrade: CreatedQuarterSoleTradeReducer,
  createdOperatingSoleTrade: CreatedOperatingSoleTradeReducer,
  calculatePercentSoleTrade: CalculatePercentSoleTradeReducer,
});

export default mainInfoReducer;
