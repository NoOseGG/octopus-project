import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Container } from '@app/components/dashboards/dashboard/components/LiquidatedMainInfo/LiquidatedMainInfoStyle';
import LiquidatedAllSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/LiquidatedMainInfoSoleTrade/components/LiquidatedAllSoleTrade/LiquidatedAllSoleTrade';
import LiquidatedYearSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/LiquidatedMainInfoSoleTrade/components/LiquidatredYearSoleTrade/LiquidatedYearSoleTrade';
import LiquidatedQuarterSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/LiquidatedMainInfoSoleTrade/components/LiquidatedQuarterSoleTrade/LiquidatedQuarterSoleTrade';

const LiquidatedMainInfoSoleTrade: React.FC = () => {
  const isDate = useAppSelector((state) => state.searchFilters.filters.isDate);
  return (
    <Container value={isDate}>
      <LiquidatedAllSoleTrade />
      <LiquidatedYearSoleTrade />
      <LiquidatedQuarterSoleTrade />
    </Container>
  );
};

export default LiquidatedMainInfoSoleTrade;
