import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Rose } from '@ant-design/plots';
import { PieContainer } from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import { RoseConfig } from '@ant-design/charts';

const LiquidatedAgeDiagram: React.FC = () => {
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
};

export default LiquidatedAgeDiagram;
