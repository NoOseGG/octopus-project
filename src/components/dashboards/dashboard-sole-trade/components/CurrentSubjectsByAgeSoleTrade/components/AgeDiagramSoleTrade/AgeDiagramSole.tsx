import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Pie } from '@ant-design/charts';
import { PieContainer } from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';

const AgeDiagramSoleTrade: React.FC = () => {
  const count20More = useAppSelector((state) => state.currentByAgeSoleTrade.moreThen20SoleTrade.age);
  const countFrom10To20 = useAppSelector((state) => state.currentByAgeSoleTrade.from10To20SoleTrade.age);
  const countFrom5To10 = useAppSelector((state) => state.currentByAgeSoleTrade.from5To10SoleTrade.age);
  const countFrom1To5 = useAppSelector((state) => state.currentByAgeSoleTrade.from1To5SoleTrade.age);
  const count1Less = useAppSelector((state) => state.currentByAgeSoleTrade.lessThen1SoleTrade.age);

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

export default AgeDiagramSoleTrade;
