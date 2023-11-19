import { RootState } from '@app/store/store';
import { COUNT_TYPE } from '@app/components/dashboards/dashboard/DashboardTypes';
import { doGetTotalCountCreated } from '@app/store/slices/legalEntityDashboard/mainInfo/created/createdAllSlice';
import { doGetTotalCountCreatedLastYear } from '@app/store/slices/legalEntityDashboard/mainInfo/created/createdYearSlice';
import { doGetTotalCountCreatedLastQuarter } from '@app/store/slices/legalEntityDashboard/mainInfo/created/createdQuarterSlice';
import { doGetTotalCountOperatingCompany } from '@app/store/slices/legalEntityDashboard/mainInfo/created/createdOperatingSlice';
import { FiltersType } from '@app/store/slices/search/searchFiltersSlice';

export const getActionByPath = (dynamicPath: COUNT_TYPE) => {
  return (filters: FiltersType) => {
    switch (dynamicPath) {
      case COUNT_TYPE.CREATED_ALL:
        return doGetTotalCountCreated({ filters });
      case COUNT_TYPE.CREATED_YEAR:
        return doGetTotalCountCreatedLastYear;
      case COUNT_TYPE.CREATED_QUARTER:
        return doGetTotalCountCreatedLastQuarter;
      case COUNT_TYPE.CREATED_OPERATION:
        return doGetTotalCountOperatingCompany;
    }
  };
};

export const getStateByPath = (state: RootState, dynamicPath: COUNT_TYPE) => {
  switch (dynamicPath) {
    case COUNT_TYPE.CREATED_ALL:
      return state.mainInfo.createdAll;
    case COUNT_TYPE.CREATED_YEAR:
      return state.mainInfo.createdYear;
    case COUNT_TYPE.CREATED_QUARTER:
      return state.mainInfo.createdQuarter;
    case COUNT_TYPE.CREATED_OPERATION:
      return state.mainInfo.createdOperating;
    case COUNT_TYPE.CREATED_SOLE_TRADE_ALL:
      return state.mainInfoSoleTrade.createdAllSoleTrade;
    case COUNT_TYPE.CREATED_SOLE_TRADE_YEAR:
      return state.mainInfoSoleTrade.createdYearSoleTrade;
    case COUNT_TYPE.CREATED_SOLE_TRADE_QUARTER:
      return state.mainInfoSoleTrade.createdQuarterSoleTrade;
    case COUNT_TYPE.CREATED_SOLE_TRADE_OPERATION:
      return state.mainInfoSoleTrade.createdOperatingSoleTrade;
  }
};

export const getTitleByPath = (dynamicPath: COUNT_TYPE): string => {
  switch (dynamicPath) {
    case COUNT_TYPE.CREATED_ALL:
      return 'Общее количество созданных компаний';
    case COUNT_TYPE.CREATED_YEAR:
      return 'Количество созданных компаний (год)';
    case COUNT_TYPE.CREATED_QUARTER:
      return 'Количество созданных компаний (квартал)';
    case COUNT_TYPE.CREATED_OPERATION:
      return 'Действующие компаний';
    case COUNT_TYPE.CREATED_SOLE_TRADE_ALL:
      return 'Общее количество созданных ИП';
    case COUNT_TYPE.CREATED_SOLE_TRADE_YEAR:
      return 'Количество созданных ИП (год)';
    case COUNT_TYPE.CREATED_SOLE_TRADE_QUARTER:
      return 'Количество созданных ИП (квартал)';
    case COUNT_TYPE.CREATED_SOLE_TRADE_OPERATION:
      return 'Действующие ИП';
  }
};
