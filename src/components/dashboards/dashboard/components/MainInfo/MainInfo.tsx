import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { EntityType } from '@app/constants/Constants';
import { Container } from '@app/components/dashboards/dashboard/components/MainInfo/MainInfoStyle';
import CountAll from '@app/components/dashboards/dashboard/components/MainInfo/components/CountAll/CountAll';
import CountYear from '@app/components/dashboards/dashboard/components/MainInfo/components/CountYear/CountYear';
import CountQuarter from '@app/components/dashboards/dashboard/components/MainInfo/components/CountQuarter/CountQuarter';
import CountOperating from '@app/components/dashboards/dashboard/components/MainInfo/components/CountOperating/CountOperating';

type MyComponentProps = {
  legal_entity: EntityType;
};

const MainInfo: React.FC<MyComponentProps> = ({ legal_entity }) => {
  const isDate = useAppSelector((state) => state.searchFilters.filters.isDate);

  return (
    <Container value={isDate}>
      <CountAll legal_entity={legal_entity} />
      <CountYear legal_entity={legal_entity} />
      <CountQuarter legal_entity={legal_entity} />
      <CountOperating legal_entity={legal_entity} />
    </Container>
  );
};

export default MainInfo;
