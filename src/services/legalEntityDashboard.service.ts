import { constructorUrlForDashboard, getCurrentDate, getDateLastQuarter, getDateLastYear } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import { FiltersType } from '@app/store/slices/search/searchFiltersSlice';

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
    switch (type) {
      case DASHBOARD.MAIN_INFO.LIQUIDATED_YEAR: {
        const currentDate = getCurrentDate();
        const lastYearDate = getDateLastYear();
        const url = constructorUrlForDashboard(
          DASH.BASE +
            DASH.LEGAL_ENTITY +
            DASH.LIQUIDATED_ENTITY +
            DASH.DATE_AFTER(lastYearDate) +
            DASH.DATE_BEFORE(currentDate),
          filters,
          true,
          false,
        );
        console.log(`URL => ${url}`);
        return url;
      }

      case DASHBOARD.MAIN_INFO.CREATED_ALL:
        return constructorUrlForDashboard(DASH.BASE + DASH.LEGAL_ENTITY, filters, true, true);
      case DASHBOARD.MAIN_INFO.CREATED_YEAR: {
        console.log('yEAR');
        const currentDate = getCurrentDate();
        const lastYearDate = getDateLastYear();
        return constructorUrlForDashboard(
          DASH.BASE + DASH.LEGAL_ENTITY + DASH.DATE_AFTER(lastYearDate) + DASH.DATE_BEFORE(currentDate),
          filters,
          true,
          false,
        );
      }
      case DASHBOARD.MAIN_INFO.CREATED_QUARTER: {
        const date = getDateLastQuarter();
        return constructorUrlForDashboard(DASH.BASE + DASH.LEGAL_ENTITY + DASH.DATE_AFTER(date), filters, true, false);
      }
      case DASHBOARD.MAIN_INFO.CREATED_OPERATION: {
        return constructorUrlForDashboard(DASH.BASE + DASH.LEGAL_ENTITY + DASH.STATUS_AT, filters, true, true);
      }

      case DASHBOARD.MAIN_INFO.CREATED_PERCENT_LAST_YEAR: {
        const currentDate = getCurrentDate();
        const lastYearDate = getDateLastYear();
        return (
          DASH.BASE + DASH.LEGAL_ENTITY + DASH.DATE_AFTER(lastYearDate) + DASH.DATE_BEFORE(currentDate) + DASH.COUNT
        );
      }
      case DASHBOARD.MAIN_INFO.CREATED_PERCENT_TWO_LAST_YEAR: {
        const lastYearDate = getDateLastYear();
        const twoLastYearDate = getDateLastYear(2);
        return (
          DASH.BASE + DASH.LEGAL_ENTITY + DASH.DATE_AFTER(twoLastYearDate) + DASH.DATE_BEFORE(lastYearDate) + DASH.COUNT
        );
      }

      //LIQUIDATED MAIN INFO

      case DASHBOARD.MAIN_INFO.LIQUIDATED_ALL:
        return constructorUrlForDashboard(DASH.BASE + DASH.LEGAL_ENTITY + DASH.LIQUIDATED_ENTITY, filters, true, true);

      case DASHBOARD.MAIN_INFO.LIQUIDATED_QUARTER: {
        const date = getDateLastQuarter();
        return constructorUrlForDashboard(
          DASH.BASE + DASH.LEGAL_ENTITY + DASH.LIQUIDATED_ENTITY + DASH.DATE_AFTER(date),
          filters,
          true,
          false,
        );
      }

      case DASHBOARD.MAIN_INFO.LIQUIDATED_PERCENT_LAST_YEAR: {
        const currentDate = getCurrentDate();
        const lastYearDate = getDateLastYear();
        return (
          DASH.BASE +
          DASH.LEGAL_ENTITY +
          DASH.LIQUIDATED_ENTITY +
          DASH.DATE_AFTER(lastYearDate) +
          DASH.DATE_BEFORE(currentDate) +
          DASH.COUNT
        );
      }
      case DASHBOARD.MAIN_INFO.LIQUIDATED_PERCENT_TWO_LAST_YEAR: {
        const lastYearDate = getDateLastYear();
        const twoLastYearDate = getDateLastYear(2);
        return (
          DASH.BASE +
          DASH.LEGAL_ENTITY +
          DASH.LIQUIDATED_ENTITY +
          DASH.DATE_AFTER(twoLastYearDate) +
          DASH.DATE_BEFORE(lastYearDate) +
          DASH.COUNT
        );
      }

      default:
        return '';
    }
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
    }
  }
}

export default new LegalEntityDashboardService();
