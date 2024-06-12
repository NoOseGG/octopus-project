import { useQuery } from '@tanstack/react-query';

import { FiltersType } from '@app/store/slices/search/searchFiltersSlice';
import legalEntityDashboardService, {
  DASHBOARD,
  DASHBOARD_TYPE,
} from '@app/services/legalEntityDashboard/legalEntityDashboard.service';
import { httpDashboard } from '@app/api/http.api';
import { DashboardLineChart } from '@app/interfaces/dashboard.interfaces';

export const useDashboardLineChartQuery = (type: DASHBOARD_TYPE, filters: FiltersType) => {
  console.log(`line char => ${type}`);
  return useQuery({
    queryKey: [type.toString(), filters],
    queryFn: () => httpDashboard.get<DashboardLineChart>(legalEntityDashboardService.getUrl(type, filters)),
    select: ({ data }) =>
      data.results.map((item) => {
        if (type === DASHBOARD.LINE_CHART.LIQUIDATED) {
        }
        return {
          year: item.group_fields.company_date_registration__year,
          value: item.Count,
        };
      }),
    enabled: !!filters,
  });
};
