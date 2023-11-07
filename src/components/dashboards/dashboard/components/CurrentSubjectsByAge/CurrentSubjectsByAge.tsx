import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import {
  doGetCurrentSubjectsAvgAge,
  doGetCurrentSubjectsFrom10To20,
  doGetCurrentSubjectsFrom1To5,
  doGetCurrentSubjectsFrom5To10,
  doGetCurrentSubjectsLessThen1,
  doGetCurrentSubjectsMoreThen20,
} from '@app/store/slices/legalEntityDashboard/currentSubjectsByAgeSlice';
import styled from 'styled-components';
import { Divider } from 'antd';
import { Pie } from '@ant-design/charts';

const CurrentSubjectsByAge: React.FC = () => {
  const { count20More, countFrom10To20, countFrom5To10, countFrom1To5, count1Less, avgAge } = useAppSelector(
    (state) => state.currentSubjectsByAge,
  );
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetCurrentSubjectsMoreThen20(filters));
    dispatch(doGetCurrentSubjectsFrom10To20(filters));
    dispatch(doGetCurrentSubjectsFrom5To10(filters));
    dispatch(doGetCurrentSubjectsFrom1To5(filters));
    dispatch(doGetCurrentSubjectsLessThen1(filters));
    dispatch(doGetCurrentSubjectsAvgAge(filters));
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
      <NameComponent>Срез действующих компаний по возрасту:</NameComponent>
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
          <Title>Средний возраст компаний</Title>
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

export default CurrentSubjectsByAge;

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
