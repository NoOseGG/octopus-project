import { RootState } from '@app/store/store';

export type AvgAgeProps = {
  avgAge: AVG_AGE_TYPES;
};

export enum AVG_AGE_TYPES {
  LE_CURRENT,
  LE_CHECKED,
  ST_CURRENT,
}

export const getStateForAvgAge = (state: RootState, avgAge: AVG_AGE_TYPES) => {
  switch (avgAge) {
    case AVG_AGE_TYPES.LE_CURRENT:
      return state.currentByAge.avgAge;
    case AVG_AGE_TYPES.LE_CHECKED:
      return state.checkedByAge.checkedAvgAge;
    case AVG_AGE_TYPES.ST_CURRENT:
      return state.currentByAgeSoleTrade.avgAgeSoleTrade;
  }
};

export const getTitleForAvgAge = (age: AVG_AGE_TYPES): string => {
  switch (age) {
    case AVG_AGE_TYPES.LE_CURRENT:
      return 'Средний возраст компаний';
    case AVG_AGE_TYPES.LE_CHECKED:
      return 'Средний возраст проверяемых компаний';
    case AVG_AGE_TYPES.ST_CURRENT:
      return 'Средний возраст ИП';
  }
};
