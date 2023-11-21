import { AGE_TYPES } from '@app/components/dashboards/dashboard/components/ByAge/components/Age/AgeTypes';

export type ByAgeProps = {
  moreThen20: AGE_TYPES;
  from10To20: AGE_TYPES;
  from5To10: AGE_TYPES;
  from1To5: AGE_TYPES;
  lessThen1: AGE_TYPES;
};

export const getTitleForByAge = (byAge: AGE_TYPES): string => {
  switch (byAge) {
    case AGE_TYPES.LE_CURRENT_MORE_THEN_20:
    case AGE_TYPES.ST_CURRENT_MORE_THEN_20:
      return 'СРЕЗ ДЕЙСТВУЮЩИХ КОМПАНИЙ ПО ВОЗРАСТУ';
    case AGE_TYPES.LE_LIQUIDATED_MORE_THEN_20:
    case AGE_TYPES.ST_LIQUIDATED_MORE_THEN_20:
      return 'СРЕЗ ЛИКВИДИРОВАННЫХ КОМПАНИЙ ПО ВОЗРАСТУ';
    case AGE_TYPES.LE_BANKRUPTED_MORE_THEN_20:
    case AGE_TYPES.ST_BANKRUPTED_MORE_THEN_20:
      return 'СРЕЗ ОБАНКРОЧЕННЫХ КОМПАНИЙ ПО ВОЗРАСТУ';
    default:
      return '';
  }
};
