import React from 'react';
import styled from 'styled-components';
import MainInfo from '@app/components/dashboards/dashboard/components/MainInfo/MainInfo';
import LineChartYears from '@app/components/dashboards/dashboard/components/LineChartYears/LineChartYears';
import ColumnChartMonth from '@app/components/dashboards/dashboard/components/ColumnChartMonth/ColumnChartMonth';
import TypeActivities from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivities';
import CurrentSubjectsByAge from '@app/components/dashboards/dashboard/components/CurrentSubjectsByAge/CurrentSubjectsByAge';
import DetailedInformationCompany from '@app/components/dashboards/dashboard/components/DetailedInformationCompany/DetailedInformationCompany';
import LiquidatedMainInfo from '@app/components/dashboards/dashboard/components/LiquidatedMainInfo/LiquidatedMainInfo';
import LineChartLiquidatedYears from '@app/components/dashboards/dashboard/components/LineChartLiquidatedYear/LineChartLiquidatedYears';
import ColumnChartLiquidatedMonth from '@app/components/dashboards/dashboard/components/ColumnChartLiquidatedMoth/ColumnChartLiquidatedMonth';
import TypeActivitiesLiquidated from '@app/components/dashboards/dashboard/components/TypeActivitiesLiquidated/TypeActivitiesLiquidated';
import LiquidatedSubjectsByAge from '@app/components/dashboards/dashboard/components/LiquidatedCurrentSubjectByAge/LiquidatedSubjectsByAge';

const DashboardLegalEntity: React.FC = () => {
  return (
    <Container>
      <Title>Юридические лица</Title>
      <MainInfo />
      <ChartsContainer>
        <LineChartYears />
        <ColumnChartMonth />
      </ChartsContainer>
      <TypeActivities />
      <CurrentSubjectsByAge />
      <DetailedInformationCompany />
      <LiquidatedMainInfo />
      <ChartsContainer>
        <LineChartLiquidatedYears />
        <ColumnChartLiquidatedMonth />
      </ChartsContainer>
      <TypeActivitiesLiquidated />
      <LiquidatedSubjectsByAge />
    </Container>
  );
};

export default DashboardLegalEntity;

const Container = styled.div`
  width: 100%;
`;

const ChartsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;

  @media only screen and (max-width: 1800px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 700;
`;
