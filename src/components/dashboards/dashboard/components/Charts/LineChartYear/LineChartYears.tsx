import React, { useCallback, useEffect } from 'react';
import { Line, LineConfig } from '@ant-design/charts';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Container, Title } from '@app/components/dashboards/dashboard/styles/ChartsStyle';
import { doGetDataForLineChart } from '@app/store/slices/legalEntityDashboard/charts/created/createdLineChartSlice';
import {
  getStateForLineChartYears,
  getTitleForLineChartYears,
  LINE_CHART_YEAR,
  LineChartYearsProps,
} from '@app/components/dashboards/dashboard/components/Charts/LineChartYear/LineChartYearsTypes';
import { doGetDataForLiquidatedLineChart } from '@app/store/slices/legalEntityDashboard/charts/liquidated/liquidatedLineChartSlice';
import { doGetDataForLineChartSoleTrade } from '@app/store/slices/soleTradeDashboard/charts/created/createdLineChartSoleTradeSlice';
import { doGetDataForLiquidatedLineChartSoleTrade } from '@app/store/slices/soleTradeDashboard/charts/liquidated/liquidatedLineChartSoleTradeSlice';
import { doGetDataForBankruptedLineChart } from '@app/store/slices/legalEntityDashboard/charts/bankrupted/bankruptedLineChartSlice';
import { doGetDataForBankruptedLineChartSoleTrade } from '@app/store/slices/soleTradeDashboard/charts/bankrupted/bankruptedLineChartSoleTradeSlice';
import { doGetDataForCheckedLineChart } from '@app/store/slices/legalEntityDashboard/charts/checked/checkedLineChartSlice';
import { doGetDataForCheckedLineChartSoleTrade } from '@app/store/slices/soleTradeDashboard/charts/checked/checkedLineChartSoleTradeSlice';

const LineChartYears: React.FC<LineChartYearsProps> = ({ lineChart }) => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dynamicState = useAppSelector((state) => getStateForLineChartYears(state, lineChart));
  const results = dynamicState?.results;
  const dispatch = useAppDispatch();

  const getData = useCallback(
    (lineChart) => {
      switch (lineChart) {
        case LINE_CHART_YEAR.LE_CREATED:
          dispatch(doGetDataForLineChart({ filters }));
          break;
        case LINE_CHART_YEAR.LE_LIQUIDATED:
          dispatch(doGetDataForLiquidatedLineChart({ filters }));
          break;
        case LINE_CHART_YEAR.LE_BANKRUPTED:
          dispatch(doGetDataForBankruptedLineChart({ filters }));
          break;
        case LINE_CHART_YEAR.LE_CHECKED:
          dispatch(doGetDataForCheckedLineChart({ filters }));
          break;

        case LINE_CHART_YEAR.ST_CREATED:
          dispatch(doGetDataForLineChartSoleTrade({ filters }));
          break;
        case LINE_CHART_YEAR.ST_LIQUIDATED:
          dispatch(doGetDataForLiquidatedLineChartSoleTrade({ filters }));
          break;
        case LINE_CHART_YEAR.ST_BANKRUPTED:
          dispatch(doGetDataForBankruptedLineChartSoleTrade({ filters }));
          break;
        case LINE_CHART_YEAR.ST_CHECKED:
          dispatch(doGetDataForCheckedLineChartSoleTrade({ filters }));
          break;
      }
    },
    [dispatch, filters],
  );

  useEffect(() => {
    getData(lineChart);
  }, [getData, lineChart]);

  const data = results?.map((item) => {
    return {
      year: item.type,
      value: item.sales,
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
      <Title>{getTitleForLineChartYears(lineChart)}</Title>
      <Line {...config}></Line>
    </Container>
  );
};

export default LineChartYears;
