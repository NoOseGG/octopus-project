import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import styled from 'styled-components';
import CustomerInfo from '@app/components/dashboards/profile-info/components/IceTrades/components/CustomerInfo/CustomerInfo';

const IceTrades: React.FC = () => {
  return (
    <Container>
      <CustomerInfo />
    </Container>
  );
};

export default IceTrades;

const Container = styled.div``;
