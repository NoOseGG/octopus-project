import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import { Skeleton } from 'antd';
import { doGetTotalCountCreatedSoleTrade } from '@app/store/slices/soleTradeDashboard/mainInfoSoleTrade/createdSoleTradeAllSlice';

const CountAllSoleTrade: React.FC = () => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const { count, loading } = useAppSelector((state) => state.mainInfoSoleTrade.createdQuarterSoleTrade);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTotalCountCreatedSoleTrade({ filters }));
  }, [dispatch, filters]);

  return (
    <>
      {!filters.isDate && (
        <>
          {loading ? (
            <Skeleton style={{ padding: 5 }} active />
          ) : (
            <Block>
              <Title>Общее количество созданных ИП</Title>
              <Content>{count}</Content>
            </Block>
          )}
        </>
      )}
    </>
  );
};

export default CountAllSoleTrade;
