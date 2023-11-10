import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/components/MainInfo/MainInfoStyle';
import { doGetTotalCountCreated } from '@app/store/slices/legalEntityDashboard/mainInfo/createdAllSlice';
import { Skeleton } from 'antd';
import { getEntityName } from '@app/utils/utils';
import { DashboardProps } from '@app/components/dashboards/dashboard/DashboardTypes';

const CountAll: React.FC<DashboardProps> = ({ legal_entity }) => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const entity = getEntityName(legal_entity);
  const { count, loading } = useAppSelector((state) => state.mainInfo.createdAll);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTotalCountCreated({ filters, legal_entity }));
  }, [dispatch, filters, legal_entity]);

  return (
    <>
      {loading ? (
        <Skeleton style={{ padding: 5 }} active />
      ) : (
        <Block>
          <Title>Общее количество созданных {entity}</Title>
          <Content>{count}</Content>
        </Block>
      )}
    </>
  );
};

export default CountAll;
