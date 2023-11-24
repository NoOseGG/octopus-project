import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Pie, PieConfig } from '@ant-design/charts';
import { PieContainer } from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import {
  getStateForRegionCircleChart,
  REGION_CIRCLE_TYPES,
  RegionsCircleProps,
} from '@app/components/dashboards/dashboard/components/ByAge/charts/RegionsCircleChart/RegionsCircleChartTypes';
import { doGetDataForBankruptedByRegionsChart } from '@app/store/slices/legalEntityDashboard/charts/bankrupted/bankruptedByRegionsChart';
import { doGetDataForCheckedBySettlementsChart } from '@app/store/slices/legalEntityDashboard/charts/checked/checkedBySettlementsChart';

const RegionsCircleChart: React.FC<RegionsCircleProps> = ({ regionCircle }) => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();
  const dynamicState = useAppSelector((state) => getStateForRegionCircleChart(state, regionCircle));
  const results = dynamicState?.results;

  const getData = useCallback(
    (regionCircle) => {
      switch (regionCircle) {
        case REGION_CIRCLE_TYPES.LE_BANKRUPTED:
          dispatch(doGetDataForBankruptedByRegionsChart({ filters }));
          break;
        case REGION_CIRCLE_TYPES.LE_CHECKED:
          dispatch(doGetDataForCheckedBySettlementsChart({ filters }));
          break;
      }
    },
    [dispatch, filters],
  );

  useEffect(() => {
    getData(regionCircle);
  }, [getData, regionCircle]);

  const data = results.slice(0, 15);

  const config: PieConfig = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    // 设置圆弧起始角度
    startAngle: Math.PI,
    endAngle: Math.PI * 1.5,
    label: {
      type: 'inner',
      offset: '-8%',
      content: '{name}',
      style: {
        fontSize: 18,
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
    pieStyle: {
      lineWidth: 0,
    },
  };

  return (
    <PieContainer>
      <Pie {...config} />
    </PieContainer>
  );
};

export default RegionsCircleChart;
