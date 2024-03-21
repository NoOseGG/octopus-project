import { RootState } from '@app/store/store';

export enum JUMP_TYPE {
  LEGAL_ENTITY,
  SOLE_TRADE,
}

export const getStateForJumpSettlement = (state: RootState, jump: JUMP_TYPE) => {
  switch (jump) {
    case JUMP_TYPE.LEGAL_ENTITY:
      return state.jump.jumpSettlement;

    case JUMP_TYPE.SOLE_TRADE:
      return state.jump.jumpSettlement;
  }
};

export const getStateForJumpTypeActivity = (state: RootState, jump: JUMP_TYPE) => {
  switch (jump) {
    case JUMP_TYPE.LEGAL_ENTITY:
      return state.jump.jumpTypeActivity;

    case JUMP_TYPE.SOLE_TRADE:
      return state.jump.jumpTypeActivity;
  }
};
