import { RootState } from '@app/store/store';

export type AgeProps = {
  age: AGE_TYPES;
};

export enum AGE_TYPES {
  LE_CURRENT_MORE_THEN_20,
  LE_CURRENT_FROM_10_TO_20,
  LE_CURRENT_FROM_5_TO_10,
  LE_CURRENT_FROM_1_TO_5,
  LE_CURRENT_LESS_THEN_1,

  LE_LIQUIDATED_MORE_THEN_20,
  LE_LIQUIDATED_FROM_10_TO_20,
  LE_LIQUIDATED_FROM_5_TO_10,
  LE_LIQUIDATED_FROM_1_TO_5,
  LE_LIQUIDATED_LESS_THEN_1,

  LE_BANKRUPTED_MORE_THEN_20,
  LE_BANKRUPTED_FROM_10_TO_20,
  LE_BANKRUPTED_FROM_5_TO_10,
  LE_BANKRUPTED_FROM_1_TO_5,
  LE_BANKRUPTED_LESS_THEN_1,

  // Sole Trade

  ST_CURRENT_MORE_THEN_20,
  ST_CURRENT_FROM_10_TO_20,
  ST_CURRENT_FROM_5_TO_10,
  ST_CURRENT_FROM_1_TO_5,
  ST_CURRENT_LESS_THEN_1,

  ST_LIQUIDATED_MORE_THEN_20,
  ST_LIQUIDATED_FROM_10_TO_20,
  ST_LIQUIDATED_FROM_5_TO_10,
  ST_LIQUIDATED_FROM_1_TO_5,
  ST_LIQUIDATED_LESS_THEN_1,

  ST_BANKRUPTED_MORE_THEN_20,
  ST_BANKRUPTED_FROM_10_TO_20,
  ST_BANKRUPTED_FROM_5_TO_10,
  ST_BANKRUPTED_FROM_1_TO_5,
  ST_BANKRUPTED_LESS_THEN_1,
}

export const getStateForAge = (state: RootState, countCompany: AGE_TYPES) => {
  switch (countCompany) {
    case AGE_TYPES.LE_CURRENT_MORE_THEN_20:
      return state.currentByAge.moreThen20;
    case AGE_TYPES.LE_CURRENT_FROM_10_TO_20:
      return state.currentByAge.from10To20;
    case AGE_TYPES.LE_CURRENT_FROM_5_TO_10:
      return state.currentByAge.from5To10;
    case AGE_TYPES.LE_CURRENT_FROM_1_TO_5:
      return state.currentByAge.from1To5;
    case AGE_TYPES.LE_CURRENT_LESS_THEN_1:
      return state.currentByAge.lessThen1;

    case AGE_TYPES.LE_LIQUIDATED_MORE_THEN_20:
      return state.liquidatedByAge.liquidateMoreThen20;
    case AGE_TYPES.LE_LIQUIDATED_FROM_10_TO_20:
      return state.liquidatedByAge.liquidateFrom10To20;
    case AGE_TYPES.LE_LIQUIDATED_FROM_5_TO_10:
      return state.liquidatedByAge.liquidateFrom5To10;
    case AGE_TYPES.LE_LIQUIDATED_FROM_1_TO_5:
      return state.liquidatedByAge.liquidateFrom1To5;
    case AGE_TYPES.LE_LIQUIDATED_LESS_THEN_1:
      return state.liquidatedByAge.liquidateLessThen1;

    case AGE_TYPES.LE_BANKRUPTED_MORE_THEN_20:
      return state.bankruptedByAge.liquidateMoreThen20;
    case AGE_TYPES.LE_BANKRUPTED_FROM_10_TO_20:
      return state.bankruptedByAge.liquidateFrom10To20;
    case AGE_TYPES.LE_BANKRUPTED_FROM_5_TO_10:
      return state.bankruptedByAge.liquidateFrom5To10;
    case AGE_TYPES.LE_BANKRUPTED_FROM_1_TO_5:
      return state.bankruptedByAge.liquidateFrom1To5;
    case AGE_TYPES.LE_BANKRUPTED_LESS_THEN_1:
      return state.bankruptedByAge.liquidateLessThen1;

    // Sole Trade

    case AGE_TYPES.ST_CURRENT_MORE_THEN_20:
      return state.currentByAgeSoleTrade.moreThen20SoleTrade;
    case AGE_TYPES.ST_CURRENT_FROM_10_TO_20:
      return state.currentByAgeSoleTrade.moreThen20SoleTrade;
    case AGE_TYPES.ST_CURRENT_FROM_5_TO_10:
      return state.currentByAgeSoleTrade.moreThen20SoleTrade;
    case AGE_TYPES.ST_CURRENT_FROM_1_TO_5:
      return state.currentByAgeSoleTrade.moreThen20SoleTrade;
    case AGE_TYPES.ST_CURRENT_LESS_THEN_1:
      return state.currentByAgeSoleTrade.moreThen20SoleTrade;

    case AGE_TYPES.ST_LIQUIDATED_MORE_THEN_20:
      return state.liquidatedByAgeSoleTrade.liquidateMoreThen20SoleTrade;
    case AGE_TYPES.ST_LIQUIDATED_FROM_10_TO_20:
      return state.liquidatedByAgeSoleTrade.liquidateFrom10To20SoleTrade;
    case AGE_TYPES.ST_LIQUIDATED_FROM_5_TO_10:
      return state.liquidatedByAgeSoleTrade.liquidateFrom5To10SoleTrade;
    case AGE_TYPES.ST_LIQUIDATED_FROM_1_TO_5:
      return state.liquidatedByAgeSoleTrade.liquidateFrom1To5SoleTrade;
    case AGE_TYPES.ST_LIQUIDATED_LESS_THEN_1:
      return state.liquidatedByAgeSoleTrade.liquidateLessThen1SoleTrade;

    case AGE_TYPES.ST_BANKRUPTED_MORE_THEN_20:
      return state.bankruptedByAgeSoleTrade.bankruptedMoreThen20SoleTrade;
    case AGE_TYPES.ST_BANKRUPTED_FROM_10_TO_20:
      return state.bankruptedByAgeSoleTrade.bankruptedFrom10To20SoleTrade;
    case AGE_TYPES.ST_BANKRUPTED_FROM_5_TO_10:
      return state.bankruptedByAgeSoleTrade.bankruptedFrom5To10SoleTrade;
    case AGE_TYPES.ST_BANKRUPTED_FROM_1_TO_5:
      return state.bankruptedByAgeSoleTrade.bankruptedFrom1To5SoleTrade;
    case AGE_TYPES.ST_BANKRUPTED_LESS_THEN_1:
      return state.bankruptedByAgeSoleTrade.bankruptedLessThen1SoleTrade;
  }
};

export const getTitleForAge = (age: AGE_TYPES): string => {
  switch (age) {
    case AGE_TYPES.LE_CURRENT_MORE_THEN_20:
    case AGE_TYPES.LE_LIQUIDATED_MORE_THEN_20:
    case AGE_TYPES.LE_BANKRUPTED_MORE_THEN_20:
    case AGE_TYPES.ST_CURRENT_MORE_THEN_20:
    case AGE_TYPES.ST_LIQUIDATED_MORE_THEN_20:
    case AGE_TYPES.ST_BANKRUPTED_MORE_THEN_20:
      return '20 лет и более';
    case AGE_TYPES.LE_CURRENT_FROM_10_TO_20:
    case AGE_TYPES.LE_LIQUIDATED_FROM_10_TO_20:
    case AGE_TYPES.LE_BANKRUPTED_FROM_10_TO_20:
    case AGE_TYPES.ST_CURRENT_FROM_10_TO_20:
    case AGE_TYPES.ST_LIQUIDATED_FROM_10_TO_20:
    case AGE_TYPES.ST_BANKRUPTED_FROM_10_TO_20:
      return 'от 10 до 20 лет';
    case AGE_TYPES.LE_CURRENT_FROM_5_TO_10:
    case AGE_TYPES.LE_LIQUIDATED_FROM_5_TO_10:
    case AGE_TYPES.LE_BANKRUPTED_FROM_5_TO_10:
    case AGE_TYPES.ST_CURRENT_FROM_5_TO_10:
    case AGE_TYPES.ST_LIQUIDATED_FROM_5_TO_10:
    case AGE_TYPES.ST_BANKRUPTED_FROM_5_TO_10:
      return 'от 5 до 10 лет';
    case AGE_TYPES.LE_CURRENT_FROM_1_TO_5:
    case AGE_TYPES.LE_LIQUIDATED_FROM_1_TO_5:
    case AGE_TYPES.LE_BANKRUPTED_FROM_1_TO_5:
    case AGE_TYPES.ST_CURRENT_FROM_1_TO_5:
    case AGE_TYPES.ST_LIQUIDATED_FROM_1_TO_5:
    case AGE_TYPES.ST_BANKRUPTED_FROM_1_TO_5:
      return 'от 1 до 5 лет';
    case AGE_TYPES.LE_CURRENT_LESS_THEN_1:
    case AGE_TYPES.LE_LIQUIDATED_LESS_THEN_1:
    case AGE_TYPES.LE_BANKRUPTED_LESS_THEN_1:
    case AGE_TYPES.ST_CURRENT_LESS_THEN_1:
    case AGE_TYPES.ST_LIQUIDATED_LESS_THEN_1:
    case AGE_TYPES.ST_BANKRUPTED_LESS_THEN_1:
      return 'менее года';
  }
};
