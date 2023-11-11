import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import { doGetCurrentByAgeMoreThen20SoleTrade } from '@app/store/slices/soleTradeDashboard/currentByAgeSoleTrade/moreThen20SoleTradeSlice';

const MoreThen20: React.FC = () => {
  const { age } = useAppSelector((state) => state.currentByAgeSoleTrade.moreThen20SoleTrade);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetCurrentByAgeMoreThen20SoleTrade({ filters }));
  }, [dispatch, filters]);

  return (
    <Block>
      <Title>20 лет и более</Title>
      <Content>{age}</Content>
    </Block>
  );
};

export default MoreThen20;
