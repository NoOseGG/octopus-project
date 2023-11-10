import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/components/MainInfo/MainInfoStyle';
import { doGetTotalCountOperatingCompany } from '@app/store/slices/legalEntityDashboard/mainInfo/createdOperatingSlice';
import { Skeleton } from 'antd';
import { getEntityName } from '@app/utils/utils';
import { DashboardProps } from '@app/components/dashboards/dashboard/DashboardTypes';

const CountOperating: React.FC<DashboardProps> = ({ legal_entity }) => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const entity = getEntityName(legal_entity);
  const { count, loading } = useAppSelector((state) => state.mainInfo.createdOperating);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTotalCountOperatingCompany({ filters, legal_entity }));
  }, [dispatch, filters, legal_entity]);

  return (
    <>
      {loading ? (
        <Skeleton style={{ padding: 5 }} active />
      ) : (
        <Block>
          <Title>Действующие {entity}</Title>
          <Content>{count}</Content>
        </Block>
      )}
    </>
  );
};

export default CountOperating;
