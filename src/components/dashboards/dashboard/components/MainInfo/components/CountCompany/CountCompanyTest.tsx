import React, { useEffect } from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Content, Title } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import { Skeleton } from 'antd';
import { formatNumberWithCommas } from '@app/utils/utils';
import legalEntityDashboardService, { MAIN_INFO } from '@app/services/legalEntityDashboard.service';
import { useDashboardQuery } from '@app/hooks/useDashboardQuery';
import { DashboardMainInfo } from '@app/interfaces/dashboard.interfaces';

type MyComponentProps = {
  type: MAIN_INFO;
};

const CountCompanyTest: React.FC<MyComponentProps> = ({ type }) => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  console.log(`count -> ${type.toString()}`);

  // const { data, isLoading } = useQuery({
  //   queryKey: ['countCompany', filters],
  //   queryFn: () => httpDashboard.get<ResponseMainInfo>(legalEntityDashboardService.getUrl(type, filters)),
  // });

  const { data, isLoading } = useDashboardQuery<DashboardMainInfo>(type, filters);

  useEffect(() => {
    console.log('ЗАПУСК Count Company');
  }, []);

  return (
    <>
      {isLoading ? (
        <Skeleton style={{ padding: 5 }} active />
      ) : (
        <Block>
          <Title>{legalEntityDashboardService.getTitle(type)}</Title>
          <Content>{formatNumberWithCommas(data?.count)}</Content>
        </Block>
      )}
    </>
  );
};

export default CountCompanyTest;
