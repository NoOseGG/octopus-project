import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import { doGetTotalCountLiquidatedSoleTrade } from '@app/store/slices/soleTradeDashboard/mainInfo/liquidated/liquidatedSoleTradeAllSlice';

const LiquidatedAllSoleTrade: React.FC = () => {
  const filters = useAppSelector((state) => state.searchFilters.filters);

  const { count } = useAppSelector((state) => state.liquidatedMainInfoSoleTrade.liquidatedAllSoleTrade);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTotalCountLiquidatedSoleTrade({ filters }));
  }, [dispatch, filters]);

  return (
    <Block>
      <Title>Общее количество ликвидированных ИП</Title>
      <Content>{count}</Content>
    </Block>
  );
};

export default LiquidatedAllSoleTrade;
