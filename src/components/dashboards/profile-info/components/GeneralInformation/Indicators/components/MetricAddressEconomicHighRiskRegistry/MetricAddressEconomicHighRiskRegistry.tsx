import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import styled from 'styled-components';

const MetricAddressEconomicHighRiskRegistry: React.FC = () => {
  const metric_address_economic_high_risk_registry = useAppSelector(
    (state) => state.searchProfile.profile.metric_address_economic_high_risk_registry,
  );

  return (
    <Container>
      <div>Адрес: {metric_address_economic_high_risk_registry[0]?.address_full}</div>
      <div>Описание: {metric_address_economic_high_risk_registry[0]?.address_description}</div>
    </Container>
  );
};

export default MetricAddressEconomicHighRiskRegistry;

const Container = styled.div`
  width: 100%;
`;
