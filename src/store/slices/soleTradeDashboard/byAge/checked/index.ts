import { combineReducers } from '@reduxjs/toolkit';
import checkedAvgAgeSoleTradeReducer from '@app/store/slices/soleTradeDashboard/byAge/checked/checkedAvgAgeSoleTradeSlice';

export const checkedCurrentByAgeSoleTradeReducer = combineReducers({
  checkedAvgAgeSoleTrade: checkedAvgAgeSoleTradeReducer,
});

export default checkedCurrentByAgeSoleTradeReducer;
