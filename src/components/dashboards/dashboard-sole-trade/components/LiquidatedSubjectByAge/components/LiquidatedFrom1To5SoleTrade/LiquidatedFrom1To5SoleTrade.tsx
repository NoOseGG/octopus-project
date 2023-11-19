import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import { doGetLiquidatedByAgeFrom1To5SoleTrade } from '@app/store/slices/soleTradeDashboard/byAge/liquidated/LiquidatedFrom1To5SoleTradeSlice';

const LiquidatedFrom1To5: React.FC = () => {
  const { age } = useAppSelector((state) => state.liquidatedByAge.liquidateFrom1To5);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetLiquidatedByAgeFrom1To5SoleTrade({ filters }));
  }, [dispatch, filters]);

  return (
    <Block>
      <Title>от 1 до 5 лет</Title>
      <Content>{age}</Content>
    </Block>
  );
};

export default LiquidatedFrom1To5;
