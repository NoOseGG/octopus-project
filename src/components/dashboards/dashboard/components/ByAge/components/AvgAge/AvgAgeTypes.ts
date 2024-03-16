import { RootState } from '@app/store/store';

export type AvgAgeProps = {
  avgAge: AVG_AGE_TYPES;
};

export enum AVG_AGE_TYPES {
  LE_CURRENT,
  LE_CHECKED,
  ST_CURRENT,
  ST_CHECKED,
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getStateForAvgAge = (state: RootState, avgAge: AVG_AGE_TYPES) => {
  switch (avgAge) {
    case AVG_AGE_TYPES.LE_CURRENT:
      return state.currentByAge.avgAge;
    case AVG_AGE_TYPES.LE_CHECKED:
      return state.checkedByAge.checkedAvgAge;

    // Sole Trade

    case AVG_AGE_TYPES.ST_CURRENT:
      return state.currentByAgeSoleTrade.avgAgeSoleTrade;
    case AVG_AGE_TYPES.ST_CHECKED:
      return state.checkedByAgeSoleTrade.checkedAvgAgeSoleTrade;
  }
};

export const getTitleForAvgAge = (age: AVG_AGE_TYPES): string => {
  switch (age) {
    case AVG_AGE_TYPES.LE_CURRENT:
      return 'Средний возраст компаний';
    case AVG_AGE_TYPES.LE_CHECKED:
      return 'Средний возраст проверяемых компаний';

    // Sole Trade

    case AVG_AGE_TYPES.ST_CURRENT:
      return 'Средний возраст ИП';
    case AVG_AGE_TYPES.ST_CHECKED:
      return 'Средний возраст проверяемых ИП';
  }
};
