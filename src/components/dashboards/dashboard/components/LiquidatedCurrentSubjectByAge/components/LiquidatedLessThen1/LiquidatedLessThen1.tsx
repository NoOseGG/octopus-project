import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import { doGetLiquidatedByAgeLessThen1 } from '@app/store/slices/legalEntityDashboard/byAge/liquidated/LiquidatedLessThen1Slice';

const LiquidatedLessThen1: React.FC = () => {
  const { age } = useAppSelector((state) => state.liquidatedByAge.liquidateLessThen1);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetLiquidatedByAgeLessThen1({ filters }));
  }, [dispatch, filters]);

  return (
    <Block>
      <Title>менее года</Title>
      <Content>{age}</Content>
    </Block>
  );
};

export default LiquidatedLessThen1;
