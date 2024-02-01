import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IceTradeCustomer } from '@app/store/types/Subject';
import { useAppSelector } from '@app/hooks/reduxHooks';

const CustomerInfo: React.FC = () => {
  const iceTradeCustomer = useAppSelector((state) => state.searchProfile.profile.icetrade_customer);
  const [customerCount, setCustomerCount] = useState(0);
  const [concludedCount, setConcludedCount] = useState(0);
  const [totalValueBYN, setTotalValueBYN] = useState(0);
  const [totalValueUSD, setTotalValueUSD] = useState(0);

  useEffect(() => {
    setCustomerCount(getCustomerCount(iceTradeCustomer));
    setConcludedCount(getConcludedCount(iceTradeCustomer));
    setTotalValueBYN(getTotalValueBYN(iceTradeCustomer));
    setTotalValueUSD(getTotalValueUSD(iceTradeCustomer));
  }, [iceTradeCustomer]);

  return (
    <Container>
      <Count>
        <Title>Общее количество заявок</Title>
        <Content>{customerCount}</Content>
      </Count>
      <Count>
        <Title>Количество заключенных контрактов</Title>
        <Content>{concludedCount}</Content>
      </Count>
      <Count>
        <Title>Общая стоимость заключенных контрактов (BYN)</Title>
        <Content>{totalValueBYN.toFixed()}</Content>
      </Count>
      <Count>
        <Title>Общая стоимость заключенных контрактов (USD)</Title>
        <Content>{totalValueUSD.toFixed()}</Content>
      </Count>
    </Container>
  );
};

export default CustomerInfo;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Count = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 16px;
  text-align: center;
`;

const Content = styled.div`
  font-size: 26px;
`;

const getCustomerCount = (iceTrade: IceTradeCustomer[]): number => {
  return iceTrade.length;
};

const getConcludedCount = (iceTrade: IceTradeCustomer[]): number => {
  return iceTrade.filter((item) => item.purchase_status === 'Состоялась').length;
};

const getTotalValueBYN = (iceTrade: IceTradeCustomer[]): number => {
  return iceTrade.reduce((acc, item) => {
    // Проверка на null перед добавлением к аккумулятору
    if (item.total_price_purchase_byn !== null && item.purchase_status === 'Состоялась') {
      acc += item.total_price_purchase_byn;
    }
    return acc;
  }, 0);
};

const getTotalValueUSD = (iceTrade: IceTradeCustomer[]): number => {
  return iceTrade.reduce((acc, item) => {
    // Проверка на null перед добавлением к аккумулятору
    if (item.total_price_purchase_usd !== null && item.purchase_status === 'Состоялась') {
      acc += item.total_price_purchase_usd;
    }
    return acc;
  }, 0);
};
