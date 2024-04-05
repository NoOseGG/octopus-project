import { constructorUrlForDashboard, getCurrentDate, getDateLastQuarter, getDateLastYear } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import { FiltersType } from '@app/store/slices/search/searchFiltersSlice';

export enum DASHBOARD {
  MAIN_INFO_CREATED_ALL,
  MAIN_INFO_CREATED_YEAR,
  MAIN_INFO_CREATED_QUARTER,
  MAIN_INFO_CREATED_OPERATION,
  MAIN_INFO_CREATED_PERCENT,
}

class LegalEntityDashboardService {
  getUrl(type: DASHBOARD, filters: FiltersType) {
    switch (type) {
      case DASHBOARD.MAIN_INFO_CREATED_ALL:
        return constructorUrlForDashboard(DASH.BASE + DASH.LEGAL_ENTITY, filters, true, true);
      case DASHBOARD.MAIN_INFO_CREATED_YEAR: {
        const currentDate = getCurrentDate();
        const lastYearDate = getDateLastYear();
        return constructorUrlForDashboard(
          DASH.BASE + DASH.LEGAL_ENTITY + DASH.DATE_AFTER(lastYearDate) + DASH.DATE_BEFORE(currentDate),
          filters,
          true,
          false,
        );
      }
      case DASHBOARD.MAIN_INFO_CREATED_QUARTER: {
        const date = getDateLastQuarter();
        return constructorUrlForDashboard(DASH.BASE + DASH.LEGAL_ENTITY + DASH.DATE_AFTER(date), filters, true, false);
      }
      case DASHBOARD.MAIN_INFO_CREATED_OPERATION: {
        return constructorUrlForDashboard(DASH.BASE + DASH.LEGAL_ENTITY + DASH.STATUS_AT, filters, true, true);
      }

      default:
        return '';
    }
  }
}

export default new LegalEntityDashboardService();
