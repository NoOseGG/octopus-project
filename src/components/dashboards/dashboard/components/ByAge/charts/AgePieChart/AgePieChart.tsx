import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Pie, RoseConfig } from '@ant-design/charts';
import { PieContainer } from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import { getStateForAge } from '@app/components/dashboards/dashboard/components/ByAge/components/Age/AgeTypes';
import {
  AgePieChartProps,
  CHART_TYPE,
} from '@app/components/dashboards/dashboard/components/ByAge/charts/AgePieChart/AgePieCharTypes';
import { Rose } from '@ant-design/plots';

const AgePieChart: React.FC<AgePieChartProps> = ({ more20, from10To20, from5To10, from1To5, less1, chartType }) => {
  const count20More = useAppSelector((state) => getStateForAge(state, more20)).age;
  const countFrom10To20 = useAppSelector((state) => getStateForAge(state, from10To20)).age;
  const countFrom5To10 = useAppSelector((state) => getStateForAge(state, from5To10)).age;
  const countFrom1To5 = useAppSelector((state) => getStateForAge(state, from1To5)).age;
  const count1Less = useAppSelector((state) => getStateForAge(state, less1)).age;

  const data = [
    {
      type: 'Менее года',
      value: count1Less,
    },
    {
      type: 'от 1 до 5 лет',
      value: countFrom1To5,
    },
    {
      type: 'от 5 до 10 лет',
      value: countFrom5To10,
    },
    {
      type: 'от 10 до 20 лет',
      value: countFrom10To20,
    },
    {
      type: 'Более 20 лет',
      value: count20More,
    },
  ];

  if (chartType === CHART_TYPE.PIE) {
    const config = {
      appendPadding: 10,
      data,
      angleField: 'value',
      colorField: 'type',
      radius: 0.8,
      label: {
        type: 'outer',
        content: '{name} {percentage}',
      },
      interactions: [
        {
          type: 'pie-legend-active',
        },
        {
          type: 'element-active',
        },
      ],
    };

    return (
      <PieContainer>
        <Pie {...config} />
      </PieContainer>
    );
  } else {
    const config: RoseConfig = {
      data,
      xField: 'type',
      yField: 'value',
      seriesField: 'type',
      radius: 0.9,
      legend: {
        position: 'bottom',
      },
    };

    return (
      <PieContainer>
        <Rose {...config}></Rose>
      </PieContainer>
    );
  }
};

export default AgePieChart;
