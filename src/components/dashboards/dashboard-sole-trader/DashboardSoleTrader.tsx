import React from 'react';
import styled from 'styled-components';
import SearchFilters from '@app/components/dashboards/dashboard/components/SearchFilters/SearchFilters';
import MainInfoSoleTrader from '@app/components/dashboards/dashboard-sole-trader/components/MainInfoSoleTrader/MainInfoSoleTrader';
import ColumnChartMonthSoleTrade from '@app/components/dashboards/dashboard-sole-trader/components/ColumnChartMonthSoleTrade/ColumnChartMonthSoleTrade';
import LineChartYearsSoleTrade from '@app/components/dashboards/dashboard-sole-trader/components/LineChartYearsSoleTrade/LineChartYearsSoleTrade';
import TypeActivitiesSoleTrade from '@app/components/dashboards/dashboard-sole-trader/components/TypeActivitiesSoleTrade/TypeActivitiesSoleTrade';
import CurrentSubjectsSoleTradeByAge from '@app/components/dashboards/dashboard-sole-trader/components/CurrentSubjectSoleTradeByAge/CurrentSubjectsSoleTradeByAge';
import DetailedInformationCompanySoleTrade from '@app/components/dashboards/dashboard-sole-trader/components/DetailedInformationCompanySoleTrade/DetailedInformationCompanySoleTrade';
import LiquidatedMainInfoSoleTrade from '@app/components/dashboards/dashboard-sole-trader/components/LiquidatedMainInfoSoleTrade/LiquidatedMainInfoSoleTrade';
import LineChartLiquidatedYearsSoleTrade from '@app/components/dashboards/dashboard-sole-trader/components/LineChartLiquidatedYearSoleTrade/LineChartLiquidatedYearsSoleTrade';

const DashboardSoleTrader: React.FC = () => {
  return (
    <Container>
      <SearchFilters />
      <Title>Индивидуальные предпрениматели (ИП)</Title>
      <MainInfoSoleTrader />
      <ChartsContainer>
        <LineChartYearsSoleTrade />
        <ColumnChartMonthSoleTrade />
      </ChartsContainer>
      <TypeActivitiesSoleTrade />
      <CurrentSubjectsSoleTradeByAge />
      <DetailedInformationCompanySoleTrade />
      <LiquidatedMainInfoSoleTrade />
      <LineChartLiquidatedYearsSoleTrade />
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
