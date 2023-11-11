import { RootState } from '@app/store/store';
import { DynamicPath } from '@app/components/dashboards/dashboard/DashboardTypes';
import { doGetTotalCountCreated } from '@app/store/slices/legalEntityDashboard/mainInfo/createdAllSlice';
import { doGetTotalCountCreatedLastYear } from '@app/store/slices/legalEntityDashboard/mainInfo/createdYearSlice';
import { doGetTotalCountCreatedLastQuarter } from '@app/store/slices/legalEntityDashboard/mainInfo/createdQuarterSlice';
import { doGetTotalCountOperatingCompany } from '@app/store/slices/legalEntityDashboard/mainInfo/createdOperatingSlice';
import { FiltersType } from '@app/store/slices/searchFiltersSlice';

export const getActionByPath = (dynamicPath: DynamicPath) => {
  return (filters: FiltersType) => {
    switch (dynamicPath) {
      case DynamicPath.CREATED_ALL:
        return doGetTotalCountCreated({ filters });
      case DynamicPath.CREATED_YEAR:
        return doGetTotalCountCreatedLastYear;
      case DynamicPath.CREATED_QUARTER:
        return doGetTotalCountCreatedLastQuarter;
      case DynamicPath.CREATED_OPERATION:
        return doGetTotalCountOperatingCompany;
    }
  };
};

export const getStateByPath = (state: RootState, dynamicPath: DynamicPath) => {
  switch (dynamicPath) {
    case DynamicPath.CREATED_ALL:
      return state.mainInfo.createdAll;
    case DynamicPath.CREATED_YEAR:
      return state.mainInfo.createdYear;
    case DynamicPath.CREATED_QUARTER:
      return state.mainInfo.createdQuarter;
    case DynamicPath.CREATED_OPERATION:
      return state.mainInfo.createdOperating;
    case DynamicPath.CREATED_SOLE_TRADE_ALL:
      return state.mainInfoSoleTrade.createdAllSoleTrade;
    case DynamicPath.CREATED_SOLE_TRADE_YEAR:
      return state.mainInfoSoleTrade.createdYearSoleTrade;
    case DynamicPath.CREATED_SOLE_TRADE_QUARTER:
      return state.mainInfoSoleTrade.createdQuarterSoleTrade;
    case DynamicPath.CREATED_SOLE_TRADE_OPERATION:
      return state.mainInfoSoleTrade.createdOperatingSoleTrade;
  }
};

export const getTitleByPath = (dynamicPath: DynamicPath): string => {
  switch (dynamicPath) {
    case DynamicPath.CREATED_ALL:
      return 'Общее количество созданных компаний';
    case DynamicPath.CREATED_YEAR:
      return 'Количество созданных компаний (год)';
    case DynamicPath.CREATED_QUARTER:
      return 'Количество созданных компаний (квартал)';
    case DynamicPath.CREATED_OPERATION:
      return 'Действующие компаний';
    case DynamicPath.CREATED_SOLE_TRADE_ALL:
      return 'Общее количество созданных ИП';
    case DynamicPath.CREATED_SOLE_TRADE_YEAR:
      return 'Количество созданных ИП (год)';
    case DynamicPath.CREATED_SOLE_TRADE_QUARTER:
      return 'Количество созданных ИП (квартал)';
    case DynamicPath.CREATED_SOLE_TRADE_OPERATION:
      return 'Действующие ИП';
  }
};
