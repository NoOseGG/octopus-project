import { combineReducers } from '@reduxjs/toolkit';
import countYearCompetitorsReducer from './countYearCompetitors';
import countAllCompetitorsReducer from './countAllCompetitors';

const competitors = combineReducers({
  countYearCompetitors: countYearCompetitorsReducer,
  countAllCompetitors: countAllCompetitorsReducer,
});

export default competitors;
