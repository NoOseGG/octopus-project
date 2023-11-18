import { RootState } from '@app/store/store';

export type DetailedProps = {
  detailed: DETAILED_TYPE;
};

export enum DETAILED_TYPE {
  LEGAl_ENTITY_CREATED,
  LEGAl_ENTITY_LIQUIDATED,
  LEGAl_ENTITY_BANKRUPTED,
  LEGAl_ENTITY_CHECKED,
  SOLE_TRADE_CREATED,
  SOLE_TRADE_LIQUIDATED,
  SOLE_TRADE_BANKRUPTED,
  SOLE_TRADE_CHECKED,
}

export const getStateForDetailed = (state: RootState, detailed: DETAILED_TYPE) => {
  switch (detailed) {
    case DETAILED_TYPE.LEGAl_ENTITY_CREATED:
      return state.detailedInformationCompany;
    case DETAILED_TYPE.SOLE_TRADE_CREATED:
      return state.detailedInformationCompanySoleTrade;
  }
};

export const getTitleForDetailed = (detailed: DETAILED_TYPE): string => {
  switch (detailed) {
    case DETAILED_TYPE.LEGAl_ENTITY_CREATED:
      return 'Детализированая информация о регистрации компаний';
    case DETAILED_TYPE.SOLE_TRADE_CREATED:
      return 'Детализированая информация о регистрации ИП';
    default:
      return 'default';
  }
};
