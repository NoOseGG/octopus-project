import { useQuery } from '@tanstack/react-query';

import { FiltersType } from '@app/store/slices/search/searchFiltersSlice';
import legalEntityDashboardService, { DASHBOARD } from '@app/services/legalEntityDashboard.service';
import { httpDashboard } from '@app/api/http.api';

const useDashboardQuery = (type: DASHBOARD, filters: FiltersType) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['key'],
    queryFn: () => httpDashboard.get(legalEntityDashboardService.getUrl(type, filters)),
  });

  return { data, isLoading, error };
};
