import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import { doGetCurrentByAgeFrom10To20SoleTrade } from '@app/store/slices/soleTradeDashboard/byAge/current/from10To20SoleTradeSlice';

const From10To20SoleTrade: React.FC = () => {
  const { age } = useAppSelector((state) => state.currentByAgeSoleTrade.from10To20SoleTrade);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetCurrentByAgeFrom10To20SoleTrade({ filters }));
  }, [dispatch, filters]);

  return (
    <Block>
      <Title>от 10 до 20 лет</Title>
      <Content>{age}</Content>
    </Block>
  );
};

export default From10To20SoleTrade;
