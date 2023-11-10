import React, { useEffect } from 'react';
import { Line, LineConfig } from '@ant-design/charts';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import styled from 'styled-components';
import { DashboardProps } from '@app/components/dashboards/dashboard/DashboardTypes';
import { doGetDataForLiquidatedLineChart } from '@app/store/slices/legalEntityDashboard/charts/liquidatedLineChart';
import { getEntityName } from '@app/utils/utils';

const LineChartLiquidatedYears: React.FC<DashboardProps> = ({ legal_entity }) => {
  const { results, loading } = useAppSelector((state) => state.charts.liquidatedLineChart);
  const entity = getEntityName(legal_entity);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetDataForLiquidatedLineChart({ filters, legal_entity }));
  }, [dispatch, filters, legal_entity]);

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
      <Title>Динамика ликвидаций {entity}</Title>
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
