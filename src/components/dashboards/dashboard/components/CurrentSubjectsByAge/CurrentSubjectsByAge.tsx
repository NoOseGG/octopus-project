import React from 'react';
import { Divider } from 'antd';
import {
  Container,
  NameComponent,
  AgeContainer,
  ChartContainer,
} from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import AgeDiagram from '@app/components/dashboards/dashboard/components/CurrentSubjectsByAge/components/AgeDiagram/AgeDiagram';
import AvgAge2 from '@app/components/dashboards/dashboard/components/CurrentSubjectsByAge/components/AvgAge/AvgAge2';
import MoreThen20 from '@app/components/dashboards/dashboard/components/CurrentSubjectsByAge/components/MoreThen20/MoreThen20';
import From10To20 from '@app/components/dashboards/dashboard/components/CurrentSubjectsByAge/components/From10To20/From10To20';
import From5To10 from '@app/components/dashboards/dashboard/components/CurrentSubjectsByAge/components/From5To10/From5To10';
import From1To5 from '@app/components/dashboards/dashboard/components/CurrentSubjectsByAge/components/From1To5/From1To5';
import LessThen1 from '@app/components/dashboards/dashboard/components/CurrentSubjectsByAge/components/LessThen1/LessThen1';

const CurrentSubjectsByAge: React.FC = () => {
  return (
    <Container>
      <NameComponent>Срез действующих компаний по возрасту:</NameComponent>
      <Divider />
      <AgeContainer>
        <MoreThen20 />
        <From10To20 />
        <From5To10 />
        <From1To5 />
        <LessThen1 />
      </AgeContainer>
      <ChartContainer>
        <AvgAge2 />
        <AgeDiagram />
      </ChartContainer>
      <Divider />
    </Container>
  );
};

export default CurrentSubjectsByAge;
