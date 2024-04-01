import { DASH } from '@app/constants/enums/Dashboards';
import {
  CountCompetitorsResponse,
  ResponseColumnChart,
  ResponseDetailedTableCompetitors,
  ResponseLineChart,
} from '@app/interfaces/interfaces';
import { httpDashboard } from '@app/api/http.api';
import { getCurrentDate, getDateLastQuarter, getDateLastYear, getPastMonthFromDate } from '@app/utils/utils';

class CompetitorsService {
  COMPETITORS_KEY = {
    COUNT_ALL: 'countAllCompetitors',
    COUNT_YEAR: 'countYearCompetitors',
    COUNT_QUARTER: 'countQuarterCompetitors',
    COUNT_OPERATING: 'countOperatingCompetitors',
    BY_MONTH: 'byMonthCompetitors',
    BY_AGE: 'byAgeCompetitors',
    DETAILS: 'detailsCompetitors',
  };

  async getCountAll(settlement: string, typeActivity: string) {
    return httpDashboard.get<CountCompetitorsResponse>(
      DASH.BASE +
        DASH.ADDRESS_SETTLEMENT_ICONTAINS(settlement) +
        DASH.TYPE_ACTIVITY(typeActivity) +
        DASH.STATUS_AT +
        DASH.COUNT,
    );
  }

  async getCountYear(settlement: string, typeActivity: string) {
    const currentDate = getCurrentDate();
    const lastYearDate = getDateLastYear();

    return httpDashboard.get<CountCompetitorsResponse>(
      DASH.BASE +
        DASH.DATE_AFTER(lastYearDate) +
        DASH.DATE_BEFORE(currentDate) +
        DASH.ADDRESS_SETTLEMENT_ICONTAINS(settlement) +
        DASH.TYPE_ACTIVITY(typeActivity) +
        DASH.STATUS_AT +
        DASH.COUNT,
    );
  }

  async getCountQuarter(settlement: string, typeActivity: string) {
    const date = getDateLastQuarter();

    return httpDashboard.get<CountCompetitorsResponse>(
      DASH.BASE +
        DASH.DATE_AFTER(date) +
        DASH.ADDRESS_SETTLEMENT_ICONTAINS(settlement) +
        DASH.TYPE_ACTIVITY(typeActivity) +
        DASH.STATUS_AT +
        DASH.COUNT,
    );
  }

  async getCountOperating(settlement: string, typeActivity: string) {
    return httpDashboard.get<CountCompetitorsResponse>(
      DASH.BASE +
        DASH.ADDRESS_SETTLEMENT_ICONTAINS(settlement) +
        DASH.TYPE_ACTIVITY(typeActivity) +
        DASH.STATUS_AT +
        DASH.COUNT,
    );
  }

  async getDataByMonth(settlement: string, typeActivity: string) {
    const currentDate = getCurrentDate();
    const month = getPastMonthFromDate(6, new Date());

    return httpDashboard.get<ResponseColumnChart>(
      DASH.BASE +
        DASH.AGR_COUNT +
        DASH.GROUP_BY('company_date_registration__month') +
        DASH.ADDRESS_SETTLEMENT_ICONTAINS(settlement) +
        DASH.TYPE_ACTIVITY(typeActivity) +
        DASH.STATUS_AT +
        DASH.DATE_AFTER(month) +
        DASH.DATE_BEFORE(currentDate),
    );
  }

  async getDataByAge(settlement: string, typeActivity: string) {
    const currentDate = getCurrentDate();

    return httpDashboard.get<ResponseLineChart>(
      DASH.BASE +
        DASH.AGR_COUNT +
        DASH.GROUP_BY('company_date_registration__year') +
        DASH.ADDRESS_SETTLEMENT_ICONTAINS(settlement) +
        DASH.TYPE_ACTIVITY(typeActivity) +
        DASH.STATUS_AT +
        DASH.DATE_AFTER('2000-01-01') +
        DASH.DATE_BEFORE(currentDate),
    );
  }

  async getDataForDetailed(settlement: string, typeActivity: string) {
    return httpDashboard.get<ResponseDetailedTableCompetitors>(
      DASH.BASE +
        DASH.AGR_COUNT +
        DASH.ADDRESS_SETTLEMENT_ICONTAINS(settlement) +
        DASH.TYPE_ACTIVITY(typeActivity) +
        DASH.STATUS_AT +
        DASH.ORDERING('-company_date_registration') +
        DASH.IS_NULL_FALSE('company_date_registration'),
    );
  }
}

export default new CompetitorsService();
