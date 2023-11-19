import { RootState } from '@app/store/store';

export type CountYearProps = {
  countYear: COUNT_YEAR_TYPE;
  percentYear: PERCENT_TYPE;
};

export enum COUNT_YEAR_TYPE {
  LE_CREATED_YEAR,
  LE_LIQUIDATED_YEAR,
  ST_CREATED_YEAR,
  ST_LIQUIDATE_YEAR,
}

export const getStateForCountYear = (state: RootState, countYear: COUNT_YEAR_TYPE) => {
  switch (countYear) {
    case COUNT_YEAR_TYPE.LE_CREATED_YEAR:
      return state.mainInfo.createdYear;
    case COUNT_YEAR_TYPE.LE_LIQUIDATED_YEAR:
      return state.liquidatedMainInfo.liquidatedYear;

    case COUNT_YEAR_TYPE.ST_CREATED_YEAR:
      return state.mainInfoSoleTrade.createdYearSoleTrade;
    case COUNT_YEAR_TYPE.ST_LIQUIDATE_YEAR:
      return state.liquidatedMainInfoSoleTrade.liquidatedYearSoleTrade;
  }
};

export const getTitleForCountYear = (countYear: COUNT_YEAR_TYPE): string => {
  switch (countYear) {
    case COUNT_YEAR_TYPE.LE_CREATED_YEAR:
      return 'Количество созданных компаний (год)';
    case COUNT_YEAR_TYPE.LE_LIQUIDATED_YEAR:
      return 'Количество ликвидированных компаний (год)';

    case COUNT_YEAR_TYPE.ST_CREATED_YEAR:
      return 'Количество созданных ИП (год)';
    case COUNT_YEAR_TYPE.ST_LIQUIDATE_YEAR:
      return 'Количество ликвидированных ИП (год)';
  }
};

export enum PERCENT_TYPE {
  LE_CREATED_PERCENT,
  LE_LIQUIDATED_PERCENT,
  ST_CREATE_PERCENT,
  ST_LIQUIDATE_PERCENT,
}

export const getStateForPercent = (state: RootState, percent: PERCENT_TYPE) => {
  switch (percent) {
    case PERCENT_TYPE.LE_CREATED_PERCENT:
      return state.mainInfo.calculatePercent;
    case PERCENT_TYPE.LE_LIQUIDATED_PERCENT:
      return state.liquidatedMainInfo.liquidatedPercent;

    case PERCENT_TYPE.ST_CREATE_PERCENT:
      return state.mainInfoSoleTrade.calculatePercentSoleTrade;
    case PERCENT_TYPE.ST_LIQUIDATE_PERCENT:
      return state.liquidatedMainInfoSoleTrade.liquidatedPercentSoleTrade;
  }
};
