import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import { Skeleton } from 'antd';
import { doGetTotalCountSoleTradeOperatingCompany } from '@app/store/slices/soleTradeDashboard/mainInfoSoleTrade/createdSoleTradeOperatingSlice';

const CountOperatingSoleTrade: React.FC = () => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const { count, loading } = useAppSelector((state) => state.mainInfoSoleTrade.createdOperatingSoleTrade);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTotalCountSoleTradeOperatingCompany({ filters }));
  }, [dispatch, filters]);

  return (
    <>
      {loading ? (
        <Skeleton style={{ padding: 5 }} active />
      ) : (
        <Block>
          <Title>Действующие ИП</Title>
          <Content>{count}</Content>
        </Block>
      )}
    </>
  );
};

export default CountOperatingSoleTrade;
