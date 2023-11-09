import React, { useEffect } from 'react';
import { Line, LineConfig } from '@ant-design/charts';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import styled from 'styled-components';
import { doGetDataForLineChartLiquidatedSoleTrade } from '@app/store/slices/dashboardSoleTrader/liquidatedMainInfoSoleTrade';

const LineChartLiquidatedYearsSoleTrade: React.FC = () => {
  const lineChart = useAppSelector((state) => state.liquidatedMainInfoSoleTrade.lineChart);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetDataForLineChartLiquidatedSoleTrade(filters));
  }, [dispatch, filters]);

  const data = lineChart.results.map((item) => {
    return {
      year: item.group_fields.company_status_from_dttm__year,
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
      <Title>Динамика ликвидаций ИП</Title>
      <Line {...config}></Line>
    </Container>
  );
};

export default LineChartLiquidatedYearsSoleTrade;

const Container = styled.div`
  width: auto;
  flex-grow: 1;
  margin-top: 30px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;
