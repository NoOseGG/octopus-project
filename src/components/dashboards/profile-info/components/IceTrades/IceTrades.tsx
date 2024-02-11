import React from 'react';
import styled from 'styled-components';
import CustomerInfo from '@app/components/dashboards/profile-info/components/IceTrades/components/CustomerInfo/CustomerInfo';
import ListOfSuppliers from '@app/components/dashboards/profile-info/components/IceTrades/components/ListOfSuppliers/ListOfSuppliers';
import ListOfProducts from '@app/components/dashboards/profile-info/components/IceTrades/components/ListOfProducts/ListOfProducts';
import HistoryCompletedPurchases from '@app/components/dashboards/profile-info/components/IceTrades/components/HistoryCompletedPurchases/HistoryCompletedPurchases';
import HistoryNotCompletedPurchases from '@app/components/dashboards/profile-info/components/IceTrades/components/HistoryNotCompletedPurchases/HistoryNotCompletedPurchases';

const IceTrades: React.FC = () => {
  return (
    <Container>
      <Title>Заказчик</Title>
      <CustomerInfo />
      <div style={{ display: 'flex', gap: 10, marginLeft: 10, marginRight: 10, marginTop: 10 }}>
        <ListOfSuppliers />
        <ListOfProducts />
      </div>
      <HistoryCompletedPurchases />
      <HistoryNotCompletedPurchases />
      <Title>Поставщик</Title>
    </Container>
  );
};

export default IceTrades;

const Container = styled.div``;

const Title = styled.h2`
  font-size: 28px;
  text-align: center;
`;
