import { combineReducers } from '@reduxjs/toolkit';
import BankruptedMoreThen20SoleTradeReducer from '@app/store/slices/soleTradeDashboard/byAge/bankrupted/bankruptedMoreThen20SoleTradelice';
import BankruptedFrom10To20SoleTradeReducer from '@app/store/slices/soleTradeDashboard/byAge/liquidated/LiquidatedFrom10To20SoleTradeSlice';
import BankruptedFrom5To10SoleTradeReducer from '@app/store/slices/soleTradeDashboard/byAge/liquidated/LiquidatedFrom5To10SoleTradeSlice';
import BankruptedLessThen1SoleTradeReducer from '@app/store/slices/soleTradeDashboard/byAge/liquidated/LiquidatedLessThen1SoleTradeSlice';
import BankruptedFrom1To5SoleTradeSlice from '@app/store/slices/soleTradeDashboard/byAge/liquidated/LiquidatedFrom1To5SoleTradeSlice';
import BankruptedAvgAgeSoleTradeReducer from '@app/store/slices/soleTradeDashboard/byAge/liquidated/LiquidatedAvgAgeSoleTradeSlice';

export const bankruptedByAgeSoleTradeReducer = combineReducers({
  bankruptedMoreThen20SoleTrade: BankruptedMoreThen20SoleTradeReducer,
  bankruptedFrom10To20SoleTrade: BankruptedFrom10To20SoleTradeReducer,
  bankruptedFrom5To10SoleTrade: BankruptedFrom5To10SoleTradeReducer,
  bankruptedFrom1To5SoleTrade: BankruptedLessThen1SoleTradeReducer,
  bankruptedLessThen1SoleTrade: BankruptedFrom1To5SoleTradeSlice,
  bankruptedAvgAgeSoleTrade: BankruptedAvgAgeSoleTradeReducer,
});

export default bankruptedByAgeSoleTradeReducer;
