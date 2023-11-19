import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import { doGetCurrentByAgeLessThen1SoleTrade } from '@app/store/slices/soleTradeDashboard/byAge/current/lessThen1SoleTradeSlice';

const LessThen1SoleTrade: React.FC = () => {
  const { age } = useAppSelector((state) => state.currentByAgeSoleTrade.lessThen1SoleTrade);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetCurrentByAgeLessThen1SoleTrade({ filters }));
  }, [dispatch, filters]);

  return (
    <Block>
      <Title>менее года</Title>
      <Content>{age}</Content>
    </Block>
  );
};

export default LessThen1SoleTrade;
