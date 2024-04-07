import { FiltersType } from '@app/store/slices/search/searchFiltersSlice';
import { getUrlForMainInfo } from '@app/services/legalEntityDashboard/utils';

export enum MAIN_INFO {
  CREATED_ALL = 'createdAll',
  CREATED_YEAR = 'createdYear',
  CREATED_QUARTER = 'createdQuarter',
  CREATED_OPERATION = 'createdOperation',
  CREATED_PERCENT_LAST_YEAR = 'createdPercentLastYear',
  CREATED_PERCENT_TWO_LAST_YEAR = 'createdPercentTwoLastYear',

  LIQUIDATED_ALL = 'liquidatedAll',
  LIQUIDATED_YEAR = 'liquidatedYear',
  LIQUIDATED_QUARTER = 'liquidatedQuarter',
  LIQUIDATED_PERCENT_LAST_YEAR = 'liquidatedPercentLastYear',
  LIQUIDATED_PERCENT_TWO_LAST_YEAR = 'liquidatedPercentTwoLastYear',

  BANKRUPTED_ALL = 'bankruptedAll',
  BANKRUPTED_YEAR = 'bankruptedYear',
  BANKRUPTED_QUARTER = 'bankruptedQuarter',
  BANKRUPTED_PERCENT_LAST_YEAR = 'bankruptedPercentLastYear',
  BANKRUPTED_PERCENT_TWO_LAST_YEAR = 'bankruptedPercentTwoLastYear',

  CHECKED_ALL = 'checkedAll',
  CHECKED_YEAR = 'checkedYear',
  CHECKED_QUARTER = 'checkedQuarter',
  CHECKED_PERCENT_LAST_YEAR = 'checkedPercentLastYear',
  CHECKED_PERCENT_TWO_LAST_YEAR = 'checkedPercentTwoLastYear',

  NONE = 'createdNone',
}

export const DASHBOARD = {
  MAIN_INFO,
};

export type DASHBOARD_TYPE = MAIN_INFO;

class LegalEntityDashboardService {
  getUrl(type: DASHBOARD_TYPE, filters: FiltersType) {
    return getUrlForMainInfo(type, filters);
  }

  getTitle(type: DASHBOARD_TYPE) {
    switch (type) {
      case MAIN_INFO.CREATED_ALL:
        return 'Общее количество созданных компаний';
      case MAIN_INFO.CREATED_YEAR:
        return 'Количество созданных компаний за период';
      case MAIN_INFO.CREATED_QUARTER:
        return 'Количество созданных компаний (квартал)';
      case MAIN_INFO.CREATED_OPERATION:
        return 'Действующие компаний';

      case MAIN_INFO.LIQUIDATED_ALL:
        return 'Общее количество ликвидированных компаний';
      case MAIN_INFO.LIQUIDATED_YEAR:
        return 'Количество ликвидированных компаний за период';
      case MAIN_INFO.LIQUIDATED_QUARTER:
        return 'Количество ликвидированных компаний (квартал)';

      case MAIN_INFO.BANKRUPTED_ALL:
        return 'Общее количество обанкротившихся компаний';
      case MAIN_INFO.BANKRUPTED_YEAR:
        return 'Количество обанкротившихся компаний за период';
      case MAIN_INFO.BANKRUPTED_QUARTER:
        return 'Количество обанкротившихся компаний (квартал)';
    }
  }
}

export default new LegalEntityDashboardService();
