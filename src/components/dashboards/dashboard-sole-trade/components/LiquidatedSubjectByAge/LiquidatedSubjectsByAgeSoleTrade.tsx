import React from 'react';
import { Divider } from 'antd';
import {
  Container,
  NameComponent,
  AgeContainer,
} from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import LiquidatedAgeDiagramSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/LiquidatedSubjectByAge/components/LiquidatedAgeDiagramSoleTrade/LiquidatedAgeDiagramSoleTrade';
import LiquidatedByAgeChartSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/LiquidatedSubjectByAge/components/LiquidatedByAgeChartSoleTrade/LiquidatedByAgeChartSoleTrade';
import LiquidatedLessThen1SoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/LiquidatedSubjectByAge/components/LiquidatedLessThen1SoleTrade/LiquidatedLessThen1SoleTrade';
import LiquidatedFrom1To5SoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/LiquidatedSubjectByAge/components/LiquidatedFrom1To5SoleTrade/LiquidatedFrom1To5SoleTrade';
import LiquidatedFrom5To10SoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/LiquidatedSubjectByAge/components/LiquidatedFrom5To10SoleTrade/LiquidatedFrom5To10SoleTrade';
import LiquidatedFrom10To20SoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/LiquidatedSubjectByAge/components/LiquidatedFrom10To20SoleTrade/LiquidatedFrom10To20SoleTrade';
import LiquidatedMoreThen20SoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/LiquidatedSubjectByAge/components/LiquidatedMoreThen20SoleTrade/LiquidatedMoreThen20SoleTrade';

const LiquidatedSubjectsByAge: React.FC = () => {
  return (
    <Container>
      <NameComponent>Срез ликвидированных ИП по возрасту:</NameComponent>
      <Divider />
      <AgeContainer>
        <LiquidatedMoreThen20SoleTrade />
        <LiquidatedFrom10To20SoleTrade />
        <LiquidatedFrom5To10SoleTrade />
        <LiquidatedFrom1To5SoleTrade />
        <LiquidatedLessThen1SoleTrade />
      </AgeContainer>
      <LiquidatedAgeDiagramSoleTrade />
      <Divider />
      <LiquidatedByAgeChartSoleTrade />
      <Divider />
    </Container>
  );
};

export default LiquidatedSubjectsByAge;
