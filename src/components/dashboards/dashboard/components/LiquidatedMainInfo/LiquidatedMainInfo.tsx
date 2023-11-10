import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { DashboardProps } from '@app/components/dashboards/dashboard/DashboardTypes';
import LiquidatedAll from '@app/components/dashboards/dashboard/components/LiquidatedMainInfo/components/LiquidatedAll/LiquidatedAll';
import LiquidatedYear from '@app/components/dashboards/dashboard/components/LiquidatedMainInfo/components/LiquidatedYear/LiquidatedYear';
import LiquidatedQuarter from '@app/components/dashboards/dashboard/components/LiquidatedMainInfo/components/LiquidatedQuarter/LiquidatedQuarter';
import { Container } from '@app/components/dashboards/dashboard/components/LiquidatedMainInfo/LiquidatedMainInfoStyle';

const LiquidatedMainInfo: React.FC<DashboardProps> = ({ legal_entity }) => {
  const isDate = useAppSelector((state) => state.searchFilters.filters.isDate);
  return (
    <Container value={isDate}>
      <LiquidatedAll legal_entity={legal_entity} />
      <LiquidatedYear legal_entity={legal_entity} />
      <LiquidatedQuarter legal_entity={legal_entity} />
    </Container>
  );
};

export default LiquidatedMainInfo;
