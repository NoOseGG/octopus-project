import React from 'react';
import styled from 'styled-components';
import { Gauge, GaugeConfig } from '@ant-design/charts';

const ADDRESS_LISTED = 'Адрес не значится в реестре неблагонадежных субъектов';

type MyComponentProps = {
  risk: string;
  name: string;
  description: string;
};

const MetricAddressEconomicHighRiskRegistry: React.FC<MyComponentProps> = ({ risk, name, description }) => {
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
        formatter: () => ``,
      },
      content: {
        style: {
          fontSize: '10px',
          lineHeight: '10px',
          color: '#4B535E',
        },
        formatter: () => getNameByRisk(risk),
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

export default MetricAddressEconomicHighRiskRegistry;

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
  if (risk.localeCompare(ADDRESS_LISTED) === 0) {
    return 0.8;
  } else {
    return 0.2;
  }
};

const getColorByRisk = (risk: string): string => {
  if (risk.localeCompare(ADDRESS_LISTED) === 0) {
    return 'red';
  } else {
    return 'green';
  }
};

const getNameByRisk = (risk: string): string => {
  if (risk.localeCompare(ADDRESS_LISTED) === 0) {
    return 'Высокий риск';
  } else {
    return 'Низкий риск';
  }
};
