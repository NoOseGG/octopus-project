import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Pie, PieConfig } from '@ant-design/charts';
import { PieContainer } from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import { doGetDataForBankruptedByRegionsChart } from '@app/store/slices/legalEntityDashboard/charts/bankrupted/bankruptedByRegionsChart';

const RegionsCircleChart: React.FC = () => {
  const { results } = useAppSelector((state) => state.charts.bankruptedByRegionsChart);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetDataForBankruptedByRegionsChart({ filters }));
  }, [dispatch, filters]);

  const data = results;

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
      return <Pie {...config} />;
    </PieContainer>
  );
};

export default RegionsCircleChart;
