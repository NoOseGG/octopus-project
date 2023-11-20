import { combineReducers } from '@reduxjs/toolkit';
import detailedReducer from '@app/store/slices/legalEntityDashboard/detailed/current/detailedSlice';
import liquidatedDetailedReducer from '@app/store/slices/legalEntityDashboard/detailed/liquidated/liuquidatedDetailedSlice';

export const detailedInformation = combineReducers({
  detailed: detailedReducer,
  liquidatedDetailed: liquidatedDetailedReducer,
});

export default detailedInformation;
