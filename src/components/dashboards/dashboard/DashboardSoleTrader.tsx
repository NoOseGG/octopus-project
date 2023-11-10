import React from 'react';
import styled from 'styled-components';
import SearchFilters from '@app/components/dashboards/dashboard/components/SearchFilters/SearchFilters';
import MainInfo from '@app/components/dashboards/dashboard/components/MainInfo/MainInfo';
import LineChartYears from '@app/components/dashboards/dashboard/components/LineChartYears/LineChartYears';
import ColumnChartMonth from '@app/components/dashboards/dashboard/components/ColumnChartMonth/ColumnChartMonth';
import TypeActivities from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivities';
import CurrentSubjectsByAge from '@app/components/dashboards/dashboard/components/CurrentSubjectsByAge/CurrentSubjectsByAge';
import DetailedInformationCompany from '@app/components/dashboards/dashboard/components/DetailedInformationCompany/DetailedInformationCompany';
import LiquidatedMainInfo from '@app/components/dashboards/dashboard/components/LiquidatedMainInfo/LiquidatedMainInfo';
import LineChartLiquidatedYears from '@app/components/dashboards/dashboard/components/LineChartLiquidatedYear/LineChartLiquidatedYears';
import ColumnChartLiquidatedMonth from '@app/components/dashboards/dashboard/components/ColumnChartLiquidatedMoth/ColumnChartLiquidatedMonth';

const DashboardSoleTrader: React.FC = () => {
  return (
    <Container>
      <SearchFilters />
      <Title>Индивидуальные предприниматели (ИП)</Title>
      {/*<MainInfo />*/}
      {/*<ChartsContainer>*/}
      {/*  <LineChartYears />*/}
      {/*  <ColumnChartMonth />*/}
      {/*</ChartsContainer>*/}
      {/*<TypeActivities />*/}
      {/*<CurrentSubjectsByAge />*/}
      {/*<DetailedInformationCompany />*/}
      {/*<LiquidatedMainInfo />*/}
      {/*<ChartsContainer>*/}
      {/*  <LineChartLiquidatedYears />*/}
      {/*  <ColumnChartLiquidatedMonth />*/}
      {/*</ChartsContainer>*/}
    </Container>
  );
};

export default DashboardSoleTrader;

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

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 700;
`;
