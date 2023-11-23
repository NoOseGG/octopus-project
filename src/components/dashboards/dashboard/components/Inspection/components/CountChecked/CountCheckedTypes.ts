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

export const getStateForCountChecked = (state: RootState, countChecked: COUNT_CHECKED_TYPE) => {
  switch (countChecked) {
    case COUNT_CHECKED_TYPE.LE_CHECKED_ALL:
      return state.checked.checkedAll;
  }
};

export const getTitleForCountChecked = (countYear: COUNT_CHECKED_TYPE): string => {
  switch (countYear) {
    case COUNT_CHECKED_TYPE.LE_CHECKED_ALL:
      return 'Общее количество проверок компаний';
    default:
      return '';
  }
};
