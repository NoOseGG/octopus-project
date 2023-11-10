import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import LiquidatedAll from '@app/components/dashboards/dashboard/components/LiquidatedMainInfo/components/LiquidatedAll/LiquidatedAll';
import LiquidatedYear from '@app/components/dashboards/dashboard/components/LiquidatedMainInfo/components/LiquidatedYear/LiquidatedYear';
import LiquidatedQuarter from '@app/components/dashboards/dashboard/components/LiquidatedMainInfo/components/LiquidatedQuarter/LiquidatedQuarter';
import { Container } from '@app/components/dashboards/dashboard/components/LiquidatedMainInfo/LiquidatedMainInfoStyle';

const LiquidatedMainInfo: React.FC = () => {
  const isDate = useAppSelector((state) => state.searchFilters.filters.isDate);
  return (
    <Container value={isDate}>
      <LiquidatedAll />
      <LiquidatedYear />
      <LiquidatedQuarter />
    </Container>
  );
};

export default LiquidatedMainInfo;
