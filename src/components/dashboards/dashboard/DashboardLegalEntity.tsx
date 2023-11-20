import React from 'react';
import styled from 'styled-components';
import MainInfo from '@app/components/dashboards/dashboard/components/MainInfo/MainInfo';
import LineChartYears from '@app/components/dashboards/dashboard/components/Charts/LineChartYear/LineChartYears';
import TypeActivities from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivities';
import CurrentSubjectsByAge from '@app/components/dashboards/dashboard/components/CurrentSubjectsByAge/CurrentSubjectsByAge';
import DetailedInformation from '@app/components/dashboards/dashboard/components/DetailedInformation/DetailedInformation';
import LiquidatedSubjectsByAge from '@app/components/dashboards/dashboard/components/LiquidatedCurrentSubjectByAge/LiquidatedSubjectsByAge';
import { DETAILED_TYPE } from '@app/components/dashboards/dashboard/components/DetailedInformation/DetailedInformationTypes';
import { LINE_CHART_YEAR } from '@app/components/dashboards/dashboard/components/Charts/LineChartYear/LineChartYearsTypes';
import ColumnChartMonth from '@app/components/dashboards/dashboard/components/Charts/ColumnChartMonth/ColumnChartMonth';
import { COLUMN_CHART_MONTH } from '@app/components/dashboards/dashboard/components/Charts/ColumnChartMonth/ColumnChartMonthTypes';
import { COUNT_TYPE } from '@app/components/dashboards/dashboard/components/MainInfo/components/CountCompany/CountCompanyTypes';
import {
  COUNT_YEAR_TYPE,
  PERCENT_TYPE,
} from '@app/components/dashboards/dashboard/components/MainInfo/components/CountYear/CountYearTypes';
import { TYPE_ACTIVITY_TYPE } from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivity/TypeActivityTypes';

const DashboardLegalEntity: React.FC = () => {
  return (
    <Container>
      <Title>Юридические лица</Title>
      <MainInfo
        all={COUNT_TYPE.LE_CREATED_ALL}
        year={COUNT_YEAR_TYPE.LE_CREATED_YEAR}
        quarter={COUNT_TYPE.LE_CREATED_QUARTER}
        operation={COUNT_TYPE.LE_CREATED_OPERATION}
        percent={PERCENT_TYPE.LE_CREATED_PERCENT}
      />
      <ChartsContainer>
        <LineChartYears lineChart={LINE_CHART_YEAR.LE_CREATED} />
        <ColumnChartMonth columnChart={COLUMN_CHART_MONTH.LE_CREATED} />
      </ChartsContainer>
      <TypeActivities
        all={TYPE_ACTIVITY_TYPE.LE_CREATED_ALL}
        year={TYPE_ACTIVITY_TYPE.LE_CREATED_YEAR}
        quarter={TYPE_ACTIVITY_TYPE.LE_CREATED_QUARTER}
        month={TYPE_ACTIVITY_TYPE.LE_CREATED_MONTH}
      />
      <CurrentSubjectsByAge />
      <DetailedInformation detailed={DETAILED_TYPE.LE_CREATED} />
      <MainInfo
        all={COUNT_TYPE.LE_LIQUIDATED_ALL}
        year={COUNT_YEAR_TYPE.LE_LIQUIDATED_YEAR}
        quarter={COUNT_TYPE.LE_LIQUIDATED_QUARTER}
        operation={COUNT_TYPE.NONE}
        percent={PERCENT_TYPE.LE_LIQUIDATED_PERCENT}
      />
      <ChartsContainer>
        <LineChartYears lineChart={LINE_CHART_YEAR.LE_LIQUIDATED} />
        <ColumnChartMonth columnChart={COLUMN_CHART_MONTH.LE_LIQUIDATED} />
      </ChartsContainer>
      <TypeActivities
        all={TYPE_ACTIVITY_TYPE.LE_LIQUIDATED_ALL}
        year={TYPE_ACTIVITY_TYPE.LE_LIQUIDATED_YEAR}
        quarter={TYPE_ACTIVITY_TYPE.LE_LIQUIDATED_QUARTER}
        month={TYPE_ACTIVITY_TYPE.LE_LIQUIDATED_MONTH}
      />
      <LiquidatedSubjectsByAge />
      <DetailedInformation detailed={DETAILED_TYPE.LE_LIQUIDATED} />
      <MainInfo
        all={COUNT_TYPE.LE_BANKRUPT_ALL}
        year={COUNT_YEAR_TYPE.LE_BANKRUPTED_YEAR}
        quarter={COUNT_TYPE.LE_BANKRUPT_QUARTER}
        operation={COUNT_TYPE.NONE}
        percent={PERCENT_TYPE.LE_BANKRUPTED_PERCENT}
      />
      <ChartsContainer>
        <LineChartYears lineChart={LINE_CHART_YEAR.LE_BANKRUPTED} />
        <ColumnChartMonth columnChart={COLUMN_CHART_MONTH.LE_BANKRUPTED} />
      </ChartsContainer>
      <TypeActivities
        all={TYPE_ACTIVITY_TYPE.LE_BANKRUPTED_ALL}
        year={TYPE_ACTIVITY_TYPE.LE_BANKRUPTED_YEAR}
        quarter={TYPE_ACTIVITY_TYPE.LE_BANKRUPTED_QUARTER}
        month={TYPE_ACTIVITY_TYPE.LE_BANKRUPTED_MONTH}
      />
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
