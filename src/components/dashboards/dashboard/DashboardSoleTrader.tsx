import React from 'react';
import styled from 'styled-components';
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
import ByAge from '@app/components/dashboards/dashboard/components/ByAge/ByAge';
import { AGE_TYPES } from '@app/components/dashboards/dashboard/components/ByAge/components/Age/AgeTypes';
import AvgAge from '@app/components/dashboards/dashboard/components/ByAge/components/AvgAge/AvgAge';
import { AVG_AGE_TYPES } from '@app/components/dashboards/dashboard/components/ByAge/components/AvgAge/AvgAgeTypes';
import AgePieChart from '@app/components/dashboards/dashboard/components/ByAge/charts/AgePieChart/AgePieChart';
import { CHART_TYPE } from '@app/components/dashboards/dashboard/components/ByAge/charts/AgePieChart/AgePieCharTypes';
import AgeMultipleChart from '@app/components/dashboards/dashboard/components/ByAge/charts/AgeMultipleChart/AgeMultipleChart';
import { AGE_MULTIPLE_TYPES } from '@app/components/dashboards/dashboard/components/ByAge/charts/AgeMultipleChart/AgeMultipleChartTypes';
import { COUNT_CHECKED_TYPE } from '@app/components/dashboards/dashboard/components/Inspection/components/CountChecked/CountCheckedTypes';
import Inspections from '@app/components/dashboards/dashboard/components/Inspection/components/Inspections';
import { Divider } from 'antd';
import RegionsCircleChart from '@app/components/dashboards/dashboard/components/ByAge/charts/RegionsCircleChart/RegionsCircleChart';
import { REGION_CIRCLE_TYPES } from '@app/components/dashboards/dashboard/components/ByAge/charts/RegionsCircleChart/RegionsCircleChartTypes';
import JumpSettlement from '@app/components/dashboards/dashboard/components/Jumps/JumpSettlement';
import { JUMP_TYPE } from '@app/components/dashboards/dashboard/components/Jumps/JumpTypes';
import JumpTypeActivity from '@app/components/dashboards/dashboard/components/Jumps/JumpTypeActivity';
import { LEVEL_COMPETITION } from '@app/components/dashboards/dashboard/components/LevelCompetition/LevelCompetitionTypes';
import LevelCompetition from '@app/components/dashboards/dashboard/components/LevelCompetition/LevelCompetition';

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
      <ByAge
        moreThen20={AGE_TYPES.ST_CURRENT_MORE_THEN_20}
        from10To20={AGE_TYPES.ST_CURRENT_FROM_10_TO_20}
        from5To10={AGE_TYPES.ST_CURRENT_FROM_5_TO_10}
        from1To5={AGE_TYPES.ST_CURRENT_FROM_1_TO_5}
        lessThen1={AGE_TYPES.ST_CURRENT_LESS_THEN_1}
      />
      <ChartsContainer>
        <AvgAge avgAge={AVG_AGE_TYPES.ST_CURRENT} />
        <AgePieChart
          more20={AGE_TYPES.ST_CURRENT_MORE_THEN_20}
          from10To20={AGE_TYPES.ST_CURRENT_FROM_10_TO_20}
          from5To10={AGE_TYPES.ST_CURRENT_FROM_5_TO_10}
          from1To5={AGE_TYPES.ST_CURRENT_FROM_5_TO_10}
          less1={AGE_TYPES.ST_CURRENT_LESS_THEN_1}
          chartType={CHART_TYPE.PIE}
        />
      </ChartsContainer>
      <DetailedInformation detailed={DETAILED_TYPE.ST_CREATED} />

      <JumpSettlement jump={JUMP_TYPE.SOLE_TRADE} />
      <JumpTypeActivity jump={JUMP_TYPE.SOLE_TRADE} />
      <LevelCompetition level_competition={LEVEL_COMPETITION.SOLE_TRADE} />

      <MainInfo
        all={COUNT_TYPE.ST_LIQUIDATED_ALL}
        year={COUNT_YEAR_TYPE.ST_LIQUIDATED_YEAR}
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
      <ByAge
        moreThen20={AGE_TYPES.ST_LIQUIDATED_MORE_THEN_20}
        from10To20={AGE_TYPES.ST_LIQUIDATED_FROM_10_TO_20}
        from5To10={AGE_TYPES.ST_LIQUIDATED_FROM_5_TO_10}
        from1To5={AGE_TYPES.ST_LIQUIDATED_FROM_1_TO_5}
        lessThen1={AGE_TYPES.ST_LIQUIDATED_LESS_THEN_1}
      />
      <AgePieChart
        more20={AGE_TYPES.ST_LIQUIDATED_MORE_THEN_20}
        from10To20={AGE_TYPES.ST_LIQUIDATED_FROM_10_TO_20}
        from5To10={AGE_TYPES.ST_LIQUIDATED_FROM_5_TO_10}
        from1To5={AGE_TYPES.ST_LIQUIDATED_FROM_5_TO_10}
        less1={AGE_TYPES.ST_LIQUIDATED_LESS_THEN_1}
        chartType={CHART_TYPE.ROSE}
      />
      <AgeMultipleChart ageMultiple={AGE_MULTIPLE_TYPES.ST_LIQUIDATED} />
      <DetailedInformation detailed={DETAILED_TYPE.ST_LIQUIDATED} />
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
      <ByAge
        moreThen20={AGE_TYPES.ST_BANKRUPTED_MORE_THEN_20}
        from10To20={AGE_TYPES.ST_BANKRUPTED_FROM_10_TO_20}
        from5To10={AGE_TYPES.ST_BANKRUPTED_FROM_5_TO_10}
        from1To5={AGE_TYPES.ST_BANKRUPTED_FROM_1_TO_5}
        lessThen1={AGE_TYPES.ST_BANKRUPTED_LESS_THEN_1}
      />
      <RegionsCircleChart regionCircle={REGION_CIRCLE_TYPES.ST_BANKRUPTED} />
      <Divider />
      <AgeMultipleChart ageMultiple={AGE_MULTIPLE_TYPES.ST_BANKRUPTED} />
      <Divider />
      <DetailedInformation detailed={DETAILED_TYPE.ST_BANKRUPTED} />
      <Inspections
        all={COUNT_CHECKED_TYPE.ST_CHECKED_ALL}
        liquidated={COUNT_CHECKED_TYPE.ST_CHECKED_LIQUIDATED}
        bankrupted={COUNT_CHECKED_TYPE.ST_CHECKED_BANKRUPTED}
      />
      <ChartsContainer>
        <LineChartYears lineChart={LINE_CHART_YEAR.ST_CHECKED} />
        <ColumnChartMonth columnChart={COLUMN_CHART_MONTH.ST_CHECKED} />
      </ChartsContainer>
      <ChartsContainer>
        <AvgAge avgAge={AVG_AGE_TYPES.ST_CHECKED} />
        <RegionsCircleChart regionCircle={REGION_CIRCLE_TYPES.ST_CHECKED} />
      </ChartsContainer>
      <TypeActivities
        all={TYPE_ACTIVITY_TYPE.ST_CHECKED_ALL}
        year={TYPE_ACTIVITY_TYPE.ST_CHECKED_YEAR}
        quarter={TYPE_ACTIVITY_TYPE.ST_CHECKED_QUARTER}
        month={TYPE_ACTIVITY_TYPE.ST_CHECKED_MONTH}
      />
      <DetailedInformation detailed={DETAILED_TYPE.ST_CHECKED} />
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
