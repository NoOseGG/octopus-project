import { DASH } from '@app/constants/enums/Dashboards';
import { CountCompetitorsResponse, ResponseColumnChart } from '@app/interfaces/interfaces';
import { httpDashboard } from '@app/api/http.api';
import { getCurrentDate, getDateLastQuarter, getDateLastYear, getPastMonthFromDate } from '@app/utils/utils';

class CompetitorsService {
  async getCountAll(settlement: string, typeActivity: string) {
    return httpDashboard.get<CountCompetitorsResponse>(
      DASH.BASE + DASH.ADDRESS_SETTLEMENT_ICONTAINS(settlement) + DASH.TYPE_ACTIVITY(typeActivity) + DASH.COUNT,
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
    const month = getPastMonthFromDate(5, new Date());

    return httpDashboard.get<ResponseColumnChart>(
      DASH.BASE +
        DASH.AGR_COUNT +
        DASH.GROUP_BY('company_date_registration__month') +
        DASH.ADDRESS_SETTLEMENT_ICONTAINS(settlement) +
        DASH.TYPE_ACTIVITY(typeActivity) +
        DASH.DATE_AFTER(month) +
        DASH.DATE_BEFORE(currentDate),
    );
  }
}

export default new CompetitorsService();
