import React from 'react';
import styled from 'styled-components';
import MainInfoSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/mainInfoSoleTrade/MainInfoSoleTrade';
import LineChartYearsSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/LineChartYearSoleTrade/LineChartYearsSoleTrade';
import ColumnChartMonthSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/ColumnChartMonthSoleTrade/ColumnChartMonthSoleTrade';
import TypeActivitiesSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/typeActivitiesSoleTrade/TypeActivitiesSoleTrade';
import CurrentSubjectsByAgeSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/CurrentSubjectsByAgeSoleTrade/CurrentSubjectsByAgeSoleTrade';
import DetailedInformationCompanySoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/DetailedInformationCompanySoleTrade/DetailedInformationCompanySoleTrade';
import LiquidatedMainInfoSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/LiquidatedMainInfoSoleTrade/LiquidatedMainInfoSoleTrade';
import LineChartLiquidatedYearsSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/LineChartLiquidatedYearSoleTrade/LineChartLiquidatedYearsSoleTrade';
import ColumnChartLiquidatedMonthSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/ColumnChartLiquidatedMonthSoleTrade/ColumnChartLiquidatedMonthSoleTrade';
import TypeActivitiesLiquidatedSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/typeActivitiesLiquidatedSoleTrade/TypeActivitiesLiquidatedSoleTrade';

const DashboardSoleTrader: React.FC = () => {
  return (
    <Container>
      <Title>Индивидуальные предприниматели (ИП)</Title>
      <MainInfoSoleTrade />
      <ChartsContainer>
        <LineChartYearsSoleTrade />
        <ColumnChartMonthSoleTrade />
      </ChartsContainer>
      <TypeActivitiesSoleTrade />
      <CurrentSubjectsByAgeSoleTrade />
      <DetailedInformationCompanySoleTrade />
      <LiquidatedMainInfoSoleTrade />
      <ChartsContainer>
        <LineChartLiquidatedYearsSoleTrade />
        <ColumnChartLiquidatedMonthSoleTrade />
      </ChartsContainer>
      <TypeActivitiesLiquidatedSoleTrade />
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
