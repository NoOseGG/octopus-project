import React from 'react';
import styled from 'styled-components';
import SearchFilters from '@app/components/dashboards/dashboard/components/SearchFilters/SearchFilters';
import MainInfoSoleTrader from '@app/components/dashboards/dashboard-sole-trader/MainInfoSoleTrader/MainInfoSoleTrader';
import LineChartYearsSoleTrade from '@app/components/dashboards/dashboard-sole-trader/LineChartYearsSoleTrade/LineChartYearsSoleTrade';
import ColumnChartMonthSoleTrade from '@app/components/dashboards/dashboard-sole-trader/ColumnChartMonthSoleTrade/ColumnChartMonthSoleTrade';
import TypeActivitiesSoleTrade from '@app/components/dashboards/dashboard-sole-trader/TypeActivitiesSoleTrade/TypeActivitiesSoleTrade';

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
