import { DASH } from '@app/constants/enums/Dashboards';
import { CountCompetitorsResponse } from '@app/interfaces/interfaces';
import { httpDashboard } from '@app/api/http.api';
import { getCurrentDate, getDateLastQuarter, getDateLastYear } from '@app/utils/utils';

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
}

export default new CompetitorsService();
