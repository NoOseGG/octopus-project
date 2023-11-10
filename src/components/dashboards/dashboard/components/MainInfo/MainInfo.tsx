import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Container } from '@app/components/dashboards/dashboard/components/MainInfo/MainInfoStyle';
import CountAll from '@app/components/dashboards/dashboard/components/MainInfo/components/CountAll/CountAll';
import CountYear from '@app/components/dashboards/dashboard/components/MainInfo/components/CountYear/CountYear';
import CountQuarter from '@app/components/dashboards/dashboard/components/MainInfo/components/CountQuarter/CountQuarter';
import CountOperating from '@app/components/dashboards/dashboard/components/MainInfo/components/CountOperating/CountOperating';

const MainInfo: React.FC = () => {
  const isDate = useAppSelector((state) => state.searchFilters.filters.isDate);

  return (
    <Container value={isDate}>
      <CountAll />
      <CountYear />
      <CountQuarter />
      <CountOperating />
    </Container>
  );
};

export default MainInfo;
