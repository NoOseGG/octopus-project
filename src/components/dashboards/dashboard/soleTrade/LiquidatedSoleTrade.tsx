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
import AgePieChart from '@app/components/dashboards/dashboard/components/ByAge/charts/AgePieChart/AgePieChart';
import { CHART_TYPE } from '@app/components/dashboards/dashboard/components/ByAge/charts/AgePieChart/AgePieCharTypes';
import DetailedInformation from '@app/components/dashboards/dashboard/components/DetailedInformation/DetailedInformation';
import { DETAILED_TYPE } from '@app/components/dashboards/dashboard/components/DetailedInformation/DetailedInformationTypes';
import * as S from '../styles/DashboardStyle';
import AgeMultipleChart from '@app/components/dashboards/dashboard/components/ByAge/charts/AgeMultipleChart/AgeMultipleChart';
import { AGE_MULTIPLE_TYPES } from '@app/components/dashboards/dashboard/components/ByAge/charts/AgeMultipleChart/AgeMultipleChartTypes';

const LiquidatedSoleTrade: React.FC = () => {
  return (
    <>
      <MainInfo
        all={COUNT_TYPE.ST_LIQUIDATED_ALL}
        year={COUNT_YEAR_TYPE.ST_LIQUIDATED_YEAR}
        quarter={COUNT_TYPE.ST_LIQUIDATED_QUARTER}
        operation={COUNT_TYPE.NONE}
        percent={PERCENT_TYPE.ST_LIQUIDATE_PERCENT}
      />
      <S.ChartsContainer>
        <LineChartYears lineChart={LINE_CHART_YEAR.ST_LIQUIDATED} />
        <ColumnChartMonth columnChart={COLUMN_CHART_MONTH.ST_LIQUIDATED} />
      </S.ChartsContainer>
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
    </>
  );
};

export default LiquidatedSoleTrade;
