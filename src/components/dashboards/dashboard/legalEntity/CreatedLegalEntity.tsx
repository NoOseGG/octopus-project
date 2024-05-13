import React from 'react';
import MainInfo from '@app/components/dashboards/dashboard/components/MainInfo/MainInfo';
import { COUNT_TYPE } from '@app/components/dashboards/dashboard/components/MainInfo/components/CountCompany/CountCompanyTypes';
import {
  COUNT_YEAR_TYPE,
  PERCENT_TYPE,
} from '@app/components/dashboards/dashboard/components/MainInfo/components/CountYear/CountYearTypes';
import LineChartYears from '@app/components/dashboards/dashboard/components/Charts/LineChartYear/LineChartYears';
import { LINE_CHART_YEAR } from '@app/components/dashboards/dashboard/components/Charts/LineChartYear/LineChartYearsTypes';
import ColumnChartMonth from '@app/components/dashboards/dashboard/components/Charts/ColumnChartMonth/ColumnChartMonth';
import { COLUMN_CHART_MONTH } from '@app/components/dashboards/dashboard/components/Charts/ColumnChartMonth/ColumnChartMonthTypes';
import TypeActivities from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivities';
import { TYPE_ACTIVITY_TYPE } from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivity/TypeActivityTypes';
import ByAge from '@app/components/dashboards/dashboard/components/ByAge/ByAge';
import { AGE_TYPES } from '@app/components/dashboards/dashboard/components/ByAge/components/Age/AgeTypes';
import AvgAge from '@app/components/dashboards/dashboard/components/ByAge/components/AvgAge/AvgAge';
import { AVG_AGE_TYPES } from '@app/components/dashboards/dashboard/components/ByAge/components/AvgAge/AvgAgeTypes';
import AgePieChart from '@app/components/dashboards/dashboard/components/ByAge/charts/AgePieChart/AgePieChart';
import { CHART_TYPE } from '@app/components/dashboards/dashboard/components/ByAge/charts/AgePieChart/AgePieCharTypes';
import DetailedInformation from '@app/components/dashboards/dashboard/components/DetailedInformation/DetailedInformation';
import { DETAILED_TYPE } from '@app/components/dashboards/dashboard/components/DetailedInformation/DetailedInformationTypes';
import JumpSettlement from '@app/components/dashboards/dashboard/components/Jumps/JumpSettlement';
import { JUMP_TYPE } from '@app/components/dashboards/dashboard/components/Jumps/JumpTypes';
import JumpTypeActivity from '@app/components/dashboards/dashboard/components/Jumps/JumpTypeActivity';
import LevelCompetition from '@app/components/dashboards/dashboard/components/LevelCompetition/LevelCompetition';
import { LEVEL_COMPETITION } from '@app/components/dashboards/dashboard/components/LevelCompetition/LevelCompetitionTypes';
import * as S from '../styles/DashboardStyle';

const CreatedLegalEntity: React.FC = () => {
  return (
    <>
      <MainInfo
        all={COUNT_TYPE.LE_CREATED_ALL}
        year={COUNT_YEAR_TYPE.LE_CREATED_YEAR}
        quarter={COUNT_TYPE.LE_CREATED_QUARTER}
        operation={COUNT_TYPE.LE_CREATED_OPERATION}
        percent={PERCENT_TYPE.LE_CREATED_PERCENT}
      />
      <S.ChartsContainer>
        <LineChartYears lineChart={LINE_CHART_YEAR.LE_CREATED} />
        <ColumnChartMonth columnChart={COLUMN_CHART_MONTH.LE_CREATED} />
      </S.ChartsContainer>
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
      <S.ChartsContainer>
        <AvgAge avgAge={AVG_AGE_TYPES.LE_CURRENT} />
        <AgePieChart
          more20={AGE_TYPES.LE_CURRENT_MORE_THEN_20}
          from10To20={AGE_TYPES.LE_CURRENT_FROM_10_TO_20}
          from5To10={AGE_TYPES.LE_CURRENT_FROM_5_TO_10}
          from1To5={AGE_TYPES.LE_CURRENT_FROM_1_TO_5}
          less1={AGE_TYPES.LE_CURRENT_LESS_THEN_1}
          chartType={CHART_TYPE.PIE}
        />
      </S.ChartsContainer>
      <DetailedInformation detailed={DETAILED_TYPE.LE_CREATED} />
      <JumpSettlement jump={JUMP_TYPE.LEGAL_ENTITY} />
      <JumpTypeActivity jump={JUMP_TYPE.LEGAL_ENTITY} />
      <LevelCompetition level_competition={LEVEL_COMPETITION.LEGAL_ENTITY} />
    </>
  );
};

export default CreatedLegalEntity;
