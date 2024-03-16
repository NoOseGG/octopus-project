import { RootState } from '@app/store/store';

export type CountCheckedProps = {
  countChecked: COUNT_CHECKED_TYPE;
};

export enum COUNT_CHECKED_TYPE {
  LE_CHECKED_ALL,
  LE_CHECKED_LIQUIDATED,
  LE_CHECKED_BANKRUPTED,

  ST_CHECKED_ALL,
  ST_CHECKED_LIQUIDATED,
  ST_CHECKED_BANKRUPTED,
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getStateForCountChecked = (state: RootState, countChecked: COUNT_CHECKED_TYPE) => {
  switch (countChecked) {
    case COUNT_CHECKED_TYPE.LE_CHECKED_ALL:
      return state.checkedMainInfo.checkedAll;
    case COUNT_CHECKED_TYPE.LE_CHECKED_LIQUIDATED:
      return state.checkedMainInfo.checkedLiquidated;
    case COUNT_CHECKED_TYPE.LE_CHECKED_BANKRUPTED:
      return state.checkedMainInfo.checkedBankrupted;

    // Sole Trade

    case COUNT_CHECKED_TYPE.ST_CHECKED_ALL:
      return state.checkedMainInfoSoleTrade.checkedAllSoleTrade;
    case COUNT_CHECKED_TYPE.ST_CHECKED_LIQUIDATED:
      return state.checkedMainInfoSoleTrade.checkedLiquidatedSoleTrade;
    case COUNT_CHECKED_TYPE.ST_CHECKED_BANKRUPTED:
      return state.checkedMainInfoSoleTrade.checkedBankruptedSoleTrade;
  }
};

export const getTitleForCountChecked = (countYear: COUNT_CHECKED_TYPE): string => {
  switch (countYear) {
    case COUNT_CHECKED_TYPE.LE_CHECKED_ALL:
      return 'Общее количество проверок компаний';
    case COUNT_CHECKED_TYPE.LE_CHECKED_LIQUIDATED:
      return 'Количество проверок компаний, которые на данный момент ликвидированы';
    case COUNT_CHECKED_TYPE.LE_CHECKED_BANKRUPTED:
      return 'Количество проверок компаний, которые на данный момент обанкрочены';

    // Sole Trade

    case COUNT_CHECKED_TYPE.ST_CHECKED_ALL:
      return 'Общее количество проверок ИП';
    case COUNT_CHECKED_TYPE.ST_CHECKED_LIQUIDATED:
      return 'Количество проверок ИП, которые на данный момент ликвидированы';
    case COUNT_CHECKED_TYPE.ST_CHECKED_BANKRUPTED:
      return 'Количество проверок ИП, которые на данный момент обанкрочены';

    default:
      return '';
  }
};
