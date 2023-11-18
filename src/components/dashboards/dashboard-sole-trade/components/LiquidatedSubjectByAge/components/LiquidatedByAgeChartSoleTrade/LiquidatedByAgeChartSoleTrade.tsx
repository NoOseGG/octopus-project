import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Line, LineConfig } from '@ant-design/charts';
import { doGetDataForLiquidatedByAgeChartSoleTrade } from '@app/store/slices/soleTradeDashboard/charts/liquidatedByAgeChartSoleTradeSlice';

const LiquidatedByAgeChartSoleTrade: React.FC = () => {
  const { results } = useAppSelector((state) => state.chartsSoleTrade.liquidatedByAgeSoleTrade);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetDataForLiquidatedByAgeChartSoleTrade({ filters }));
  }, [dispatch, filters]);

  const data = results?.map((item) => {
    return {
      year: item.group_fields.company_status_from_dttm__year,
      value: item.Count,
      category: item.group_fields.period_activity,
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

export default LiquidatedByAgeChartSoleTrade;
