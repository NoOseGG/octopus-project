import React, { useEffect, useState } from 'react';
import { useDashboardQuery } from '@app/hooks/useDashboardQuery';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { DASHBOARD } from '@app/services/legalEntityDashboard.service';

const PercentYear: React.FC = () => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const [percent, setPercent] = useState(undefined);
  const { data: lastYear, isLoading: isLoadingLastYear } = useDashboardQuery(
    DASHBOARD.MAIN_INFO.CREATED_PERCENT_LAST_YEAR,
    filters,
  );
  const { data: twoLastYear, isLoading: isLoadingTwoLastYear } = useDashboardQuery(
    DASHBOARD.MAIN_INFO.CREATED_PERCENT_TWO_LAST_YEAR,
    filters,
  );

  return <div></div>;
};

export default PercentYear;
