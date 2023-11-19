import { combineReducers } from '@reduxjs/toolkit';
import CreatedAllSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfo/created/createdSoleTradeAllSlice';
import CreatedYearSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfo/created/createdSoleTradeYearSlice';
import CreatedQuarterSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfo/created/createdSoleTradeQuarterSlice';
import CreatedOperatingSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfo/created/createdSoleTradeOperatingSlice';
import CalculatePercentSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfo/created/calculateSoleTradePercentSlice';

export const mainInfoReducer = combineReducers({
  createdAllSoleTrade: CreatedAllSoleTradeReducer,
  createdYearSoleTrade: CreatedYearSoleTradeReducer,
  createdQuarterSoleTrade: CreatedQuarterSoleTradeReducer,
  createdOperatingSoleTrade: CreatedOperatingSoleTradeReducer,
  calculatePercentSoleTrade: CalculatePercentSoleTradeReducer,
});

export default mainInfoReducer;
