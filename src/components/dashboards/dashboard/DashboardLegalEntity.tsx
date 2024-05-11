import React, { useEffect } from 'react';
import styled from 'styled-components';
import LineChartYears from '@app/components/dashboards/dashboard/components/Charts/LineChartYear/LineChartYears';
import TypeActivities from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivities';
import DetailedInformation from '@app/components/dashboards/dashboard/components/DetailedInformation/DetailedInformation';
import { DETAILED_TYPE } from '@app/components/dashboards/dashboard/components/DetailedInformation/DetailedInformationTypes';
import { LINE_CHART_YEAR } from '@app/components/dashboards/dashboard/components/Charts/LineChartYear/LineChartYearsTypes';
import ColumnChartMonth from '@app/components/dashboards/dashboard/components/Charts/ColumnChartMonth/ColumnChartMonth';
import { COLUMN_CHART_MONTH } from '@app/components/dashboards/dashboard/components/Charts/ColumnChartMonth/ColumnChartMonthTypes';
import { TYPE_ACTIVITY_TYPE } from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivity/TypeActivityTypes';
import ByAge from '@app/components/dashboards/dashboard/components/ByAge/ByAge';
import { AGE_TYPES } from '@app/components/dashboards/dashboard/components/ByAge/components/Age/AgeTypes';
import AvgAge from '@app/components/dashboards/dashboard/components/ByAge/components/AvgAge/AvgAge';
import { AVG_AGE_TYPES } from '@app/components/dashboards/dashboard/components/ByAge/components/AvgAge/AvgAgeTypes';
import AgePieChart from '@app/components/dashboards/dashboard/components/ByAge/charts/AgePieChart/AgePieChart';
import AgeMultipleChart from '@app/components/dashboards/dashboard/components/ByAge/charts/AgeMultipleChart/AgeMultipleChart';
import { AGE_MULTIPLE_TYPES } from '@app/components/dashboards/dashboard/components/ByAge/charts/AgeMultipleChart/AgeMultipleChartTypes';
import { CHART_TYPE } from '@app/components/dashboards/dashboard/components/ByAge/charts/AgePieChart/AgePieCharTypes';
import RegionsCircleChart from '@app/components/dashboards/dashboard/components/ByAge/charts/RegionsCircleChart/RegionsCircleChart';
import Inspections from '@app/components/dashboards/dashboard/components/Inspection/components/Inspections';
import { COUNT_CHECKED_TYPE } from '@app/components/dashboards/dashboard/components/Inspection/components/CountChecked/CountCheckedTypes';
import { REGION_CIRCLE_TYPES } from '@app/components/dashboards/dashboard/components/ByAge/charts/RegionsCircleChart/RegionsCircleChartTypes';
import { Divider } from 'antd';
import JumpSettlement from '@app/components/dashboards/dashboard/components/Jumps/JumpSettlement';
import { JUMP_TYPE } from '@app/components/dashboards/dashboard/components/Jumps/JumpTypes';
import JumpTypeActivity from '@app/components/dashboards/dashboard/components/Jumps/JumpTypeActivity';
import LevelCompetition from '@app/components/dashboards/dashboard/components/LevelCompetition/LevelCompetition';
import { LEVEL_COMPETITION } from '@app/components/dashboards/dashboard/components/LevelCompetition/LevelCompetitionTypes';
import { COUNT_TYPE } from '@app/components/dashboards/dashboard/components/MainInfo/components/CountCompany/CountCompanyTypes';
import {
  COUNT_YEAR_TYPE,
  PERCENT_TYPE,
} from '@app/components/dashboards/dashboard/components/MainInfo/components/CountYear/CountYearTypes';
import MainInfo from '@app/components/dashboards/dashboard/components/MainInfo/MainInfo';
import { dashboardController } from '@app/api/http.api';

const DashboardLegalEntity: React.FC = () => {
  useEffect(() => {
    console.log('mount');
    return () => {
      console.log('did mount');
      dashboardController.abort();
    };
  }, []);

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
      <ByAge
        moreThen20={AGE_TYPES.LE_CURRENT_MORE_THEN_20}
        from10To20={AGE_TYPES.LE_CURRENT_FROM_10_TO_20}
        from5To10={AGE_TYPES.LE_CURRENT_FROM_5_TO_10}
        from1To5={AGE_TYPES.LE_CURRENT_FROM_1_TO_5}
        lessThen1={AGE_TYPES.LE_CURRENT_LESS_THEN_1}
      />
      <ChartsContainer>
        <AvgAge avgAge={AVG_AGE_TYPES.LE_CURRENT} />
        <AgePieChart
          more20={AGE_TYPES.LE_CURRENT_MORE_THEN_20}
          from10To20={AGE_TYPES.LE_CURRENT_FROM_10_TO_20}
          from5To10={AGE_TYPES.LE_CURRENT_FROM_5_TO_10}
          from1To5={AGE_TYPES.LE_CURRENT_FROM_1_TO_5}
          less1={AGE_TYPES.LE_CURRENT_LESS_THEN_1}
          chartType={CHART_TYPE.PIE}
        />
      </ChartsContainer>
      <DetailedInformation detailed={DETAILED_TYPE.LE_CREATED} />
      <JumpSettlement jump={JUMP_TYPE.LEGAL_ENTITY} />
      <JumpTypeActivity jump={JUMP_TYPE.LEGAL_ENTITY} />
      <LevelCompetition level_competition={LEVEL_COMPETITION.LEGAL_ENTITY} />

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
      <ByAge
        moreThen20={AGE_TYPES.LE_LIQUIDATED_MORE_THEN_20}
        from10To20={AGE_TYPES.LE_LIQUIDATED_FROM_10_TO_20}
        from5To10={AGE_TYPES.LE_LIQUIDATED_FROM_5_TO_10}
        from1To5={AGE_TYPES.LE_LIQUIDATED_FROM_1_TO_5}
        lessThen1={AGE_TYPES.LE_LIQUIDATED_LESS_THEN_1}
      />
      <AgePieChart
        more20={AGE_TYPES.LE_LIQUIDATED_MORE_THEN_20}
        from10To20={AGE_TYPES.LE_LIQUIDATED_FROM_10_TO_20}
        from5To10={AGE_TYPES.LE_LIQUIDATED_FROM_5_TO_10}
        from1To5={AGE_TYPES.LE_LIQUIDATED_FROM_1_TO_5}
        less1={AGE_TYPES.LE_LIQUIDATED_LESS_THEN_1}
        chartType={CHART_TYPE.ROSE}
      />
      <AgeMultipleChart ageMultiple={AGE_MULTIPLE_TYPES.LE_LIQUIDATED} />
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
      <ByAge
        moreThen20={AGE_TYPES.LE_BANKRUPTED_MORE_THEN_20}
        from10To20={AGE_TYPES.LE_BANKRUPTED_FROM_10_TO_20}
        from5To10={AGE_TYPES.LE_BANKRUPTED_FROM_5_TO_10}
        from1To5={AGE_TYPES.LE_BANKRUPTED_FROM_1_TO_5}
        lessThen1={AGE_TYPES.LE_BANKRUPTED_LESS_THEN_1}
      />
      <RegionsCircleChart regionCircle={REGION_CIRCLE_TYPES.LE_BANKRUPTED} />
      <Divider />
      <AgeMultipleChart ageMultiple={AGE_MULTIPLE_TYPES.LE_BANKRUPTED} />
      <Divider />
      <DetailedInformation detailed={DETAILED_TYPE.LE_BANKRUPTED} />

      <Inspections
        all={COUNT_CHECKED_TYPE.LE_CHECKED_ALL}
        liquidated={COUNT_CHECKED_TYPE.LE_CHECKED_LIQUIDATED}
        bankrupted={COUNT_CHECKED_TYPE.LE_CHECKED_BANKRUPTED}
      />
      <ChartsContainer>
        <LineChartYears lineChart={LINE_CHART_YEAR.LE_CHECKED} />
        <ColumnChartMonth columnChart={COLUMN_CHART_MONTH.LE_CHECKED} />
      </ChartsContainer>
      <ChartsContainer>
        <AvgAge avgAge={AVG_AGE_TYPES.LE_CHECKED} />
        <RegionsCircleChart regionCircle={REGION_CIRCLE_TYPES.LE_CHECKED} />
      </ChartsContainer>
      <TypeActivities
        all={TYPE_ACTIVITY_TYPE.LE_CHECKED_ALL}
        year={TYPE_ACTIVITY_TYPE.LE_CHECKED_YEAR}
        quarter={TYPE_ACTIVITY_TYPE.LE_CHECKED_QUARTER}
        month={TYPE_ACTIVITY_TYPE.LE_CHECKED_MONTH}
      />
      <DetailedInformation detailed={DETAILED_TYPE.LE_CHECKED} />
    </Container>
  );
};

export default DashboardLegalEntity;

const Container = styled.div`
  width: 100%;
`;

const ChartsContainer = styled.div`
  margin-top: 30px;
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
