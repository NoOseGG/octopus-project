import React, { useEffect } from 'react';
import { Line, LineConfig } from '@ant-design/charts';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Container, Title } from '@app/components/dashboards/dashboard/styles/ChartsStyle';
import { doGetDataForLineSoleTradeChart } from '@app/store/slices/soleTradeDashboard/charts/created/createdLineChartSoleTradeSlice';

const LineChartYearsSoleTrade: React.FC = () => {
  const { results } = useAppSelector((state) => state.chartsSoleTrade.createdLineChartSoleTrade);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetDataForLineSoleTradeChart({ filters }));
  }, [dispatch, filters]);

  const data = results.map((item) => {
    return {
      year: item.group_fields.company_date_registration__year,
      value: item.Count,
    };
  });

  const config: LineConfig = {
    data,
    xField: 'year',
    yField: 'value',
    label: {},
    point: {
      size: 5,
      shape: 'dot',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
        cursor: 'pointer',
      },
    },
    tooltip: {
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: '#000',
          fill: 'red',
        },
      },
    },
    interactions: [
      {
        type: 'marker-active',
      },
    ],
  };

  return (
    <Container>
      <Title>Динамика регистрации ИП</Title>
      <Line {...config}></Line>
    </Container>
  );
};

export default LineChartYearsSoleTrade;
