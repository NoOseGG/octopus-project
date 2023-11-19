import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import { doGetTotalCountLiquidated } from '@app/store/slices/legalEntityDashboard/mainInfo/liquidated/liquidatedAllSlice';
import { Skeleton } from 'antd';

const LiquidatedAll: React.FC = () => {
  const filters = useAppSelector((state) => state.searchFilters.filters);

  const { count, loading } = useAppSelector((state) => state.liquidatedMainInfo.liquidatedAll);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTotalCountLiquidated({ filters }));
  }, [dispatch, filters]);

  return (
    <>
      {loading ? (
        <Skeleton style={{ padding: 5 }} active />
      ) : (
        <Block>
          <Title>Общее количество ликвидированных компаний</Title>
          <Content>{count}</Content>
        </Block>
      )}
    </>
  );
};

export default LiquidatedAll;
