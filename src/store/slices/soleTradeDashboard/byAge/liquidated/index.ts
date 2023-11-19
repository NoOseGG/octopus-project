import { combineReducers } from '@reduxjs/toolkit';
import LiquidatedMoreThen20SoleTradeReducer from '@app/store/slices/soleTradeDashboard/byAge/liquidated/LiquidatedMoreThen20SoleTradelice';
import LiquidatedFrom10To20SoleTradeReducer from '@app/store/slices/soleTradeDashboard/byAge/liquidated/LiquidatedFrom10To20SoleTradeSlice';
import LiquidatedFrom5To10SoleTradeReducer from '@app/store/slices/soleTradeDashboard/byAge/liquidated/LiquidatedFrom5To10SoleTradeSlice';
import LiquidatedLessThen1SoleTradeReducer from '@app/store/slices/soleTradeDashboard/byAge/liquidated/LiquidatedLessThen1SoleTradeSlice';
import LiquidatedFrom1To5SoleTradeSlice from '@app/store/slices/soleTradeDashboard/byAge/liquidated/LiquidatedFrom1To5SoleTradeSlice';
import LiquidatedAvgAgeSoleTradeReducer from '@app/store/slices/soleTradeDashboard/byAge/liquidated/LiquidatedAvgAgeSoleTradeSlice';

export const liquidateByAgeSoleTradeReducer = combineReducers({
  liquidateMoreThen20SoleTrade: LiquidatedMoreThen20SoleTradeReducer,
  liquidateFrom10To20SoleTrade: LiquidatedFrom10To20SoleTradeReducer,
  liquidateFrom5To10SoleTrade: LiquidatedFrom5To10SoleTradeReducer,
  liquidateFrom1To5SoleTrade: LiquidatedLessThen1SoleTradeReducer,
  liquidateLessThen1SoleTrade: LiquidatedFrom1To5SoleTradeSlice,
  liquidateAvgAgeSoleTrade: LiquidatedAvgAgeSoleTradeReducer,
});

export default liquidateByAgeSoleTradeReducer;
