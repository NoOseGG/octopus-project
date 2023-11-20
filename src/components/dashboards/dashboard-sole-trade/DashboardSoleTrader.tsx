import React from 'react';
import styled from 'styled-components';
import CurrentSubjectsByAgeSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/CurrentSubjectsByAgeSoleTrade/CurrentSubjectsByAgeSoleTrade';
import LiquidatedSubjectsByAgeSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/LiquidatedSubjectByAge/LiquidatedSubjectsByAgeSoleTrade';
import DetailedInformation from '@app/components/dashboards/dashboard/components/DetailedInformation/DetailedInformation';
import { DETAILED_TYPE } from '@app/components/dashboards/dashboard/components/DetailedInformation/DetailedInformationTypes';
import LineChartYears from '@app/components/dashboards/dashboard/components/Charts/LineChartYear/LineChartYears';
import { LINE_CHART_YEAR } from '@app/components/dashboards/dashboard/components/Charts/LineChartYear/LineChartYearsTypes';
import ColumnChartMonth from '@app/components/dashboards/dashboard/components/Charts/ColumnChartMonth/ColumnChartMonth';
import { COLUMN_CHART_MONTH } from '@app/components/dashboards/dashboard/components/Charts/ColumnChartMonth/ColumnChartMonthTypes';
import MainInfo from '@app/components/dashboards/dashboard/components/MainInfo/MainInfo';
import { COUNT_TYPE } from '@app/components/dashboards/dashboard/components/MainInfo/components/CountCompany/CountCompanyTypes';
import {
  COUNT_YEAR_TYPE,
  PERCENT_TYPE,
} from '@app/components/dashboards/dashboard/components/MainInfo/components/CountYear/CountYearTypes';
import TypeActivities from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivities';
import { TYPE_ACTIVITY_TYPE } from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivity/TypeActivityTypes';

const DashboardSoleTrader: React.FC = () => {
  return (
    <Container>
      <Title>Индивидуальные предприниматели (ИП)</Title>
      <MainInfo
        all={COUNT_TYPE.ST_CREATED_ALL}
        year={COUNT_YEAR_TYPE.ST_CREATED_YEAR}
        quarter={COUNT_TYPE.ST_CREATED_QUARTER}
        operation={COUNT_TYPE.ST_CREATED_OPERATION}
        percent={PERCENT_TYPE.ST_CREATE_PERCENT}
      />
      <ChartsContainer>
        <LineChartYears lineChart={LINE_CHART_YEAR.ST_CREATED} />
        <ColumnChartMonth columnChart={COLUMN_CHART_MONTH.ST_CREATED} />
      </ChartsContainer>
      <TypeActivities
        all={TYPE_ACTIVITY_TYPE.ST_CREATED_ALL}
        year={TYPE_ACTIVITY_TYPE.ST_CREATED_YEAR}
        quarter={TYPE_ACTIVITY_TYPE.ST_CREATED_QUARTER}
        month={TYPE_ACTIVITY_TYPE.ST_CREATED_MONTH}
      />
      <CurrentSubjectsByAgeSoleTrade />
      <DetailedInformation detailed={DETAILED_TYPE.ST_CREATED} />
      <MainInfo
        all={COUNT_TYPE.ST_LIQUIDATED_ALL}
        year={COUNT_YEAR_TYPE.ST_LIQUIDATE_YEAR}
        quarter={COUNT_TYPE.ST_LIQUIDATED_QUARTER}
        operation={COUNT_TYPE.NONE}
        percent={PERCENT_TYPE.ST_LIQUIDATE_PERCENT}
      />
      <ChartsContainer>
        <LineChartYears lineChart={LINE_CHART_YEAR.ST_LIQUIDATED} />
        <ColumnChartMonth columnChart={COLUMN_CHART_MONTH.ST_LIQUIDATED} />
      </ChartsContainer>
      <TypeActivities
        all={TYPE_ACTIVITY_TYPE.ST_LIQUIDATED_ALL}
        year={TYPE_ACTIVITY_TYPE.ST_LIQUIDATED_YEAR}
        quarter={TYPE_ACTIVITY_TYPE.ST_LIQUIDATED_QUARTER}
        month={TYPE_ACTIVITY_TYPE.ST_LIQUIDATED_MONTH}
      />
      <LiquidatedSubjectsByAgeSoleTrade />
      <MainInfo
        all={COUNT_TYPE.ST_BANKRUPT_ALL}
        year={COUNT_YEAR_TYPE.ST_BANKRUPTED_YEAR}
        quarter={COUNT_TYPE.ST_BANKRUPT_QUARTER}
        operation={COUNT_TYPE.NONE}
        percent={PERCENT_TYPE.ST_BANKRUPTED_PERCENT}
      />
      <ChartsContainer>
        <LineChartYears lineChart={LINE_CHART_YEAR.ST_BANKRUPTED} />
        <ColumnChartMonth columnChart={COLUMN_CHART_MONTH.ST_BANKRUPTED} />
      </ChartsContainer>
      <TypeActivities
        all={TYPE_ACTIVITY_TYPE.ST_BANKRUPTED_ALL}
        year={TYPE_ACTIVITY_TYPE.ST_BANKRUPTED_YEAR}
        quarter={TYPE_ACTIVITY_TYPE.ST_BANKRUPTED_QUARTER}
        month={TYPE_ACTIVITY_TYPE.ST_BANKRUPTED_MONTH}
      />
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
