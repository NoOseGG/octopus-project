import React from 'react';
import LineChartYears from '@app/components/dashboards/dashboard/components/Charts/LineChartYear/LineChartYears';
import { LINE_CHART_YEAR } from '@app/components/dashboards/dashboard/components/Charts/LineChartYear/LineChartYearsTypes';
import ColumnChartMonth from '@app/components/dashboards/dashboard/components/Charts/ColumnChartMonth/ColumnChartMonth';
import { COLUMN_CHART_MONTH } from '@app/components/dashboards/dashboard/components/Charts/ColumnChartMonth/ColumnChartMonthTypes';
import TypeActivities from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivities';
import { TYPE_ACTIVITY_TYPE } from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivity/TypeActivityTypes';
import AvgAge from '@app/components/dashboards/dashboard/components/ByAge/components/AvgAge/AvgAge';
import { AVG_AGE_TYPES } from '@app/components/dashboards/dashboard/components/ByAge/components/AvgAge/AvgAgeTypes';
import DetailedInformation from '@app/components/dashboards/dashboard/components/DetailedInformation/DetailedInformation';
import { DETAILED_TYPE } from '@app/components/dashboards/dashboard/components/DetailedInformation/DetailedInformationTypes';
import * as S from '../styles/DashboardStyle';
import Inspections from '@app/components/dashboards/dashboard/components/Inspection/components/Inspections';
import { COUNT_CHECKED_TYPE } from '@app/components/dashboards/dashboard/components/Inspection/components/CountChecked/CountCheckedTypes';
import RegionsCircleChart from '@app/components/dashboards/dashboard/components/ByAge/charts/RegionsCircleChart/RegionsCircleChart';
import { REGION_CIRCLE_TYPES } from '@app/components/dashboards/dashboard/components/ByAge/charts/RegionsCircleChart/RegionsCircleChartTypes';

const CheckedSoleTrade: React.FC = () => {
  return (
    <>
      <Inspections
        all={COUNT_CHECKED_TYPE.ST_CHECKED_ALL}
        liquidated={COUNT_CHECKED_TYPE.ST_CHECKED_LIQUIDATED}
        bankrupted={COUNT_CHECKED_TYPE.ST_CHECKED_BANKRUPTED}
      />
      <S.ChartsContainer>
        <LineChartYears lineChart={LINE_CHART_YEAR.ST_CHECKED} />
        <ColumnChartMonth columnChart={COLUMN_CHART_MONTH.ST_CHECKED} />
      </S.ChartsContainer>
      <S.ChartsContainer>
        <AvgAge avgAge={AVG_AGE_TYPES.ST_CHECKED} />
        <RegionsCircleChart regionCircle={REGION_CIRCLE_TYPES.ST_CHECKED} />
      </S.ChartsContainer>
      <TypeActivities
        all={TYPE_ACTIVITY_TYPE.ST_CHECKED_ALL}
        year={TYPE_ACTIVITY_TYPE.ST_CHECKED_YEAR}
        quarter={TYPE_ACTIVITY_TYPE.ST_CHECKED_QUARTER}
        month={TYPE_ACTIVITY_TYPE.ST_CHECKED_MONTH}
      />
      <DetailedInformation detailed={DETAILED_TYPE.ST_CHECKED} />
    </>
  );
};

export default CheckedSoleTrade;
