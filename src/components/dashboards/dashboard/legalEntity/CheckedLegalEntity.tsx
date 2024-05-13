import React from 'react';
import * as S from '../styles/DashboardStyle';
import Inspections from '@app/components/dashboards/dashboard/components/Inspection/components/Inspections';
import { COUNT_CHECKED_TYPE } from '@app/components/dashboards/dashboard/components/Inspection/components/CountChecked/CountCheckedTypes';
import LineChartYears from '@app/components/dashboards/dashboard/components/Charts/LineChartYear/LineChartYears';
import { LINE_CHART_YEAR } from '@app/components/dashboards/dashboard/components/Charts/LineChartYear/LineChartYearsTypes';
import ColumnChartMonth from '@app/components/dashboards/dashboard/components/Charts/ColumnChartMonth/ColumnChartMonth';
import { COLUMN_CHART_MONTH } from '@app/components/dashboards/dashboard/components/Charts/ColumnChartMonth/ColumnChartMonthTypes';
import AvgAge from '@app/components/dashboards/dashboard/components/ByAge/components/AvgAge/AvgAge';
import { AVG_AGE_TYPES } from '@app/components/dashboards/dashboard/components/ByAge/components/AvgAge/AvgAgeTypes';
import RegionsCircleChart from '@app/components/dashboards/dashboard/components/ByAge/charts/RegionsCircleChart/RegionsCircleChart';
import { REGION_CIRCLE_TYPES } from '@app/components/dashboards/dashboard/components/ByAge/charts/RegionsCircleChart/RegionsCircleChartTypes';
import TypeActivities from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivities';
import { TYPE_ACTIVITY_TYPE } from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivity/TypeActivityTypes';
import DetailedInformation from '@app/components/dashboards/dashboard/components/DetailedInformation/DetailedInformation';
import { DETAILED_TYPE } from '@app/components/dashboards/dashboard/components/DetailedInformation/DetailedInformationTypes';

const CheckedLegalEntity: React.FC = () => {
  return (
    <>
      <Inspections
        all={COUNT_CHECKED_TYPE.LE_CHECKED_ALL}
        liquidated={COUNT_CHECKED_TYPE.LE_CHECKED_LIQUIDATED}
        bankrupted={COUNT_CHECKED_TYPE.LE_CHECKED_BANKRUPTED}
      />
      <S.ChartsContainer>
        <LineChartYears lineChart={LINE_CHART_YEAR.LE_CHECKED} />
        <ColumnChartMonth columnChart={COLUMN_CHART_MONTH.LE_CHECKED} />
      </S.ChartsContainer>
      <S.ChartsContainer>
        <AvgAge avgAge={AVG_AGE_TYPES.LE_CHECKED} />
        <RegionsCircleChart regionCircle={REGION_CIRCLE_TYPES.LE_CHECKED} />
      </S.ChartsContainer>
      <TypeActivities
        all={TYPE_ACTIVITY_TYPE.LE_CHECKED_ALL}
        year={TYPE_ACTIVITY_TYPE.LE_CHECKED_YEAR}
        quarter={TYPE_ACTIVITY_TYPE.LE_CHECKED_QUARTER}
        month={TYPE_ACTIVITY_TYPE.LE_CHECKED_MONTH}
      />
      <DetailedInformation detailed={DETAILED_TYPE.LE_CHECKED} />
    </>
  );
};

export default CheckedLegalEntity;
