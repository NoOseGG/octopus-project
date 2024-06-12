import { FiltersType } from '@app/store/slices/search/searchFiltersSlice';
import { getTitleUtils, getUrlUtils } from '@app/services/legalEntityDashboard/utils';

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
  CHECKED_LIQUIDATED = 'checkedLiquidated',
  CHECKED_BANKRUPTED = 'checkedBankrupted',

  NONE = 'None',
}

export enum LINE_CHART {
  CREATED = 'createdLineChart',
  LIQUIDATED = 'liquidatedLineChart',
  BANKRUPTED = 'bankruptedLineChart',
  CHECKED = 'checkedLineChart',
}

export const DASHBOARD = {
  MAIN_INFO,
  LINE_CHART,
};

export type DASHBOARD_TYPE = MAIN_INFO | LINE_CHART;

class LegalEntityDashboardService {
  getUrl(type: DASHBOARD_TYPE, filters: FiltersType): string {
    console.log(type.toString());
    return getUrlUtils(type, filters);
  }

  getTitle(type: DASHBOARD_TYPE) {
    return getTitleUtils(type);
  }
}

export default new LegalEntityDashboardService();
