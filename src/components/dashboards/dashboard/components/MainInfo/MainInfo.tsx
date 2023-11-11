import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Container } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import CreatedCount from '@app/components/dashboards/dashboard/components/MainInfo/components/CountCompany/CreatedCount';
import { DynamicPath, EntityType } from '@app/components/dashboards/dashboard/DashboardTypes';

const MainInfo: React.FC = () => {
  const isDate = useAppSelector((state) => state.searchFilters.filters.isDate);

  return (
    <Container value={isDate}>
      <CreatedCount legalEntity={EntityType.LEGAL_ENTITY} dynamicPath={DynamicPath.CREATED_ALL} />
      <CreatedCount legalEntity={EntityType.LEGAL_ENTITY} dynamicPath={DynamicPath.CREATED_YEAR} />
      <CreatedCount legalEntity={EntityType.LEGAL_ENTITY} dynamicPath={DynamicPath.CREATED_QUARTER} />
      <CreatedCount legalEntity={EntityType.LEGAL_ENTITY} dynamicPath={DynamicPath.CREATED_OPERATION} />
    </Container>
  );
};

export default MainInfo;
