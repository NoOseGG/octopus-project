import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import styled from 'styled-components';
import { Divider } from 'antd';
import { Pie } from '@ant-design/charts';
import {
  doGetCurrentSubjectsSoleTradeAvgAge,
  doGetCurrentSubjectsSoleTradeFrom10To20,
  doGetCurrentSubjectsSoleTradeFrom1To5,
  doGetCurrentSubjectsSoleTradeFrom5To10,
  doGetCurrentSubjectsSoleTradeLessThen1,
  doGetCurrentSubjectsSoleTradeMoreThen20,
} from '@app/store/slices/dashboardSoleTrader/currentSubjectsSoleTradeByAgeSlice';

const CurrentSubjectsSoleTradeByAge: React.FC = () => {
  const { count20More, countFrom10To20, countFrom5To10, countFrom1To5, count1Less, avgAge } = useAppSelector(
    (state) => state.currentSubjectsSoleTradeByAge,
  );
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetCurrentSubjectsSoleTradeMoreThen20(filters));
    dispatch(doGetCurrentSubjectsSoleTradeFrom10To20(filters));
    dispatch(doGetCurrentSubjectsSoleTradeFrom5To10(filters));
    dispatch(doGetCurrentSubjectsSoleTradeFrom1To5(filters));
    dispatch(doGetCurrentSubjectsSoleTradeLessThen1(filters));
    dispatch(doGetCurrentSubjectsSoleTradeAvgAge(filters));
  }, [dispatch, filters]);

  const data = [
    {
      type: 'Менее года',
      value: count1Less,
    },
    {
      type: 'от 1 до 5 лет',
      value: countFrom1To5,
    },
    {
      type: 'от 5 до 10 лет',
      value: countFrom5To10,
    },
    {
      type: 'от 10 до 20 лет',
      value: countFrom10To20,
    },
    {
      type: 'Более 20 лет',
      value: count20More,
    },
  ];

  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
    ],
  };

  return (
    <Container>
      <NameComponent>Срез действующих ИП по возрасту:</NameComponent>
      <Divider />
      <AgeContainer>
        <Block>
          <Title>20 лет и более</Title>
          <Content>{count20More}</Content>
        </Block>
        <Block>
          <Title>от 10 до 20 лет</Title>
          <Content>{countFrom10To20}</Content>
        </Block>
        <Block>
          <Title>от 5 до 10 лет</Title>
          <Content>{countFrom5To10}</Content>
        </Block>
        <Block>
          <Title>от 1 до 5 лет</Title>
          <Content>{countFrom1To5}</Content>
        </Block>
        <Block>
          <Title>менее года</Title>
          <Content>{count1Less}</Content>
        </Block>
      </AgeContainer>
      <ChartContainer>
        <AverageAgeContainer>
          <Title>Средний возраст ИП</Title>
          <Content>{avgAge.toFixed(1)}</Content>
        </AverageAgeContainer>
        <PieContainer>
          <Pie {...config} />
        </PieContainer>
      </ChartContainer>
      <Divider />
    </Container>
  );
};

export default CurrentSubjectsSoleTradeByAge;

const Container = styled.div`
  margin-top: 20px;
  margin-inline: 50px;
`;

const NameComponent = styled.div`
  font-size: 30px;
  text-align: center;
  font-weight: 700;
`;

const AgeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: 700;
`;

const Content = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 700;
`;

const ChartContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-inline: 20px;
`;

const AverageAgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const PieContainer = styled.div`
  flex-grow: 2;
`;
