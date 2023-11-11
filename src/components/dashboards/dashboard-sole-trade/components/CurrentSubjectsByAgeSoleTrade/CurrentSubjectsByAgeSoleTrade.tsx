import React from 'react';
import { Divider } from 'antd';
import {
  Container,
  NameComponent,
  AgeContainer,
  ChartContainer,
} from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import MoreThen20SoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/CurrentSubjectsByAgeSoleTrade/components/MoreThen20SoleTrade/MoreThen20SoleTrade';
import From10To20SoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/CurrentSubjectsByAgeSoleTrade/components/From10To20SoleTrade/From10To20SoleTrade';
import From5To10SoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/CurrentSubjectsByAgeSoleTrade/components/From5To10SoleTrade/From5To10SoleTrade';
import From1To5SoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/CurrentSubjectsByAgeSoleTrade/components/From1To5SoleTrade/From1To5SoleTrade';
import LessThen1SoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/CurrentSubjectsByAgeSoleTrade/components/LessThen1SoleTrade/LessThen1SoleTrade';
import AvgAgeSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/CurrentSubjectsByAgeSoleTrade/components/AvgAgeSoleTrade/AvgAgeSoleTrade';
import AgeDiagramSole from '@app/components/dashboards/dashboard-sole-trade/components/CurrentSubjectsByAgeSoleTrade/components/AgeDiagramSoleTrade/AgeDiagramSole';

const CurrentSubjectsByAge: React.FC = () => {
  return (
    <Container>
      <NameComponent>Срез действующих ИП по возрасту:</NameComponent>
      <Divider />
      <AgeContainer>
        <MoreThen20SoleTrade />
        <From10To20SoleTrade />
        <From5To10SoleTrade />
        <From1To5SoleTrade />
        <LessThen1SoleTrade />
      </AgeContainer>
      <ChartContainer>
        <AvgAgeSoleTrade />
        <AgeDiagramSole />
      </ChartContainer>
      <Divider />
    </Container>
  );
};

export default CurrentSubjectsByAge;
