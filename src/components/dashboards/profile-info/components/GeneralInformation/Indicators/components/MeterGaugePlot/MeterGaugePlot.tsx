import React from 'react';
import { Gauge, GaugeConfig } from '@ant-design/charts';
import styled from 'styled-components';

type MyComponentProps = {
  risk: string;
  name: string;
  content: number;
  description: string;
};

const MeterGaugePlot: React.FC<MyComponentProps> = ({ risk, name, content, description }) => {
  const config: GaugeConfig = {
    percent: getRiskLevel(risk),
    range: {
      color: getColorByRisk(risk),
    },
    startAngle: Math.PI,
    endAngle: 2 * Math.PI,
    indicator: false,
    statistic: {
      title: {
        offsetY: -20,
        style: {
          fontSize: '8px',
          color: '#4B535E',
        },
        formatter: () => `${content}`,
      },
      content: {
        style: {
          fontSize: '10px',
          lineHeight: '10px',
          color: '#4B535E',
        },
        formatter: () => risk,
      },
    },
  };
  return (
    <Container>
      <Title>{name}</Title>
      <Gauge {...config} style={{ height: 120, width: 120, padding: 0 }} />
    </Container>
  );
};

export default MeterGaugePlot;

const Container = styled.div`
  margin-inline: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  width: 120px;
  font-size: 12px;
  text-align: center;
`;

const getRiskLevel = (risk: string): number => {
  switch (risk.split(' ')[0]) {
    case 'Низкий':
      return 0.2;
    case 'Средний':
      return 0.5;
    case 'Высокий':
      return 0.8;
    default:
      return 0;
  }
};

const getColorByRisk = (risk: string): string => {
  switch (risk.split(' ')[0]) {
    case 'Низкий':
      return 'green';
    case 'Средний':
      return 'orange';
    case 'Высокий':
      return 'red';
    default:
      return 'white';
  }
};
