import { RootState } from '@app/store/store';

export enum LEVEL_COMPETITION {
  LEGAL_ENTITY,
  SOLE_TRADE,
}

export const getStateForLevelCompetition = (state: RootState, level_competition: LEVEL_COMPETITION) => {
  switch (level_competition) {
    case LEVEL_COMPETITION.LEGAL_ENTITY:
      return state.levelCompetition;

    case LEVEL_COMPETITION.SOLE_TRADE:
      return state.levelCompetitionSoleTrade;
  }
};
