import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Container } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import CreatedCount from '@app/components/dashboards/dashboard/components/MainInfo/components/CountCompany/CreatedCount';
import { COUNT_TYPE, EntityType } from '@app/components/dashboards/dashboard/DashboardTypes';
import CountYear from '@app/components/dashboards/dashboard/components/MainInfo/components/CountYear/CountYear';

const MainInfo: React.FC = () => {
  const isDate = useAppSelector((state) => state.searchFilters.filters.isDate);

  return (
    <Container value={isDate}>
      <CreatedCount legalEntity={EntityType.LEGAL_ENTITY} countType={COUNT_TYPE.CREATED_ALL} />
      <CountYear />
      {/*<CreatedCount legalEntity={EntityType.LEGAL_ENTITY} dynamicPath={DynamicPath.CREATED_YEAR} />*/}
      <CreatedCount legalEntity={EntityType.LEGAL_ENTITY} countType={COUNT_TYPE.CREATED_QUARTER} />
      <CreatedCount legalEntity={EntityType.LEGAL_ENTITY} countType={COUNT_TYPE.CREATED_OPERATION} />
    </Container>
  );
};

export default MainInfo;
