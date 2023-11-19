import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content, Percent } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import { Skeleton } from 'antd';
import { doGetTotalCountCreatedSoleTradeLastYear } from '@app/store/slices/soleTradeDashboard/mainInfo/created/createdSoleTradeYearSlice';
import { doCalculatePercentYearSoleTrade } from '@app/store/slices/soleTradeDashboard/mainInfo/created/calculateSoleTradePercentSlice';

const CountYearSoleTrade: React.FC = () => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const { count, loading } = useAppSelector((state) => state.mainInfoSoleTrade.createdYearSoleTrade);
  const percent = useAppSelector((state) => state.mainInfoSoleTrade.calculatePercentSoleTrade.percent);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTotalCountCreatedSoleTradeLastYear({ filters }));
    dispatch(doCalculatePercentYearSoleTrade({ filters }));
  }, [dispatch, filters]);

  return (
    <>
      {loading ? (
        <Skeleton style={{ padding: 5 }} active />
      ) : (
        <>
          {!filters.isDate && (
            <Block>
              <Title>Количество созданных ИП (год)</Title>
              <Content>
                {count} <Percent number={percent}>({percent}%)</Percent>
              </Content>
            </Block>
          )}
        </>
      )}
    </>
  );
};

export default CountYearSoleTrade;
