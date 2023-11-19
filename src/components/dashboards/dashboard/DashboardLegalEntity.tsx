import React from 'react';
import styled from 'styled-components';
import MainInfo from '@app/components/dashboards/dashboard/components/MainInfo/MainInfo';
import LineChartYears from '@app/components/dashboards/dashboard/components/Charts/LineChartYear/LineChartYears';
import ColumnChartMonth from '@app/components/dashboards/dashboard/components/ColumnChartMonth/ColumnChartMonth';
import TypeActivities from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivities';
import CurrentSubjectsByAge from '@app/components/dashboards/dashboard/components/CurrentSubjectsByAge/CurrentSubjectsByAge';
import DetailedInformation from '@app/components/dashboards/dashboard/components/DetailedInformation/DetailedInformation';
import LiquidatedMainInfo from '@app/components/dashboards/dashboard/components/LiquidatedMainInfo/LiquidatedMainInfo';
import ColumnChartLiquidatedMonth from '@app/components/dashboards/dashboard/components/ColumnChartLiquidatedMoth/ColumnChartLiquidatedMonth';
import LiquidatedSubjectsByAge from '@app/components/dashboards/dashboard/components/LiquidatedCurrentSubjectByAge/LiquidatedSubjectsByAge';
import { DETAILED_TYPE } from '@app/components/dashboards/dashboard/components/DetailedInformation/DetailedInformationTypes';
import TypeActivitiesLiquidated from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivitiesLiquidated';
import { LINE_CHART_YEAR } from '@app/components/dashboards/dashboard/components/Charts/LineChartYear/LineChartYearsTypes';

const DashboardLegalEntity: React.FC = () => {
  return (
    <Container>
      <Title>Юридические лица</Title>
      <MainInfo />
      <ChartsContainer>
        <LineChartYears lineChart={LINE_CHART_YEAR.LE_CREATED} />
        <ColumnChartMonth />
      </ChartsContainer>
      <TypeActivities />
      <CurrentSubjectsByAge />
      <DetailedInformation detailed={DETAILED_TYPE.LEGAl_ENTITY_CREATED} />
      <LiquidatedMainInfo />
      <ChartsContainer>
        <LineChartYears lineChart={LINE_CHART_YEAR.LE_LIQUIDATED} />
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
