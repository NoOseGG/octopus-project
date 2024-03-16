import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  IceTradesType,
  IceTradeNamesEnum,
} from '@app/components/dashboards/profile-info/components/IceTrades/types/IceTradeTypes';
import { formatNumberWithCommas } from '@app/utils/utils';

type MyComponentProps = {
  iceTrade: IceTradesType;
  iceTradeNamesEnum: IceTradeNamesEnum;
};

const Info: React.FC<MyComponentProps> = ({ iceTrade, iceTradeNamesEnum }) => {
  const [customerCount, setCustomerCount] = useState(0);
  const [concludedCount, setConcludedCount] = useState(0);
  const [totalValueBYN, setTotalValueBYN] = useState(0);
  const [totalValueUSD, setTotalValueUSD] = useState(0);

  useEffect(() => {
    setCustomerCount(getCustomerCount(iceTrade));
    setConcludedCount(getConcludedCount(iceTrade));
    setTotalValueBYN(getTotalValueBYN(iceTrade));
    setTotalValueUSD(getTotalValueUSD(iceTrade));
  }, [iceTrade]);

  return (
    <Container>
      <TitleName>{iceTradeNamesEnum}</TitleName>
      <CustomerInfoContainer>
        <Count>
          <Title>Общее количество заявок</Title>
          <Content>{formatNumberWithCommas(customerCount)}</Content>
        </Count>
        <Count>
          <Title>Количество заключенных контрактов</Title>
          <Content>{formatNumberWithCommas(concludedCount)}</Content>
        </Count>
        <Count>
          <Title>Общая стоимость заключенных контрактов (BYN)</Title>
          <Content>{formatNumberWithCommas(Number(totalValueBYN.toFixed()))}</Content>
        </Count>
        <Count>
          <Title>Общая стоимость заключенных контрактов (USD)</Title>
          <Content>{formatNumberWithCommas(Number(totalValueUSD.toFixed()))}</Content>
        </Count>
      </CustomerInfoContainer>
    </Container>
  );
};

export default Info;

const TitleName = styled.h2`
  font-size: 36px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const CustomerInfoContainer = styled.div`
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

const getCustomerCount = (iceTrade: IceTradesType): number => {
  return iceTrade.length;
};

const getConcludedCount = (iceTrade: IceTradesType): number => {
  return iceTrade.filter((item) => item.purchase_status === 'Состоялась').length;
};

const getTotalValueBYN = (iceTrade: IceTradesType): number => {
  return iceTrade.reduce((acc, item) => {
    // Проверка на null перед добавлением к аккумулятору
    if (item.total_price_purchase_byn !== null && item.purchase_status === 'Состоялась') {
      acc += item.total_price_purchase_byn;
    }
    return acc;
  }, 0);
};

const getTotalValueUSD = (iceTrade: IceTradesType): number => {
  return iceTrade.reduce((acc, item) => {
    // Проверка на null перед добавлением к аккумулятору
    if (item.total_price_purchase_usd !== null && item.purchase_status === 'Состоялась') {
      acc += item.total_price_purchase_usd;
    }
    return acc;
  }, 0);
};
