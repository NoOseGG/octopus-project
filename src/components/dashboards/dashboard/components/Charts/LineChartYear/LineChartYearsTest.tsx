import React, { useCallback, useEffect, useState } from 'react';
import { Line, LineConfig } from '@ant-design/charts';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Container, Title } from '@app/components/dashboards/dashboard/styles/ChartsStyle';
import legalEntityDashboardService, {
  LINE_CHART,
} from '@app/services/legalEntityDashboard/legalEntityDashboard.service';
import { useDashboardLineChartQuery } from '@app/hooks/useQuery/useDashboardLineChartQuery';

type MyComponentProps = {
  type: LINE_CHART;
};

const LineChartYearsTest: React.FC<MyComponentProps> = ({ type }) => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const { data, isLoading } = useDashboardLineChartQuery(type, filters);

  const config: LineConfig = {
    data: data || [],
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
      <Title>{legalEntityDashboardService.getTitle(type)}</Title>
      <Line {...config}></Line>
    </Container>
  );
};

export default LineChartYearsTest;
