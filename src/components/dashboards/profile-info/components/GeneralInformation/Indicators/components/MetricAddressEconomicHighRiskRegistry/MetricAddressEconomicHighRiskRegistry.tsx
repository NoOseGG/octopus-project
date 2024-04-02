import React from 'react';
import styled from 'styled-components';
import { Gauge, GaugeConfig } from '@ant-design/charts';
import { Popover } from 'antd';

const ADDRESS_LISTED = 'Адрес значится в реестре неблагонадежных субъектов';

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
      // title: {
      //   offsetY: -20,
      //   style: {
      //     fontSize: '12px',
      //     color: '#4B535E',
      //   },
      //   formatter: () => ``,
      // },
      // content: {
      //   style: {
      //     fontSize: '12px',
      //     lineHeight: '10px',
      //     color: '#4B535E',
      //   },
      //   formatter: () => getNameByRisk(risk),
      // },
    },
  };
  return (
    <Container>
      <Gauge {...config} style={{ height: 80, width: 120, padding: 0 }} />
      <Popover content={description}>
        <Title>{name}</Title>
      </Popover>
    </Container>
  );
};

export default MetricAddressEconomicHighRiskRegistry;

const Container = styled.div`
  margin-inline: 12px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;

const Title = styled.span`
  width: 120px;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  color: dodgerblue;
  transition: transfrom 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const getRiskLevel = (risk: string): number => {
  if (risk === ADDRESS_LISTED) {
    return 1;
  } else {
    return 0.2;
  }
};

const getColorByRisk = (risk: string): string => {
  if (risk === ADDRESS_LISTED) {
    return 'red';
  } else {
    return 'green';
  }
};

const getNameByRisk = (risk: string): string => {
  if (risk === ADDRESS_LISTED) {
    return 'Высокий';
  } else {
    return 'Низкий';
  }
};
