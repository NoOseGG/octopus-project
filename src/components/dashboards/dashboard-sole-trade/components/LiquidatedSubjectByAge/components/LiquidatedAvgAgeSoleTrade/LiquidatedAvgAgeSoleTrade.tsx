import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import {
  Title,
  Content,
  AverageAgeContainer,
} from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import { doGetLiquidatedByAgeAvgAgeSoleTrade } from '@app/store/slices/soleTradeDashboard/byAge/liquidated/LiquidatedAvgAgeSoleTradeSlice';

const LiquidatedAvgAge: React.FC = () => {
  const avgAge = useAppSelector((state) => state.liquidatedByAge.liquidateAvgAge.count);

  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetLiquidatedByAgeAvgAgeSoleTrade({ filters }));
  }, [dispatch, filters]);

  return (
    <AverageAgeContainer>
      <Title>Средний возраст ИП</Title>
      <Content>{avgAge?.toFixed(1)}</Content>
    </AverageAgeContainer>
  );
};

export default LiquidatedAvgAge;
