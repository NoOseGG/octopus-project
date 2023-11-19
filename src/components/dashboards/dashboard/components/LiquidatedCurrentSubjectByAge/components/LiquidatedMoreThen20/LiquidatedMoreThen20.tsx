import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import { doGetLiquidatedByAgeMoreThen20 } from '@app/store/slices/legalEntityDashboard/byAge/liquidated/LiquidatedMoreThen20Slice';

const LiquidatedMoreThen20: React.FC = () => {
  const { age } = useAppSelector((state) => state.liquidatedByAge.liquidateMoreThen20);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetLiquidatedByAgeMoreThen20({ filters }));
  }, [dispatch, filters]);

  return (
    <Block>
      <Title>20 лет и более</Title>
      <Content>{age}</Content>
    </Block>
  );
};

export default LiquidatedMoreThen20;
