import React from 'react';
import styled from 'styled-components';
import CustomerInfo from '@app/components/dashboards/profile-info/components/IceTrades/components/CustomerInfo/CustomerInfo';
import ListOfSuppliers from '@app/components/dashboards/profile-info/components/IceTrades/components/ListOfSuppliers/ListOfSuppliers';
import ListOfProducts from '@app/components/dashboards/profile-info/components/IceTrades/components/ListOfProducts/ListOfProducts';
import HistoryCompletedPurchases from '@app/components/dashboards/profile-info/components/IceTrades/components/HistoryCompletedPurchases/HistoryCompletedPurchases';

const IceTrades: React.FC = () => {
  return (
    <Container>
      <CustomerInfo />
      <div style={{ display: 'flex', gap: 10, marginLeft: 10, marginRight: 10, marginTop: 10 }}>
        <ListOfSuppliers />
        <ListOfProducts />
      </div>
      <HistoryCompletedPurchases />
    </Container>
  );
};

export default IceTrades;

const Container = styled.div``;
