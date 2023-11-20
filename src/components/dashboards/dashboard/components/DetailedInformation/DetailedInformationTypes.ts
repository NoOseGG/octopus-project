import { RootState } from '@app/store/store';

export type DetailedProps = {
  detailed: DETAILED_TYPE;
};

export enum DETAILED_TYPE {
  LE_CREATED,
  LE_LIQUIDATED,
  LE_BANKRUPTED,
  LE_CHECKED,
  ST_CREATED,
  ST_LIQUIDATED,
  ST_BANKRUPTED,
  ST_CHECKED,
}

export const getStateForDetailed = (state: RootState, detailed: DETAILED_TYPE) => {
  switch (detailed) {
    case DETAILED_TYPE.LE_CREATED:
      return state.detailedInformation.detailed;
    case DETAILED_TYPE.LE_LIQUIDATED:
      return state.detailedInformation.liquidatedDetailed;

    case DETAILED_TYPE.ST_CREATED:
      return state.detailedInformationCompanySoleTrade;
  }
};

export const getTitleForDetailed = (detailed: DETAILED_TYPE): string => {
  switch (detailed) {
    case DETAILED_TYPE.LE_CREATED:
      return 'Детализированая информация о регистрации компаний';
    case DETAILED_TYPE.LE_LIQUIDATED:
      return 'Детализированая информация о ликвидированных компаниях';
    case DETAILED_TYPE.ST_CREATED:
      return 'Детализированая информация о регистрации ИП';
    default:
      return 'default';
  }
};
