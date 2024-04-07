import { constructorUrlForDashboard, getCurrentDate, getDateLastQuarter, getDateLastYear } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import {
  DASHBOARD,
  DASHBOARD_TYPE,
  LINE_CHART,
  MAIN_INFO,
} from '@app/services/legalEntityDashboard/legalEntityDashboard.service';
import { FiltersType } from '@app/store/slices/search/searchFiltersSlice';

export const getUrlUtils = (type: DASHBOARD_TYPE, filters: FiltersType) => {
  switch (type) {
    case MAIN_INFO.CREATED_ALL:
      return constructorUrlForDashboard(DASH.BASE + DASH.LEGAL_ENTITY, filters, true, true);
    case MAIN_INFO.CREATED_YEAR: {
      const currentDate = getCurrentDate();
      const lastYearDate = getDateLastYear();
      return constructorUrlForDashboard(
        DASH.BASE + DASH.LEGAL_ENTITY + DASH.DATE_AFTER(lastYearDate) + DASH.DATE_BEFORE(currentDate),
        filters,
        true,
        false,
      );
    }
    case MAIN_INFO.CREATED_QUARTER: {
      const date = getDateLastQuarter();
      return constructorUrlForDashboard(DASH.BASE + DASH.LEGAL_ENTITY + DASH.DATE_AFTER(date), filters, true, false);
    }
    case MAIN_INFO.CREATED_OPERATION: {
      return constructorUrlForDashboard(DASH.BASE + DASH.LEGAL_ENTITY + DASH.STATUS_AT, filters, true, true);
    }

    case MAIN_INFO.CREATED_PERCENT_LAST_YEAR: {
      const currentDate = getCurrentDate();
      const lastYearDate = getDateLastYear();
      return DASH.BASE + DASH.LEGAL_ENTITY + DASH.DATE_AFTER(lastYearDate) + DASH.DATE_BEFORE(currentDate) + DASH.COUNT;
    }
    case MAIN_INFO.CREATED_PERCENT_TWO_LAST_YEAR: {
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

    case MAIN_INFO.LIQUIDATED_QUARTER: {
      const date = getDateLastQuarter();
      return constructorUrlForDashboard(
        DASH.BASE + DASH.LEGAL_ENTITY + DASH.LIQUIDATED_ENTITY + DASH.DATE_AFTER_LIQUIDATED(date),
        filters,
        true,
        false,
      );
    }

    case MAIN_INFO.LIQUIDATED_PERCENT_LAST_YEAR: {
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
    case MAIN_INFO.LIQUIDATED_PERCENT_TWO_LAST_YEAR: {
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
      return constructorUrlForDashboard(
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

    case MAIN_INFO.BANKRUPTED_QUARTER: {
      const date = getDateLastQuarter();
      return constructorUrlForDashboard(
        DASH.BASE + DASH.LEGAL_ENTITY + DASH.STATUS_BP + DASH.DATE_AFTER_LIQUIDATED(date),
        filters,
        true,
        false,
      );
    }

    case MAIN_INFO.BANKRUPTED_PERCENT_LAST_YEAR: {
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
    case MAIN_INFO.BANKRUPTED_PERCENT_TWO_LAST_YEAR: {
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

    // MAIN INFO CHECKED

    case MAIN_INFO.CHECKED_ALL:
      return constructorUrlForDashboard(
        DASH.BASE_INSPECTION + DASH.LEGAL_ENTITY + DASH.IS_NULL_FALSE('inspection_dttm'),
        filters,
        true,
        true,
      );

    case MAIN_INFO.CHECKED_LIQUIDATED: {
      return constructorUrlForDashboard(
        DASH.BASE_INSPECTION + DASH.LEGAL_ENTITY + DASH.LIQUIDATED_ENTITY + DASH.IS_NULL_FALSE('inspection_dttm'),
        filters,
        true,
        false,
      );
    }

    case MAIN_INFO.CHECKED_BANKRUPTED: {
      return constructorUrlForDashboard(
        DASH.BASE_INSPECTION + DASH.LEGAL_ENTITY + DASH.STATUS_BP + DASH.IS_NULL_FALSE('inspection_dttm'),
        filters,
        true,
        false,
      );
    }

    // LINE CHART

    case LINE_CHART.CREATED: {
      console.log('CREATED LINE');
      const currentDate = getCurrentDate();
      let baseUrl = DASH.BASE + DASH.AGR_COUNT + DASH.GROUP_BY('company_date_registration__year') + DASH.LEGAL_ENTITY;
      if (!filters.isDate) {
        baseUrl += DASH.DATE_BEFORE(currentDate);
        baseUrl += DASH.DATE_AFTER('2000-01-01');
      }
      return constructorUrlForDashboard(baseUrl, filters, false, true);
    }

    case LINE_CHART.LIQUIDATED: {
      console.log('LIQUDATED LINE');
      const currentDate = getCurrentDate();
      let baseUrl =
        DASH.BASE +
        DASH.AGR_COUNT +
        DASH.GROUP_BY('company_status_from_dttm__year') +
        DASH.LEGAL_ENTITY +
        DASH.LIQUIDATED_ENTITY;
      if (!filters.isDate) {
        baseUrl += DASH.DATE_BEFORE_LIQUIDATED(currentDate);
        baseUrl += DASH.DATE_AFTER_LIQUIDATED('2000-01-01');
      }
      const url = constructorUrlForDashboard(baseUrl, filters, false, true);
      console.log(url);
      return url;
    }

    case LINE_CHART.BANKRUPTED: {
      const currentDate = getCurrentDate();
      let baseUrl =
        DASH.BASE +
        DASH.AGR_COUNT +
        DASH.GROUP_BY('company_status_from_dttm__year') +
        DASH.LEGAL_ENTITY +
        DASH.STATUS_BP;
      if (!filters.isDate) {
        baseUrl += DASH.DATE_BEFORE_LIQUIDATED(currentDate);
        baseUrl += DASH.DATE_AFTER_LIQUIDATED('2000-01-01');
      }
      return constructorUrlForDashboard(baseUrl, filters, false, true);
    }

    case LINE_CHART.CHECKED: {
      const currentDate = getCurrentDate();
      let baseUrl = DASH.BASE_INSPECTION + DASH.AGR_COUNT + DASH.GROUP_BY('inspection_dttm__year') + DASH.LEGAL_ENTITY;
      if (!filters.isDate) {
        baseUrl += DASH.DATE_BEFORE_INSPECTION(currentDate);
        baseUrl += DASH.DATE_AFTER_INSPECTION('2000-01-01');
      }
      return constructorUrlForDashboard(baseUrl, filters, false, true);
    }

    default:
      return '';
  }
};

export const getTitleUtils = (type: DASHBOARD_TYPE) => {
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

    case MAIN_INFO.CHECKED_ALL:
      return 'Общее количество проверок компаний';
    case MAIN_INFO.CHECKED_LIQUIDATED:
      return 'Количество проверок компаний, которые на данный момент ликвидированы';
    case MAIN_INFO.CHECKED_BANKRUPTED:
      return 'Количество проверок компаний, которые на данный момент обанкрочены';

    case LINE_CHART.CREATED:
      return 'Динамика регистрации компаний';
    case LINE_CHART.LIQUIDATED:
      return 'Динамика ликвидаций компаний';
    case LINE_CHART.BANKRUPTED:
      return 'Динамика банкротств компаний';
    case LINE_CHART.CHECKED:
      return 'Динамика проверок компаний';
  }
};

export const getTitleForLineChart = (lineChart: LINE_CHART): string => {
  switch (lineChart) {
    case LINE_CHART.CREATED:
      return 'Динамика регистрации компаний';
    case LINE_CHART.LIQUIDATED:
      return 'Динамика ликвидаций компаний';
    case LINE_CHART.BANKRUPTED:
      return 'Динамика банкротств компаний';
    case LINE_CHART.CHECKED:
      return 'Динамика проверок компаний';
  }
};
