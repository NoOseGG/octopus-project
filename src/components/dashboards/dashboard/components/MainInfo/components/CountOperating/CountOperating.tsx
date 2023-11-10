import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { EntityType } from '@app/constants/Constants';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/components/MainInfo/MainInfoStyle';
import { doGetTotalCountOperatingCompany } from '@app/store/slices/legalEntityDashboard/mainInfo/createdOperatingSlice';
import { Skeleton } from 'antd';

type MyComponentProps = {
  legal_entity: EntityType;
};

const CountOperating: React.FC<MyComponentProps> = ({ legal_entity }) => {
  const filters = useAppSelector((state) => state.searchFilters.filters);

  const { count, loading } = useAppSelector((state) => state.mainInfo.createdOperating);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTotalCountOperatingCompany({ filters, legal_entity }));
  }, [dispatch, filters, legal_entity]);

  return (
    <>
      {loading ? (
        <Skeleton style={{ padding: 5 }} />
      ) : (
        <Block>
          <Title>Действующие компании</Title>
          <Content>{count}</Content>
        </Block>
      )}
    </>
  );
};

export default CountOperating;
