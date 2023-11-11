import React, { useEffect } from 'react';
import { Column } from '@ant-design/plots';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Container, Title } from '@app/components/dashboards/dashboard/styles/ChartsStyle';
import { getNameMonthByNumber } from '@app/utils/utils';
import { ColumnConfig } from '@ant-design/charts';
import { doGetDataForLiquidatedColumnChartSoleTrade } from '@app/store/slices/soleTradeDashboard/charts/liquidatedColumnChartSoleTradeSlice';

const ColumnChartLiquidatedMonthSoleTrade: React.FC = () => {
  const { results } = useAppSelector((state) => state.chartsSoleTrade.liquidatedColumnChartSoleTrade);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetDataForLiquidatedColumnChartSoleTrade({ filters }));
  }, [dispatch, filters]);

  const data = results.map((item) => {
    return {
      type: getNameMonthByNumber(item.group_fields.company_status_from_dttm__month),
      sales: item.Count,
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
      <Title>Динамика ликвидаций ИП по месяцам</Title>
      <Column {...config} />
    </Container>
  );
};

export default ColumnChartLiquidatedMonthSoleTrade;
