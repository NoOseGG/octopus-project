import { useQuery } from '@tanstack/react-query';

import { FiltersType } from '@app/store/slices/search/searchFiltersSlice';
import legalEntityDashboardService, { DASHBOARD_TYPE } from '@app/services/legalEntityDashboard.service';
import { httpDashboard } from '@app/api/http.api';

export const useDashboardQuery = <T>(type: DASHBOARD_TYPE, filters: FiltersType) => {
  return useQuery({
    queryKey: [type.toString(), filters],
    queryFn: () => httpDashboard.get<T>(legalEntityDashboardService.getUrl(type, filters)),
    select: ({ data }) => data,
    enabled: !!filters,
  });
};
