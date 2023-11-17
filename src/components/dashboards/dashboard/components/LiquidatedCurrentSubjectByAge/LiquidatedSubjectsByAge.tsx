import React from 'react';
import { Divider } from 'antd';
import {
  Container,
  NameComponent,
  AgeContainer,
  ChartContainer,
} from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import LiquidatedMoreThen20 from '@app/components/dashboards/dashboard/components/LiquidatedCurrentSubjectByAge/components/LiquidatedMoreThen20/LiquidatedMoreThen20';
import LiquidatedFrom10To20 from '@app/components/dashboards/dashboard/components/LiquidatedCurrentSubjectByAge/components/LiquidatedFrom10To20/LiquidatedFrom10To20';
import LiquidatedFrom5To10 from '@app/components/dashboards/dashboard/components/LiquidatedCurrentSubjectByAge/components/LiquidatedFrom5To10/LiquidatedFrom5To10';
import LiquidatedFrom1To5 from '@app/components/dashboards/dashboard/components/LiquidatedCurrentSubjectByAge/components/LiquidatedFrom1To5/LiquidatedFrom1To5';
import LiquidatedLessThen1 from '@app/components/dashboards/dashboard/components/LiquidatedCurrentSubjectByAge/components/LiquidatedLessThen1/LiquidatedLessThen1';
import LiquidatedAgeDiagram from '@app/components/dashboards/dashboard/components/LiquidatedCurrentSubjectByAge/components/LiquidatedAgeDiagram/LiquidatedAgeDiagram';
import LiquidatedLineChart from '@app/components/dashboards/dashboard/components/LiquidatedCurrentSubjectByAge/components/LiquidatedLineChart/LiquidatedLineChart';

const LiquidatedSubjectsByAge: React.FC = () => {
  return (
    <Container>
      <NameComponent>Срез ликвидированных компаний по возрасту:</NameComponent>
      <Divider />
      <AgeContainer>
        <LiquidatedMoreThen20 />
        <LiquidatedFrom10To20 />
        <LiquidatedFrom5To10 />
        <LiquidatedFrom1To5 />
        <LiquidatedLessThen1 />
      </AgeContainer>
      <ChartContainer>
        <LiquidatedAgeDiagram />
        <LiquidatedLineChart />
      </ChartContainer>
      <Divider />
    </Container>
  );
};

export default LiquidatedSubjectsByAge;
