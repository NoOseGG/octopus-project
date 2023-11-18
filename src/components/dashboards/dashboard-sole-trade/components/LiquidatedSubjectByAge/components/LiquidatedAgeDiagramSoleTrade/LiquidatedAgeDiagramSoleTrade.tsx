import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Rose } from '@ant-design/plots';
import { PieContainer } from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import { RoseConfig } from '@ant-design/charts';

const LiquidatedAgeDiagram: React.FC = () => {
  const count20More = useAppSelector((state) => state.liquidatedByAgeSoleTrade.liquidateMoreThen20SoleTrade.age);
  const countFrom10To20 = useAppSelector((state) => state.liquidatedByAgeSoleTrade.liquidateFrom10To20SoleTrade.age);
  const countFrom5To10 = useAppSelector((state) => state.liquidatedByAgeSoleTrade.liquidateFrom5To10SoleTrade.age);
  const countFrom1To5 = useAppSelector((state) => state.liquidatedByAgeSoleTrade.liquidateFrom1To5SoleTrade.age);
  const count1Less = useAppSelector((state) => state.liquidatedByAgeSoleTrade.liquidateLessThen1SoleTrade.age);

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
