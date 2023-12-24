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
    color: [getColor(metricProbabilityLiquidation[0]?.probability_liquidation), '#E8EDF3'],
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
      <Text>Уровень риска ликвидации: {metricProbabilityLiquidation[0]?.risk_level}</Text>
      <RingProgress {...config} />
      <Text>действующие {metricProbabilityLiquidation[0]?.ratio} зарегистрированные</Text>
    </Container>
  );
};

export default MetricProbabilityLiquidation;

const Container = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const Text = styled.div`
  font-size: 10px;
`;

const getPercent = (percent: number | null): number => {
  if (percent === null) return 0.0;
  else return percent / 100;
};

const getColor = (percent: number | null): string => {
  if (percent === null) return '#fff';
  if (percent < 30) {
    return '#2ee818';
  } else if (percent >= 30 && percent < 80) {
    return '#e3c928';
  } else {
    return '#e51919';
  }
};
