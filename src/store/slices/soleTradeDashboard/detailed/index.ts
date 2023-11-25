import { combineReducers } from '@reduxjs/toolkit';
import detailedSoleTradeReducer from '@app/store/slices/soleTradeDashboard/detailed/current/detailedInformationSoleTradeSlice';
import liquidatedDetailedSoleTradeReducer from '@app/store/slices/soleTradeDashboard/detailed/liquidated/liuquidatedDetailedSoleTradeSlice';
import bankruptedDetailedSoleTradeReducer from '@app/store/slices/soleTradeDashboard/detailed/bankrupted/bankruptedDetailedSoleTradeSlice';
import checkedDetailedSoleTradeReducer from '@app/store/slices/soleTradeDashboard/detailed/checked/checkedDetailedSoleTradeSlice';

export const detailedInformationSoleTrade = combineReducers({
  detailedSoleTrade: detailedSoleTradeReducer,
  liquidatedDetailedSoleTrade: liquidatedDetailedSoleTradeReducer,
  bankruptedDetailedSoleTrade: bankruptedDetailedSoleTradeReducer,
  checkedDetailedSoleTrade: checkedDetailedSoleTradeReducer,
});

export default detailedInformationSoleTrade;
