import { RootState } from '@app/store/store';

export type CountCompanyProps = {
  countCompany: COUNT_TYPE;
};

export enum COUNT_TYPE {
  LE_CREATED_ALL,
  LE_CREATED_QUARTER,
  LE_CREATED_OPERATION,

  LE_LIQUIDATED_ALL,
  LE_LIQUIDATED_QUARTER,

  LE_BANKRUPT_ALL,
  LE_BANKRUPT_QUARTER,

  ST_CREATED_ALL,
  ST_CREATED_QUARTER,
  ST_CREATED_OPERATION,

  ST_LIQUIDATED_ALL,
  ST_LIQUIDATED_QUARTER,

  ST_BANKRUPT_ALL,
  ST_BANKRUPT_QUARTER,

  NONE,
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getStateForCountCompany = (state: RootState, countCompany: COUNT_TYPE) => {
  switch (countCompany) {
    case COUNT_TYPE.LE_CREATED_ALL:
      return state.mainInfo.createdAll;
    case COUNT_TYPE.LE_CREATED_QUARTER:
      return state.mainInfo.createdQuarter;
    case COUNT_TYPE.LE_CREATED_OPERATION:
      return state.mainInfo.createdOperating;

    case COUNT_TYPE.LE_LIQUIDATED_ALL:
      return state.liquidatedMainInfo.liquidatedAll;
    case COUNT_TYPE.LE_LIQUIDATED_QUARTER:
      return state.liquidatedMainInfo.liquidatedQuarter;

    case COUNT_TYPE.LE_BANKRUPT_ALL:
      return state.mainInfoBankrupted.bankruptedAll;
    case COUNT_TYPE.LE_BANKRUPT_QUARTER:
      return state.mainInfoBankrupted.bankruptedQuarter;

    case COUNT_TYPE.ST_CREATED_ALL:
      return state.mainInfoSoleTrade.createdAllSoleTrade;
    case COUNT_TYPE.ST_CREATED_QUARTER:
      return state.mainInfoSoleTrade.createdQuarterSoleTrade;
    case COUNT_TYPE.ST_CREATED_OPERATION:
      return state.mainInfoSoleTrade.createdOperatingSoleTrade;

    case COUNT_TYPE.ST_LIQUIDATED_ALL:
      return state.liquidatedMainInfoSoleTrade.liquidatedAllSoleTrade;
    case COUNT_TYPE.ST_LIQUIDATED_QUARTER:
      return state.liquidatedMainInfoSoleTrade.liquidatedQuarterSoleTrade;

    case COUNT_TYPE.ST_BANKRUPT_ALL:
      return state.mainInfoBankruptedSoleTrade.bankruptedAllSoleTrade;
    case COUNT_TYPE.ST_BANKRUPT_QUARTER:
      return state.mainInfoBankruptedSoleTrade.bankruptedQuarterSoleTrade;
  }
};

export const getTitleForCountCompany = (countCompany: COUNT_TYPE): string => {
  switch (countCompany) {
    case COUNT_TYPE.LE_CREATED_ALL:
      return 'Общее количество созданных компаний';
    case COUNT_TYPE.LE_CREATED_QUARTER:
      return 'Количество созданных компаний (квартал)';
    case COUNT_TYPE.LE_CREATED_OPERATION:
      return 'Действующие компаний';

    case COUNT_TYPE.LE_LIQUIDATED_ALL:
      return 'Общее количество ликвидированных компаний';
    case COUNT_TYPE.LE_LIQUIDATED_QUARTER:
      return 'Количество ликвидированных компаний (квартал)';

    case COUNT_TYPE.LE_BANKRUPT_ALL:
      return 'Общее количество обанкротившихся компаний';
    case COUNT_TYPE.LE_BANKRUPT_QUARTER:
      return 'Количество обанкротившихся компаний (квартал)';

    case COUNT_TYPE.ST_CREATED_ALL:
      return 'Общее количество созданных ИП';
    case COUNT_TYPE.ST_CREATED_QUARTER:
      return 'Количество созданных ИП (квартал)';
    case COUNT_TYPE.ST_CREATED_OPERATION:
      return 'Действующие ИП';

    case COUNT_TYPE.ST_LIQUIDATED_ALL:
      return 'Общее количество ликвидированных ИП';
    case COUNT_TYPE.ST_LIQUIDATED_QUARTER:
      return 'Количество ликвидированных ИП (квартал)';

    case COUNT_TYPE.ST_BANKRUPT_ALL:
      return 'Общее количество обанкротившихся ИП';
    case COUNT_TYPE.ST_BANKRUPT_QUARTER:
      return 'Количество обанкротившихся ИП (квартал)';

    case COUNT_TYPE.NONE:
      return 'Отсутсвует';
  }
};
