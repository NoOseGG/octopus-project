import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import { doGetLiquidatedByAgeMoreThen20SoleTrade } from '@app/store/slices/soleTradeDashboard/byAge/liquidated/LiquidatedMoreThen20SoleTradelice';

const LiquidatedMoreThen20: React.FC = () => {
  const { age } = useAppSelector((state) => state.liquidatedByAgeSoleTrade.liquidateMoreThen20SoleTrade);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetLiquidatedByAgeMoreThen20SoleTrade({ filters }));
  }, [dispatch, filters]);

  return (
    <Block>
      <Title>20 лет и более</Title>
      <Content>{age}</Content>
    </Block>
  );
};

export default LiquidatedMoreThen20;
