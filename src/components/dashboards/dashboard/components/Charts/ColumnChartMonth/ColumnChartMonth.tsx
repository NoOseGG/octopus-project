import React, { useCallback, useEffect } from 'react';
import { Column } from '@ant-design/plots';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Container, Title } from '@app/components/dashboards/dashboard/styles/ChartsStyle';
import { getNameMonthByNumber } from '@app/utils/utils';
import { ColumnConfig } from '@ant-design/charts';
import { doGetDataForColumnChart } from '@app/store/slices/legalEntityDashboard/charts/created/createdColumnChartSlice';
import {
  COLUMN_CHART_MONTH,
  ColumnChartMonthProps,
  getStateForColumnChartMonth,
  getTitleForColumnChartMonth,
} from '@app/components/dashboards/dashboard/components/Charts/ColumnChartMonth/ColumnChartMonthTypes';
import { doGetDataForLiquidatedColumnChart } from '@app/store/slices/legalEntityDashboard/charts/liquidated/liquidatedColumnChartSlice';
import { doGetDataForColumnChartSoleTrade } from '@app/store/slices/soleTradeDashboard/charts/created/createdColumnChartSoleTradeSlice';
import { doGetDataForLiquidatedColumnChartSoleTrade } from '@app/store/slices/soleTradeDashboard/charts/liquidated/liquidatedColumnChartSoleTradeSlice';
import { doGetDataForBankruptedColumnChart } from '@app/store/slices/legalEntityDashboard/charts/bankrupted/bankrutpedColumnChartSlice';
import { doGetDataForBankruptedColumnChartSoleTrade } from '@app/store/slices/soleTradeDashboard/charts/bankrupted/bankrutpedColumnChartSoleTradeSlice';

const ColumnChartMonth: React.FC<ColumnChartMonthProps> = ({ columnChart }) => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dynamicState = useAppSelector((state) => getStateForColumnChartMonth(state, columnChart));
  const results = dynamicState?.results;
  const loading = dynamicState?.loading;
  const dispatch = useAppDispatch();

  const getData = useCallback(
    (columnChart) => {
      switch (columnChart) {
        case COLUMN_CHART_MONTH.LE_CREATED:
          dispatch(doGetDataForColumnChart({ filters }));
          break;
        case COLUMN_CHART_MONTH.LE_LIQUIDATED:
          dispatch(doGetDataForLiquidatedColumnChart({ filters }));
          break;
        case COLUMN_CHART_MONTH.LE_BANKRUPTED:
          dispatch(doGetDataForBankruptedColumnChart({ filters }));
          break;

        case COLUMN_CHART_MONTH.ST_CREATED:
          dispatch(doGetDataForColumnChartSoleTrade({ filters }));
          break;
        case COLUMN_CHART_MONTH.ST_LIQUIDATED:
          dispatch(doGetDataForLiquidatedColumnChartSoleTrade({ filters }));
          break;
        case COLUMN_CHART_MONTH.ST_BANKRUPTED:
          dispatch(doGetDataForBankruptedColumnChartSoleTrade({ filters }));
          break;
      }
    },
    [dispatch, filters],
  );

  useEffect(() => {
    getData(columnChart);
  }, [getData]);

  const data = results.map((item) => {
    return {
      type: getNameMonthByNumber(item.type),
      sales: item.sales,
    };
  });

  const config: ColumnConfig = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    columnStyle: {
      cursor: 'pointer',
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Месяц',
      },
      sales: {
        alias: 'Количество',
      },
    },
  };

  return (
    <Container>
      <Title>{getTitleForColumnChartMonth(columnChart)}</Title>
      <Column {...config} />
    </Container>
  );
};

export default ColumnChartMonth;
