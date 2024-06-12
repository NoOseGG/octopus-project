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
import DetailedInformation from '@app/components/dashboards/dashboard/components/DetailedInformation/DetailedInformation';
import { DETAILED_TYPE } from '@app/components/dashboards/dashboard/components/DetailedInformation/DetailedInformationTypes';
import * as S from '../styles/DashboardStyle';
import RegionsCircleChart from '@app/components/dashboards/dashboard/components/ByAge/charts/RegionsCircleChart/RegionsCircleChart';
import { REGION_CIRCLE_TYPES } from '@app/components/dashboards/dashboard/components/ByAge/charts/RegionsCircleChart/RegionsCircleChartTypes';
import { Divider } from 'antd';
import AgeMultipleChart from '@app/components/dashboards/dashboard/components/ByAge/charts/AgeMultipleChart/AgeMultipleChart';
import { AGE_MULTIPLE_TYPES } from '@app/components/dashboards/dashboard/components/ByAge/charts/AgeMultipleChart/AgeMultipleChartTypes';

const BankruptedSoleTrade: React.FC = () => {
  return (
    <>
      <MainInfo
        all={COUNT_TYPE.ST_BANKRUPT_ALL}
        year={COUNT_YEAR_TYPE.ST_BANKRUPTED_YEAR}
        quarter={COUNT_TYPE.ST_BANKRUPT_QUARTER}
        operation={COUNT_TYPE.NONE}
        percent={PERCENT_TYPE.ST_BANKRUPTED_PERCENT}
      />
      <S.ChartsContainer>
        <LineChartYears lineChart={LINE_CHART_YEAR.ST_BANKRUPTED} />
        <ColumnChartMonth columnChart={COLUMN_CHART_MONTH.ST_BANKRUPTED} />
      </S.ChartsContainer>
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
    </>
  );
};

export default BankruptedSoleTrade;
