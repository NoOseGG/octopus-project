import React from 'react';
import styled from 'styled-components';
import { Timeline } from 'antd';
import { getWordEnding } from '@app/utils/utils';

type SubscribeInfoProps = {
  countMonth: number;
  countUser: number;
  price: number;
};

const SubscribeInfo: React.FC<SubscribeInfoProps> = ({ countMonth, countUser, price }) => {
  return (
    <SubscribeInfoContainer>
      <Title>Сумма к оплате:</Title>
      <Timeline style={{ paddingLeft: 20, marginBottom: 0 }}>
        <Timeline.Item color={'green'}>{price} рублей</Timeline.Item>
      </Timeline>
      <Title>Срок доступа:</Title>
      <Timeline style={{ paddingLeft: 20, marginBottom: 0 }}>
        <Timeline.Item color={'green'}>
          Доступ на {countMonth} {getWordEnding(countMonth, ['месяц', 'месяца', 'месяцев'])}
        </Timeline.Item>
      </Timeline>
      <Title>Вы получите:</Title>
      <Timeline style={{ paddingLeft: 20 }}>
        <Timeline.Item color={'green'}>
          Доступ на {countUser} {getWordEnding(countUser, ['пользователя', 'пользователей', 'пользователей'])}
        </Timeline.Item>
        <Timeline.Item color={'green'}>Полную информацию о субъекте</Timeline.Item>
        <Timeline.Item color={'green'}>Доступ к дашборду</Timeline.Item>
      </Timeline>
    </SubscribeInfoContainer>
  );
};

export default SubscribeInfo;

const SubscribeInfoContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 700px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const Title = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 800;
`;
