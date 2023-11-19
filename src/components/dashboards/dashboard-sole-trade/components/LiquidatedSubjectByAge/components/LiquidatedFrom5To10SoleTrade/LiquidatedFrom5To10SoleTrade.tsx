import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import { doGetLiquidatedByAgeFrom5To10SoleTrade } from '@app/store/slices/soleTradeDashboard/byAge/liquidated/LiquidatedFrom5To10SoleTradeSlice';

const LiquidatedFrom5To10: React.FC = () => {
  const { age } = useAppSelector((state) => state.liquidatedByAgeSoleTrade.liquidateFrom5To10SoleTrade);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetLiquidatedByAgeFrom5To10SoleTrade({ filters }));
  }, [dispatch, filters]);

  return (
    <Block>
      <Title>от 5 до 10 лет</Title>
      <Content>{age}</Content>
    </Block>
  );
};

export default LiquidatedFrom5To10;
