import React, { useEffect } from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Pie } from '@ant-design/charts';
import { PieContainer } from '@app/components/dashboards/dashboard/components/CurrentSubjectsByAge/CurrentSubjectsByAgeStyle';

const AgeDiagram: React.FC = () => {
  const count20More = useAppSelector((state) => state.currentByAge.moreThen20.age);
  const countFrom10To20 = useAppSelector((state) => state.currentByAge.from10To20.age);
  const countFrom5To10 = useAppSelector((state) => state.currentByAge.from5To10.age);
  const countFrom1To5 = useAppSelector((state) => state.currentByAge.from1To5.age);
  const count1Less = useAppSelector((state) => state.currentByAge.lessThen1.age);

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
};

export default AgeDiagram;
