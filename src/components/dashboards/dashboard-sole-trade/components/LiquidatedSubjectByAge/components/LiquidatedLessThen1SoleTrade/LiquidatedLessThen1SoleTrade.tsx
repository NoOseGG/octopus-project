import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import { doGetLiquidatedByAgeLessThen1SoleTrade } from '@app/store/slices/soleTradeDashboard/liquidatedByAgeSoleTrade/LiquidatedLessThen1SoleTradeSlice';

const LiquidatedLessThen1: React.FC = () => {
  const { age } = useAppSelector((state) => state.liquidatedByAgeSoleTrade.liquidateLessThen1SoleTrade);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetLiquidatedByAgeLessThen1SoleTrade({ filters }));
  }, [dispatch, filters]);

  return (
    <Block>
      <Title>менее года</Title>
      <Content>{age}</Content>
    </Block>
  );
};

export default LiquidatedLessThen1;
