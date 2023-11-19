import React from 'react';
import styled from 'styled-components';
import MainInfoSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/mainInfoSoleTrade/MainInfoSoleTrade';
import ColumnChartMonthSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/ColumnChartMonthSoleTrade/ColumnChartMonthSoleTrade';
import TypeActivitiesSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/typeActivitiesSoleTrade/TypeActivitiesSoleTrade';
import CurrentSubjectsByAgeSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/CurrentSubjectsByAgeSoleTrade/CurrentSubjectsByAgeSoleTrade';
import LiquidatedMainInfoSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/LiquidatedMainInfoSoleTrade/LiquidatedMainInfoSoleTrade';
import ColumnChartLiquidatedMonthSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/ColumnChartLiquidatedMonthSoleTrade/ColumnChartLiquidatedMonthSoleTrade';
import LiquidatedSubjectsByAgeSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/LiquidatedSubjectByAge/LiquidatedSubjectsByAgeSoleTrade';
import DetailedInformation from '@app/components/dashboards/dashboard/components/DetailedInformation/DetailedInformation';
import { DETAILED_TYPE } from '@app/components/dashboards/dashboard/components/DetailedInformation/DetailedInformationTypes';
import TypeActivitiesLiquidatedSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/typeActivitiesSoleTrade/TypeActivitiesLiquidatedSoleTrade';
import LineChartYears from '@app/components/dashboards/dashboard/components/Charts/LineChartYear/LineChartYears';
import { LINE_CHART_YEAR } from '@app/components/dashboards/dashboard/components/Charts/LineChartYear/LineChartYearsTypes';

const DashboardSoleTrader: React.FC = () => {
  return (
    <Container>
      <Title>Индивидуальные предприниматели (ИП)</Title>
      <MainInfoSoleTrade />
      <ChartsContainer>
        <LineChartYears lineChart={LINE_CHART_YEAR.ST_CREATED} />
        <ColumnChartMonthSoleTrade />
      </ChartsContainer>
      <TypeActivitiesSoleTrade />
      <CurrentSubjectsByAgeSoleTrade />
      <DetailedInformation detailed={DETAILED_TYPE.SOLE_TRADE_CREATED} />
      <LiquidatedMainInfoSoleTrade />
      <ChartsContainer>
        <LineChartYears lineChart={LINE_CHART_YEAR.ST_LIQUIDATED} />
        <ColumnChartLiquidatedMonthSoleTrade />
      </ChartsContainer>
      <TypeActivitiesLiquidatedSoleTrade />
      <LiquidatedSubjectsByAgeSoleTrade />
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
