import { combineReducers } from '@reduxjs/toolkit';
import checkedAllSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfo/checked/checkedAllSoleTradeSlice';
import checkedLiquidatedSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfo/checked/checkedLiquidatedSoleTradeSlice';
import checkedBankruptedSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfo/checked/checkedBankruptedSoleTradeSlice';

export const checkedMainInfoSoleTrade = combineReducers({
  checkedAllSoleTrade: checkedAllSoleTradeReducer,
  checkedLiquidatedSoleTrade: checkedLiquidatedSoleTradeReducer,
  checkedBankruptedSoleTrade: checkedBankruptedSoleTradeReducer,
});

export default checkedMainInfoSoleTrade;
