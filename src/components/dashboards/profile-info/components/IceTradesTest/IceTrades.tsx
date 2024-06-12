import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { IceTradeCustomer } from '@app/store/types/Subject';
import IceTradesByAge from '@app/components/dashboards/profile-info/components/IceTradesTest/IceTradesByAge/IceTradesByAge';
import IceTradesByMonth from '@app/components/dashboards/profile-info/components/IceTradesTest/IceTradesByMonth/IceTradesByMonth';

const IceTrades = () => {
  const icetradeCustomer = useAppSelector((state) => state.searchProfile.profile.icetrade_customer);
  const [allCount, setAllCount] = useState<number | undefined>(undefined);
  const [completed, setCompleted] = useState<number | undefined>(undefined);
  const [notCompleted, setNotCompleted] = useState<number | undefined>(undefined);

  useEffect(() => {
    setAllCount(getAllCount(icetradeCustomer));
    setCompleted(getCompleted(icetradeCustomer));
    setNotCompleted(getNotCompleted(icetradeCustomer));
  }, [icetradeCustomer]);

  return (
    <Container>
      <Title>Сведения о закупках, где компания выступает заказчиком</Title>
      <Info>
        <Item>
          <ItemTitle>Общее количество</ItemTitle>
          <ItemContent>{allCount}</ItemContent>
        </Item>
        {allCount && completed && (
          <Item>
            <ItemTitle>Призванных состоявщихся</ItemTitle>
            <ItemContent>
              {completed} ({((completed / allCount) * 100).toFixed()}%)
            </ItemContent>
          </Item>
        )}
        {allCount && notCompleted && (
          <Item>
            <ItemTitle>Не состоявшиеся, либо отсутсвует дата договора</ItemTitle>
            <ItemContent>
              {notCompleted} ({((notCompleted / allCount) * 100).toFixed()}%)
            </ItemContent>
          </Item>
        )}
      </Info>
      <ChartContainer>
        <IceTradesByAge icetrade={icetradeCustomer} />
        <IceTradesByMonth icetrade={icetradeCustomer} />
      </ChartContainer>
    </Container>
  );
};

export default IceTrades;

const Container = styled.div``;

const Title = styled.h2``;

const Info = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-evenly;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ItemTitle = styled.div`
  max-width: 250px;
  font-size: 18px;
  text-align: center;
`;

const ItemContent = styled.div`
  margin-top: auto;
  font-size: 40px;
`;

const ChartContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

const getAllCount = (icetrade: IceTradeCustomer[]): number => {
  return icetrade.length;
};

const getCompleted = (icetrade: IceTradeCustomer[]): number => {
  return icetrade.filter((item) => item.purchase_status === 'Состоялась' && item.contract_date).length;
};

const getNotCompleted = (icetrade: IceTradeCustomer[]): number => {
  return icetrade.filter((item) => item.purchase_status !== 'Состоялась' || !item.contract_date).length;
};
