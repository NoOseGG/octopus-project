import React, { useEffect, useState } from 'react';
import { useDashboardQuery } from '@app/hooks/useDashboardQuery';
import { useAppSelector } from '@app/hooks/reduxHooks';

import { Percent } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';

import { MAIN_INFO } from '@app/services/legalEntityDashboard.service';
import { getCurrentDate, getDateLastYear } from '@app/utils/utils';
import { Popover, Skeleton } from 'antd';
import { getStatusForPercent } from '@app/components/dashboards/dashboard/components/MainInfo/components/CountYear/CountYearTypes';
import { DashboardMainInfo } from '@app/interfaces/dashboard.interfaces';

type MyComponentProps = {
  percentLastYear: MAIN_INFO;
  percentTwoLastYear: MAIN_INFO;
};

const PercentYear: React.FC<MyComponentProps> = ({ percentLastYear, percentTwoLastYear }) => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const [percent, setPercent] = useState(0);
  const { data: lastYearData, isLoading: isLoadingLastYear } = useDashboardQuery<DashboardMainInfo>(
    percentLastYear,
    filters,
  );
  const { data: twoLastYearData, isLoading: isLoadingTwoLastYear } = useDashboardQuery<DashboardMainInfo>(
    percentTwoLastYear,
    filters,
  );
  const currentDate = getCurrentDate(true);
  const lastYearDate = getDateLastYear(1, true);
  const twoLastYearDate = getDateLastYear(2, true);

  useEffect(() => {
    if (!!lastYearData && !!twoLastYearData) {
      const percent = (((lastYearData.count - twoLastYearData.count) / lastYearData.count) * 100).toFixed(2);
      setPercent(parseInt(percent, 10));
    }
  }, [lastYearData, twoLastYearData]);

  return (
    <>
      {isLoadingLastYear && isLoadingTwoLastYear ? (
        <Skeleton.Button style={{ marginTop: 10 }} active={true} size={'small'} shape={'circle'} />
      ) : (
        <Popover
          trigger={'hover'}
          content={`Отношение количества ${getStatusForPercent(
            percent,
          )} по отношению к прошлому году: (${twoLastYearDate} - ${lastYearDate}) к (${lastYearDate} - ${currentDate})`}
        >
          <Percent number={percent}>({percent}%)</Percent>
        </Popover>
      )}
    </>
  );
};

export default PercentYear;
