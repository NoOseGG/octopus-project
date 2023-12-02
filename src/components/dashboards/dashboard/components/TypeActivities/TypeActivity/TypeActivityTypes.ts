import { RootState } from '@app/store/store';

export type TypeActivityProps = {
  typeActivity: TYPE_ACTIVITY_TYPE;
};

export enum TYPE_ACTIVITY_TYPE {
  LE_CREATED_ALL,
  LE_CREATED_YEAR,
  LE_CREATED_QUARTER,
  LE_CREATED_MONTH,
  LE_LIQUIDATED_ALL,
  LE_LIQUIDATED_YEAR,
  LE_LIQUIDATED_QUARTER,
  LE_LIQUIDATED_MONTH,
  LE_BANKRUPTED_ALL,
  LE_BANKRUPTED_YEAR,
  LE_BANKRUPTED_QUARTER,
  LE_BANKRUPTED_MONTH,
  LE_CHECKED_ALL,
  LE_CHECKED_YEAR,
  LE_CHECKED_QUARTER,
  LE_CHECKED_MONTH,

  ST_CREATED_ALL,
  ST_CREATED_YEAR,
  ST_CREATED_QUARTER,
  ST_CREATED_MONTH,
  ST_LIQUIDATED_ALL,
  ST_LIQUIDATED_YEAR,
  ST_LIQUIDATED_QUARTER,
  ST_LIQUIDATED_MONTH,
  ST_BANKRUPTED_ALL,
  ST_BANKRUPTED_YEAR,
  ST_BANKRUPTED_QUARTER,
  ST_BANKRUPTED_MONTH,
  ST_CHECKED_ALL,
  ST_CHECKED_YEAR,
  ST_CHECKED_QUARTER,
  ST_CHECKED_MONTH,
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getStateForTypeActivity = (state: RootState, typeActivity: TYPE_ACTIVITY_TYPE) => {
  switch (typeActivity) {
    case TYPE_ACTIVITY_TYPE.LE_CREATED_ALL:
      return state.typeActivities.typeActivitiesAll;
    case TYPE_ACTIVITY_TYPE.LE_CREATED_YEAR:
      return state.typeActivities.typeActivitiesYear;
    case TYPE_ACTIVITY_TYPE.LE_CREATED_QUARTER:
      return state.typeActivities.typeActivitiesQuarter;
    case TYPE_ACTIVITY_TYPE.LE_CREATED_MONTH:
      return state.typeActivities.typeActivitiesMonth;

    case TYPE_ACTIVITY_TYPE.LE_LIQUIDATED_ALL:
      return state.typeActivitiesLiquidated.typeActivitiesLiquidatedAll;
    case TYPE_ACTIVITY_TYPE.LE_LIQUIDATED_YEAR:
      return state.typeActivitiesLiquidated.typeActivitiesLiquidatedYear;
    case TYPE_ACTIVITY_TYPE.LE_LIQUIDATED_QUARTER:
      return state.typeActivitiesLiquidated.typeActivitiesLiquidatedQuarter;
    case TYPE_ACTIVITY_TYPE.LE_LIQUIDATED_MONTH:
      return state.typeActivitiesLiquidated.typeActivitiesLiquidatedMonth;

    case TYPE_ACTIVITY_TYPE.LE_BANKRUPTED_ALL:
      return state.typeActivitiesBankrupted.typeActivitiesBankruptedAll;
    case TYPE_ACTIVITY_TYPE.LE_BANKRUPTED_YEAR:
      return state.typeActivitiesBankrupted.typeActivitiesBankruptedYear;
    case TYPE_ACTIVITY_TYPE.LE_BANKRUPTED_QUARTER:
      return state.typeActivitiesBankrupted.typeActivitiesBankruptedQuarter;
    case TYPE_ACTIVITY_TYPE.LE_BANKRUPTED_MONTH:
      return state.typeActivitiesBankrupted.typeActivitiesBankruptedMonth;

    case TYPE_ACTIVITY_TYPE.LE_CHECKED_ALL:
      return state.typeActivitiesChecked.typeActivitiesCheckedAll;
    case TYPE_ACTIVITY_TYPE.LE_CHECKED_YEAR:
      return state.typeActivitiesChecked.typeActivitiesCheckedYear;
    case TYPE_ACTIVITY_TYPE.LE_CHECKED_QUARTER:
      return state.typeActivitiesChecked.typeActivitiesCheckedQuarter;
    case TYPE_ACTIVITY_TYPE.LE_CHECKED_MONTH:
      return state.typeActivitiesChecked.typeActivitiesCheckedMonth;

    // SOLE TRADE

    case TYPE_ACTIVITY_TYPE.ST_CREATED_ALL:
      return state.typeActivitiesSoleTrade.typeActivitiesSoleTradeAll;
    case TYPE_ACTIVITY_TYPE.ST_CREATED_YEAR:
      return state.typeActivitiesSoleTrade.typeActivitiesSoleTradeYear;
    case TYPE_ACTIVITY_TYPE.ST_CREATED_QUARTER:
      return state.typeActivitiesSoleTrade.typeActivitiesSoleTradeQuarter;
    case TYPE_ACTIVITY_TYPE.ST_CREATED_MONTH:
      return state.typeActivitiesSoleTrade.typeActivitiesSoleTradeMonth;

    case TYPE_ACTIVITY_TYPE.ST_LIQUIDATED_ALL:
      return state.typeActivitiesLiquidatedSoleTrade.typeActivitiesLiquidatedSoleTradeAll;
    case TYPE_ACTIVITY_TYPE.ST_LIQUIDATED_YEAR:
      return state.typeActivitiesLiquidatedSoleTrade.typeActivitiesLiquidatedSoleTradeYear;
    case TYPE_ACTIVITY_TYPE.ST_LIQUIDATED_QUARTER:
      return state.typeActivitiesLiquidatedSoleTrade.typeActivitiesLiquidatedSoleTradeQuarter;
    case TYPE_ACTIVITY_TYPE.ST_LIQUIDATED_MONTH:
      return state.typeActivitiesLiquidatedSoleTrade.typeActivitiesLiquidatedSoleTradeMonth;

    case TYPE_ACTIVITY_TYPE.ST_BANKRUPTED_ALL:
      return state.typeActivitiesBankruptedSoleTrade.typeActivitiesBankruptedSoleTradeAll;
    case TYPE_ACTIVITY_TYPE.ST_BANKRUPTED_YEAR:
      return state.typeActivitiesBankruptedSoleTrade.typeActivitiesBankruptedSoleTradeYear;
    case TYPE_ACTIVITY_TYPE.ST_BANKRUPTED_QUARTER:
      return state.typeActivitiesBankruptedSoleTrade.typeActivitiesBankruptedSoleTradeQuarter;
    case TYPE_ACTIVITY_TYPE.ST_BANKRUPTED_MONTH:
      return state.typeActivitiesBankruptedSoleTrade.typeActivitiesBankruptedSoleTradeMonth;

    case TYPE_ACTIVITY_TYPE.ST_CHECKED_ALL:
      return state.typeActivitiesCheckedSoleTrade.typeActivitiesCheckedAllSoleTrade;
    case TYPE_ACTIVITY_TYPE.ST_CHECKED_YEAR:
      return state.typeActivitiesCheckedSoleTrade.typeActivitiesCheckedYearSoleTrade;
    case TYPE_ACTIVITY_TYPE.ST_CHECKED_QUARTER:
      return state.typeActivitiesCheckedSoleTrade.typeActivitiesCheckedQuarterSoleTrade;
    case TYPE_ACTIVITY_TYPE.ST_CHECKED_MONTH:
      return state.typeActivitiesCheckedSoleTrade.typeActivitiesCheckedMonthSoleTrade;
  }
};

export const getTitleForTypeActivity = (typeActivity: TYPE_ACTIVITY_TYPE): string => {
  switch (typeActivity) {
    case TYPE_ACTIVITY_TYPE.LE_CREATED_ALL:
      return 'Виды деятельности';
    case TYPE_ACTIVITY_TYPE.LE_CREATED_YEAR:
      return 'Виды деятельности (Год)';
    case TYPE_ACTIVITY_TYPE.LE_CREATED_QUARTER:
      return 'Виды деятельности (Квартал)';
    case TYPE_ACTIVITY_TYPE.LE_CREATED_MONTH:
      return 'Виды деятельности (Месяц)';

    case TYPE_ACTIVITY_TYPE.LE_LIQUIDATED_ALL:
      return 'Виды деятельности';
    case TYPE_ACTIVITY_TYPE.LE_LIQUIDATED_YEAR:
      return 'Виды деятельности (Год)';
    case TYPE_ACTIVITY_TYPE.LE_LIQUIDATED_QUARTER:
      return 'Виды деятельности (Квартал)';
    case TYPE_ACTIVITY_TYPE.LE_LIQUIDATED_MONTH:
      return 'Виды деятельности (Месяц)';

    case TYPE_ACTIVITY_TYPE.LE_BANKRUPTED_ALL:
      return 'Виды деятельности';
    case TYPE_ACTIVITY_TYPE.LE_BANKRUPTED_YEAR:
      return 'Виды деятельности (Год)';
    case TYPE_ACTIVITY_TYPE.LE_BANKRUPTED_QUARTER:
      return 'Виды деятельности (Квартал)';
    case TYPE_ACTIVITY_TYPE.LE_BANKRUPTED_MONTH:
      return 'Виды деятельности (Месяц)';

    case TYPE_ACTIVITY_TYPE.LE_CHECKED_ALL:
      return 'Виды деятельности';
    case TYPE_ACTIVITY_TYPE.LE_CHECKED_YEAR:
      return 'Виды деятельности (Год)';
    case TYPE_ACTIVITY_TYPE.LE_CHECKED_QUARTER:
      return 'Виды деятельности (Квартал)';
    case TYPE_ACTIVITY_TYPE.LE_CHECKED_MONTH:
      return 'Виды деятельности (Месяц)';

    // Sole Trade

    case TYPE_ACTIVITY_TYPE.ST_CREATED_ALL:
      return 'Виды деятельности';
    case TYPE_ACTIVITY_TYPE.ST_CREATED_YEAR:
      return 'Виды деятельности (Год)';
    case TYPE_ACTIVITY_TYPE.ST_CREATED_QUARTER:
      return 'Виды деятельности (Квартал)';
    case TYPE_ACTIVITY_TYPE.ST_CREATED_MONTH:
      return 'Виды деятельности (Месяц)';

    case TYPE_ACTIVITY_TYPE.ST_LIQUIDATED_ALL:
      return 'Виды деятельности';
    case TYPE_ACTIVITY_TYPE.ST_LIQUIDATED_YEAR:
      return 'Виды деятельности (Год)';
    case TYPE_ACTIVITY_TYPE.ST_LIQUIDATED_QUARTER:
      return 'Виды деятельности (Квартал)';
    case TYPE_ACTIVITY_TYPE.ST_LIQUIDATED_MONTH:
      return 'Виды деятельности (Месяц)';

    case TYPE_ACTIVITY_TYPE.ST_BANKRUPTED_ALL:
      return 'Виды деятельности';
    case TYPE_ACTIVITY_TYPE.ST_BANKRUPTED_YEAR:
      return 'Виды деятельности (Год)';
    case TYPE_ACTIVITY_TYPE.ST_BANKRUPTED_QUARTER:
      return 'Виды деятельности (Квартал)';
    case TYPE_ACTIVITY_TYPE.ST_BANKRUPTED_MONTH:
      return 'Виды деятельности (Месяц)';

    case TYPE_ACTIVITY_TYPE.ST_CHECKED_ALL:
      return 'Виды деятельности';
    case TYPE_ACTIVITY_TYPE.ST_CHECKED_YEAR:
      return 'Виды деятельности (Год)';
    case TYPE_ACTIVITY_TYPE.ST_CHECKED_QUARTER:
      return 'Виды деятельности (Квартал)';
    case TYPE_ACTIVITY_TYPE.ST_CHECKED_MONTH:
      return 'Виды деятельности (Месяц)';
  }
};
