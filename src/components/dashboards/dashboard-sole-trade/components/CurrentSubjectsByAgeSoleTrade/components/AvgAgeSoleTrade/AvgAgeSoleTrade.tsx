import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import {
  Title,
  Content,
  AverageAgeContainer,
} from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import { doGetCurrentByAgeAvgAgeSoleTrade } from '@app/store/slices/soleTradeDashboard/byAge/current/avgAgeSoleTradeSlice';

const AvgAgeSoleTrade: React.FC = () => {
  const avgAge = useAppSelector((state) => state.currentByAgeSoleTrade.avgAgeSoleTrade.count);

  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetCurrentByAgeAvgAgeSoleTrade({ filters }));
  }, [dispatch, filters]);

  return (
    <AverageAgeContainer>
      <Title>Средний возраст ИП</Title>
      <Content>{avgAge?.toFixed(1)}</Content>
    </AverageAgeContainer>
  );
};

export default AvgAgeSoleTrade;
