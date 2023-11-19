import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import { doGetLiquidatedByAgeFrom10To20 } from '@app/store/slices/legalEntityDashboard/byAge/liquidated/LiquidatedFrom10To20Slice';

const LiquidatedFrom10To20: React.FC = () => {
  const { age } = useAppSelector((state) => state.liquidatedByAge.liquidateFrom10To20);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetLiquidatedByAgeFrom10To20({ filters }));
  }, [dispatch, filters]);

  return (
    <Block>
      <Title>от 10 до 20 лет</Title>
      <Content>{age}</Content>
    </Block>
  );
};

export default LiquidatedFrom10To20;
