import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import { doGetCurrentByAgeFrom5To10SoleTrade } from '@app/store/slices/soleTradeDashboard/currentByAgeSoleTrade/from5To10SoleTradeSlice';

const From5To10SoleTrade: React.FC = () => {
  const { age } = useAppSelector((state) => state.currentByAgeSoleTrade.from5To10SoleTrade);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetCurrentByAgeFrom5To10SoleTrade({ filters }));
  }, [dispatch, filters]);

  return (
    <Block>
      <Title>от 5 до 10 лет</Title>
      <Content>{age}</Content>
    </Block>
  );
};

export default From5To10SoleTrade;
