import React from 'react';
import styled from 'styled-components';
import MainInfo from '@app/components/dashboards/dashboard/components/MainInfo/MainInfo';
import LineChartYears from '@app/components/dashboards/dashboard/components/LineChartYears/LineChartYears';
import ColumnChartMonth from '@app/components/dashboards/dashboard/components/ColumnChartMonth/ColumnChartMonth';
import SearchFilters from '@app/components/dashboards/dashboard/components/SearchFilters/SearchFilters';
import TypeActivitiesYear from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivitiesYear/TypeActivitiesYear';
import TypeActivitiesQuarter from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivitiesQurter/TypeActivitiesQuarter';
import TypeActivitiesMonth from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivitiesMonth/TypeActivitiesMonth';
import { mediaMax } from '@app/styles/themes/constants';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <SearchFilters />
      <Title>Юридические лица</Title>
      <MainInfo />
      <ChartsContainer>
        <LineChartYears />
        <ColumnChartMonth />
      </ChartsContainer>
      <TypeActivitiesContainer>
        <TypeActivitiesYear />
        <TypeActivitiesQuarter />
        <TypeActivitiesMonth />
      </TypeActivitiesContainer>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  flex-grow: 1;
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

const TypeActivitiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media only screen and ${mediaMax.lg} {
    display: flex;
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
