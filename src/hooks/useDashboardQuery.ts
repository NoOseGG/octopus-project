import { useQuery } from '@tanstack/react-query';

import { FiltersType } from '@app/store/slices/search/searchFiltersSlice';
import legalEntityDashboardService, { DASHBOARD_TYPE } from '@app/services/legalEntityDashboard.service';
import { httpDashboard } from '@app/api/http.api';

export const useDashboardQuery = (type: DASHBOARD_TYPE, filters: FiltersType) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [legalEntityDashboardService.getQueryKey(type), filters],
    queryFn: () => httpDashboard.get(legalEntityDashboardService.getUrl(type, filters)),
  });

  return { data, isLoading, error };
};
