import { combineReducers } from '@reduxjs/toolkit';
import detailedReducer from '@app/store/slices/legalEntityDashboard/detailed/current/detailedSlice';
import liquidatedDetailedReducer from '@app/store/slices/legalEntityDashboard/detailed/liquidated/liuquidatedDetailedSlice';
import bankruptedDetailedReducer from '@app/store/slices/legalEntityDashboard/detailed/bankrupted/bankruptedDetailedSlice';
import checkedDetailedReducer from '@app/store/slices/legalEntityDashboard/detailed/checked/checkedDetailedSlice';

export const detailedInformation = combineReducers({
  detailed: detailedReducer,
  liquidatedDetailed: liquidatedDetailedReducer,
  bankruptedDetailed: bankruptedDetailedReducer,
  checkedDetailed: checkedDetailedReducer,
});

export default detailedInformation;
