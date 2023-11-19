import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import { doGetLiquidatedByAgeFrom10To20SoleTrade } from '@app/store/slices/soleTradeDashboard/byAge/liquidated/LiquidatedFrom10To20SoleTradeSlice';

const LiquidatedFrom10To20: React.FC = () => {
  const { age } = useAppSelector((state) => state.liquidatedByAgeSoleTrade.liquidateFrom10To20SoleTrade);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetLiquidatedByAgeFrom10To20SoleTrade({ filters }));
  }, [dispatch, filters]);

  return (
    <Block>
      <Title>от 10 до 20 лет</Title>
      <Content>{age}</Content>
    </Block>
  );
};

export default LiquidatedFrom10To20;
