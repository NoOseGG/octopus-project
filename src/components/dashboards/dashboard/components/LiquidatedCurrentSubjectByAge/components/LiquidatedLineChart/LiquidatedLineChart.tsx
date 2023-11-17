import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Line } from '@ant-design/plots';
import { PieContainer } from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import { LineConfig } from '@ant-design/charts';

const LiquidatedLineChart: React.FC = () => {
  const count20More = useAppSelector((state) => state.liquidatedByAge.liquidateMoreThen20.age);
  const countFrom10To20 = useAppSelector((state) => state.liquidatedByAge.liquidateFrom10To20.age);
  const countFrom5To10 = useAppSelector((state) => state.liquidatedByAge.liquidateFrom5To10.age);
  const countFrom1To5 = useAppSelector((state) => state.liquidatedByAge.liquidateFrom1To5.age);
  const count1Less = useAppSelector((state) => state.liquidatedByAge.liquidateLessThen1.age);

  const data = [
    {
      type: '< 1',
      value: count1Less,
    },
    {
      type: '1 - 5',
      value: countFrom1To5,
    },
    {
      type: '5 - 10',
      value: countFrom5To10,
    },
    {
      type: '10 - 20',
      value: countFrom10To20,
    },
    {
      type: '> 20',
      value: count20More,
    },
  ];

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
    xField: 'type',
    yField: 'value',
    seriesField: 'category',
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
    color: COLOR_PLATE_10,
    point: {
      shape: ({ category }) => {
        return category === 'Gas fuel' ? 'square' : 'circle';
      },
      style: ({ year }) => {
        return {
          r: Number(year) % 4 ? 0 : 3, // 4 个数据示一个点标记
        };
      },
    },
  };

  return (
    <PieContainer>
      <Line {...config} />
    </PieContainer>
  );
};

export default LiquidatedLineChart;
