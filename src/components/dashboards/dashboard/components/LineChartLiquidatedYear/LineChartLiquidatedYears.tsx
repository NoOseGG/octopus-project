import React, { useEffect } from 'react';
import { Line, LineConfig } from '@ant-design/charts';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import styled from 'styled-components';
import { doGetDataForLineChartLiquidated } from '@app/store/slices/legalEntityDashboard/liquidatedMainInfo';

const LineChartLiquidatedYears: React.FC = () => {
  const lineChart = useAppSelector((state) => state.liquidatedMainInfo.lineChart);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetDataForLineChartLiquidated(filters));
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
      <Title>Динамика регистрации компаний</Title>
      <Line {...config}></Line>
    </Container>
  );
};

export default LineChartLiquidatedYears;

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
