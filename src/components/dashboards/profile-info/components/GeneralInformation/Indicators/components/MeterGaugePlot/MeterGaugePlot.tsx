import React from 'react';
import { Gauge, GaugeConfig } from '@ant-design/charts';
import styled from 'styled-components';
import { Popover } from 'antd';
import { MyStyles } from '@app/styles/themes/myStyles/myStyles';

type MyComponentProps = {
  risk: string;
  name: string;
  content: number | string;
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
      // title: {
      //   offsetY: -20,
      //   style: {
      //     fontSize: '12px',
      //     color: '#4B535E',
      //   },
      //   formatter: () => `${content}`,
      // },
      content: {
        style: {
          fontSize: '18px',
          lineHeight: '15px',
          color: '#4B535E',
        },
        formatter: () => `${content}`,
      },
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

export default MeterGaugePlot;

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
  color: ${MyStyles.primaryColor};
  transition: transfrom 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const getRiskLevel = (risk: string): number => {
  switch (risk.split(' ')[0]) {
    case 'Низкий':
      return 0.2;
    case 'Средний':
      return 0.5;
    case 'Высокий':
      return 1;
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
