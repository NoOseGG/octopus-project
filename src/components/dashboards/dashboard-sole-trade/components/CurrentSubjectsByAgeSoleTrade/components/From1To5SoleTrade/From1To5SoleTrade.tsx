import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import { doGetCurrentByAgeFrom1To5SoleTrade } from '@app/store/slices/soleTradeDashboard/byAge/current/from1To5SoleTradeSlice';

const From1To5SoleTrade: React.FC = () => {
  const { age } = useAppSelector((state) => state.currentByAgeSoleTrade.from1To5SoleTrade);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetCurrentByAgeFrom1To5SoleTrade({ filters }));
  }, [dispatch, filters]);

  return (
    <Block>
      <Title>от 1 до 5 лет</Title>
      <Content>{age}</Content>
    </Block>
  );
};

export default From1To5SoleTrade;
