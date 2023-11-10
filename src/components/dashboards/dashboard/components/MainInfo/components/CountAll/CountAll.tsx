import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { EntityType } from '@app/constants/Constants';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/components/MainInfo/MainInfoStyle';
import { doGetTotalCountCreated } from '@app/store/slices/legalEntityDashboard/mainInfo/createdAllSlice';
import { Skeleton } from 'antd';

type MyComponentProps = {
  legal_entity: EntityType;
};

const CountAll: React.FC<MyComponentProps> = ({ legal_entity }) => {
  const filters = useAppSelector((state) => state.searchFilters.filters);

  const { count, loading } = useAppSelector((state) => state.mainInfo.createdAll);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTotalCountCreated({ filters, legal_entity }));
  }, [dispatch, filters, legal_entity]);

  return (
    <>
      {loading ? (
        <Skeleton style={{ padding: 5 }} />
      ) : (
        <Block>
          <Title>Общее количество созданных компаний</Title>
          <Content>{count}</Content>
        </Block>
      )}
    </>
  );
};

export default CountAll;
