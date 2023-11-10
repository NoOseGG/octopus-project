import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/components/MainInfo/MainInfoStyle';
import { doGetTotalCountOperatingCompany } from '@app/store/slices/legalEntityDashboard/mainInfo/createdOperatingSlice';
import { Skeleton } from 'antd';

const CountOperating: React.FC = () => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const { count, loading } = useAppSelector((state) => state.mainInfo.createdOperating);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTotalCountOperatingCompany({ filters }));
  }, [dispatch, filters]);

  return (
    <>
      {loading ? (
        <Skeleton style={{ padding: 5 }} active />
      ) : (
        <Block>
          <Title>Действующие компаний</Title>
          <Content>{count}</Content>
        </Block>
      )}
    </>
  );
};

export default CountOperating;
