import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doGetDataForLiquidatedByAgeChart } from '@app/store/slices/legalEntityDashboard/charts/liquidated/liquidatedByAgeChartSlice';
import { Line, LineConfig } from '@ant-design/charts';
import {
  AGE_MULTIPLE_TYPES,
  AgeMultipleChartProps,
  getStateForAgeMultipleChart,
} from '@app/components/dashboards/dashboard/components/ByAge/charts/AgeMultipleChart/AgeMultipleChartTypes';
import { doGetDataForLiquidatedByAgeChartSoleTrade } from '@app/store/slices/soleTradeDashboard/charts/liquidated/liquidatedByAgeChartSoleTradeSlice';
import { doGetDataForBankruptedByAgeChart } from '@app/store/slices/legalEntityDashboard/charts/bankrupted/bankruptedByAgeChartSlice';
import { doGetDataForBankruptedByAgeChartSoleTrade } from '@app/store/slices/soleTradeDashboard/charts/bankrupted/bankruptedByAgeChartSoleTradeSlice';

const LiquidatedByAgeChart: React.FC<AgeMultipleChartProps> = ({ ageMultiple }) => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();
  const dynamicState = useAppSelector((state) => getStateForAgeMultipleChart(state, ageMultiple));
  const results = dynamicState?.results;

  const getData = useCallback(
    (ageMultiple) => {
      switch (ageMultiple) {
        case AGE_MULTIPLE_TYPES.LE_LIQUIDATED:
          dispatch(doGetDataForLiquidatedByAgeChart({ filters }));
          break;
        case AGE_MULTIPLE_TYPES.LE_BANKRUPTED:
          dispatch(doGetDataForBankruptedByAgeChart({ filters }));
          break;
        case AGE_MULTIPLE_TYPES.ST_LIQUIDATED:
          dispatch(doGetDataForLiquidatedByAgeChartSoleTrade({ filters }));
          break;
        case AGE_MULTIPLE_TYPES.ST_BANKRUPTED:
          dispatch(doGetDataForBankruptedByAgeChartSoleTrade({ filters }));
          break;
      }
    },
    [dispatch, filters],
  );

  useEffect(() => {
    getData(ageMultiple);
  }, [getData, ageMultiple]);

  const data = results?.map((item, index) => {
    return {
      year: item.group_fields.company_status_from_dttm__year,
      value: item.Count,
      category: item.group_fields.period_activity,
      key: index,
    };
  });

  const COLOR_PLATE_10 = [
    '#5B8FF9',
    '#5AD8A6',
    '#5D7092',
    '#F6BD16',
    '#E8684A',
    '#6DC8EC',
    '#9270CA',
    '#FF9D4D',
    '#269A99',
    '#FF99C3',
  ];

  const config: LineConfig = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
    label: {},
    color: COLOR_PLATE_10,
    point: {
      size: 3,
      shape: 'dot',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 1,
        cursor: 'pointer',
      },
    },
  };

  return <Line {...config} />;
};

export default LiquidatedByAgeChart;
