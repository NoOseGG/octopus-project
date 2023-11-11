import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Container } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import CreatedCount from '@app/components/dashboards/dashboard/components/MainInfo/components/CountCompany/CreatedCount';
import { DynamicPath, EntityType } from '@app/components/dashboards/dashboard/DashboardTypes';
import CountYearSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/mainInfoSoleTrade/components/CountYearSoleTrade/CountYearSoleTrade';

const MainInfoSoleTrade: React.FC = () => {
  const isDate = useAppSelector((state) => state.searchFilters.filters.isDate);

  return (
    <Container value={isDate}>
      <CreatedCount legalEntity={EntityType.SOLE_TRADE} dynamicPath={DynamicPath.CREATED_SOLE_TRADE_ALL} />
      <CountYearSoleTrade />
      {/*<CreatedCount legalEntity={EntityType.SOLE_TRADE} dynamicPath={DynamicPath.CREATED_SOLE_TRADE_YEAR} />*/}
      <CreatedCount legalEntity={EntityType.SOLE_TRADE} dynamicPath={DynamicPath.CREATED_SOLE_TRADE_QUARTER} />
      <CreatedCount legalEntity={EntityType.SOLE_TRADE} dynamicPath={DynamicPath.CREATED_SOLE_TRADE_OPERATION} />
    </Container>
  );
};

export default MainInfoSoleTrade;
