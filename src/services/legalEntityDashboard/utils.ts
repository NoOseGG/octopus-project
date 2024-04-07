import { constructorUrlForDashboard, getCurrentDate, getDateLastQuarter, getDateLastYear } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import { DASHBOARD, DASHBOARD_TYPE, MAIN_INFO } from '@app/services/legalEntityDashboard/legalEntityDashboard.service';
import { FiltersType } from '@app/store/slices/search/searchFiltersSlice';

export const getUrlForMainInfo = (type: DASHBOARD_TYPE, filters: FiltersType) => {
  switch (type) {
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
      return DASH.BASE + DASH.LEGAL_ENTITY + DASH.DATE_AFTER(lastYearDate) + DASH.DATE_BEFORE(currentDate) + DASH.COUNT;
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

    case MAIN_INFO.LIQUIDATED_YEAR: {
      const currentDate = getCurrentDate();
      const lastYearDate = getDateLastYear();
      return constructorUrlForDashboard(
        DASH.BASE +
          DASH.LEGAL_ENTITY +
          DASH.LIQUIDATED_ENTITY +
          DASH.DATE_AFTER_LIQUIDATED(lastYearDate) +
          DASH.DATE_BEFORE_LIQUIDATED(currentDate),
        filters,
        true,
        false,
      );
    }

    case DASHBOARD.MAIN_INFO.LIQUIDATED_QUARTER: {
      const date = getDateLastQuarter();
      return constructorUrlForDashboard(
        DASH.BASE + DASH.LEGAL_ENTITY + DASH.LIQUIDATED_ENTITY + DASH.DATE_AFTER_LIQUIDATED(date),
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
        DASH.DATE_AFTER_LIQUIDATED(lastYearDate) +
        DASH.DATE_BEFORE_LIQUIDATED(currentDate) +
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
        DASH.DATE_AFTER_LIQUIDATED(twoLastYearDate) +
        DASH.DATE_BEFORE_LIQUIDATED(lastYearDate) +
        DASH.COUNT
      );
    }

    //MAIN INFO BANKRUPTED

    case DASHBOARD.MAIN_INFO.BANKRUPTED_ALL:
      return constructorUrlForDashboard(DASH.BASE + DASH.LEGAL_ENTITY + DASH.STATUS_BP, filters, true, true);

    case MAIN_INFO.BANKRUPTED_YEAR: {
      const currentDate = getCurrentDate();
      const lastYearDate = getDateLastYear();
      return  constructorUrlForDashboard(
        DASH.BASE +
          DASH.LEGAL_ENTITY +
          DASH.STATUS_BP +
          DASH.DATE_AFTER_LIQUIDATED(lastYearDate) +
          DASH.DATE_BEFORE_LIQUIDATED(currentDate),
        filters,
        true,
        false,
      );
    }

    case DASHBOARD.MAIN_INFO.BANKRUPTED_QUARTER: {
      const date = getDateLastQuarter();
      return constructorUrlForDashboard(
        DASH.BASE + DASH.LEGAL_ENTITY + DASH.STATUS_BP + DASH.DATE_AFTER_LIQUIDATED(date),
        filters,
        true,
        false,
      );
    }

    case DASHBOARD.MAIN_INFO.BANKRUPTED_PERCENT_LAST_YEAR: {
      const currentDate = getCurrentDate();
      const lastYearDate = getDateLastYear();
      return (
        DASH.BASE +
        DASH.LEGAL_ENTITY +
        DASH.STATUS_BP +
        DASH.DATE_AFTER_LIQUIDATED(lastYearDate) +
        DASH.DATE_BEFORE_LIQUIDATED(currentDate) +
        DASH.COUNT
      );
    }
    case DASHBOARD.MAIN_INFO.BANKRUPTED_PERCENT_TWO_LAST_YEAR: {
      const lastYearDate = getDateLastYear();
      const twoLastYearDate = getDateLastYear(2);
      return (
        DASH.BASE +
        DASH.LEGAL_ENTITY +
        DASH.STATUS_BP +
        DASH.DATE_AFTER_LIQUIDATED(twoLastYearDate) +
        DASH.DATE_BEFORE_LIQUIDATED(lastYearDate) +
        DASH.COUNT
      );
    }

    default:
      return '';
  }
};
