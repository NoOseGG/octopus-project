import React from 'react';

import styled from 'styled-components';

import SubscribeInfo from '@app/components/dashboards/mainLanding/Tariffs/Modal/Form/SubscribeInfo/SubscribeInfo';
import SubscribeForm from '@app/components/dashboards/mainLanding/Tariffs/Modal/Form/SubscribeForm/SubscribeForm';

type GetSubscribeProps = {
  countMonth: number;
  countUser: number;
  price: number;
  onSetIsOpen: (value: boolean) => void;
};

const GetSubscribe: React.FC<GetSubscribeProps> = ({ countMonth, countUser, price, onSetIsOpen }) => {
  return (
    <GetDemoContainer>
      <Title>Оформление подписки</Title>
      <SubTitle>После оформления подписки, с Вами в ближайшие сроки свяжется специалист.</SubTitle>
      <DemoContainer>
        <SubscribeInfo countMonth={countMonth} countUser={countUser} price={price} />
        <SubscribeForm countMonth={countMonth} countUser={countUser} price={price} onSetIsOpen={onSetIsOpen} />
      </DemoContainer>
    </GetDemoContainer>
  );
};

export default GetSubscribe;

const GetDemoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const DemoContainer = styled.div`
  max-width: 900px;
  height: auto;
  padding: 20px 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  border-radius: 12px;
  gap: 20px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 56px;
  text-align: center;
  color: #000;
  font-weight: 800;
  margin-bottom: 0;

  @media (max-width: 1200px) {
    font-size: 40px;
  }

  @media (max-width: 800px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;

const SubTitle = styled.div`
  font-size: 18px;
  text-align: center;
  color: #000;
  font-weight: 500;
  text-decoration: underline;

  @media (max-width: 1200px) {
    font-size: 16px;
  }
`;
