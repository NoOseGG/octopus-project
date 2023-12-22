import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import styled from 'styled-components';
import { RingProgress, RingProgressConfig } from '@ant-design/charts';

const MetricProbabilityLiquidation: React.FC = () => {
  const metricProbabilityLiquidation = useAppSelector(
    (state) => state.searchProfile.profile.metric_probability_liquidation,
  );

  const config: RingProgressConfig = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: getPercent(metricProbabilityLiquidation[0]?.probability_liquidation),
    color: ['#F4664A', '#E8EDF3'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        style: {
          color: '#363636',
          fontSize: '10px',
          lineHeight: '14px',
        },
        formatter: () => 'Ликвидация',
      },
    },
  };

  return (
    <Container>
      <RingProgress {...config} />
      <div>Возраст субъекта: {metricProbabilityLiquidation[0]?.age_short}</div>
      <div>Населенный пункт: {metricProbabilityLiquidation[0]?.address_settlement}</div>
      <div>Вид деятельности: {metricProbabilityLiquidation[0]?.type_activity_name}</div>
      <div>Количество действующий субъектов: {metricProbabilityLiquidation[0]?.count_at}</div>
      <div>Общее количество зарегистрированных субъектов: {metricProbabilityLiquidation[0]?.count_not_at}</div>
      <div>Вероятность ликвидации (%): {metricProbabilityLiquidation[0]?.probability_liquidation}</div>
      <div>Соотношение действующик к зарегистрированным: {metricProbabilityLiquidation[0]?.ratio}</div>
      <div>Уровень риска ликвидации: {metricProbabilityLiquidation[0]?.risk_level}</div>
    </Container>
  );
};

export default MetricProbabilityLiquidation;

const Container = styled.div`
  width: 100%;
`;

const getPercent = (percent: number | null): number => {
  if (percent === null) return 0;
  else return percent / 100;
};
