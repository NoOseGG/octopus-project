import React from 'react';
import { Liquid } from '@ant-design/charts';
import { IceTradeCustomer, IceTradeParticipant } from '@app/store/types/Subject';
import { Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

type MyComponentProps = {
  icetrade: IceTradeCustomer[] | IceTradeParticipant[];
};

const SubjectIceTradeLiquidPlot: React.FC<MyComponentProps> = ({ icetrade }) => {
  const countTrade = icetrade.length;
  const countSuccessTrade = icetrade.filter((item) => item.lot_status === 'Закупка завершена').length;
  const percentTrade = countSuccessTrade / countTrade;

  const config = {
    percent: percentTrade,
    outline: {
      border: 4,
      distance: 8,
    },
    wave: {
      length: 128,
    },
  };
  return (
    <Container>
      <Title>Процент успешных сделок</Title>
      <SubTitle>Количество сделок - {countTrade}</SubTitle>
      <div style={{ alignSelf: 'center' }}>
        <Liquid {...config} />
      </div>
    </Container>
  );
};

export default SubjectIceTradeLiquidPlot;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled(Text)`
  text-align: center;
  font-size: 22px;
  font-weight: 700;
`;

const SubTitle = styled(Text)`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
`;
