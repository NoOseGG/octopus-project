import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import styled from 'styled-components';
import { Badge } from 'antd';

const MetricAddressEconomicHighRiskRegistry: React.FC = () => {
  const metric_address_economic_high_risk_registry = useAppSelector(
    (state) => state.searchProfile.profile.metric_address_economic_high_risk_registry,
  );

  return (
    <Container>
      <Badge status="processing" color={'green'} count={5} style={{ width: '100%', textAlign: 'center' }} />
      <Text>{metric_address_economic_high_risk_registry[0]?.address_description}</Text>
    </Container>
  );
};

export default MetricAddressEconomicHighRiskRegistry;

const Container = styled.div`
  max-width: 400px;
`;

const Text = styled.div`
  font-size: 10px;
  text-align: center;
`;
