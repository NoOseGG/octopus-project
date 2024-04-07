import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Skeleton } from 'antd';

import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';

import { useDashboardQuery } from '@app/hooks/useDashboardQuery';
import { formatNumberWithCommas, getCurrentDate, getDateLastYear } from '@app/utils/utils';
import legalEntityDashboardService, {
  MAIN_INFO,
} from '@app/services/legalEntityDashboard/legalEntityDashboard.service';
import PercentYear from '@app/components/dashboards/dashboard/components/MainInfo/components/PercentYear/PercentYear';
import { DashboardMainInfo } from '@app/interfaces/dashboard.interfaces';

export type MyComponentProps = {
  countYear: MAIN_INFO;
  percentLastYear: MAIN_INFO;
  percentTwoLastYear: MAIN_INFO;
};

const CountYearTest: React.FC<MyComponentProps> = ({ countYear, percentLastYear, percentTwoLastYear }) => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const { data, isLoading } = useDashboardQuery<DashboardMainInfo>(countYear, filters);

  return (
    <>
      {isLoading ? (
        <Skeleton style={{ padding: 5 }} active />
      ) : (
        <>
          {!filters.isDate && (
            <Block>
              <Title>{legalEntityDashboardService.getTitle(countYear)}</Title>
              <Title>
                ({getDateLastYear(1, true)} - {getCurrentDate(true)})
              </Title>
              <Content>
                <div>
                  {formatNumberWithCommas(data?.count)}{' '}
                  <PercentYear percentLastYear={percentLastYear} percentTwoLastYear={percentTwoLastYear} />
                </div>
              </Content>
            </Block>
          )}
        </>
      )}
    </>
  );
};

export default CountYearTest;
