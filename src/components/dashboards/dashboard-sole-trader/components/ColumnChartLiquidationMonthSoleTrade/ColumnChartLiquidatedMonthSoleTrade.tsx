import React, { useEffect } from 'react';
import { Column } from '@ant-design/plots';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import styled from 'styled-components';
import { getNameMonthByNumber } from '@app/utils/utils';
import { ColumnConfig } from '@ant-design/charts';
import { doGetDataForColumnChartLiquidatedSoleTrade } from '@app/store/slices/dashboardSoleTrader/liquidatedMainInfoSoleTradeSlice';

const ColumnChartLiquidatedMonthSoleTrade: React.FC = () => {
  const columnChart = useAppSelector((state) => state.liquidatedMainInfoSoleTrade.columnChart);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetDataForColumnChartLiquidatedSoleTrade(filters));
  }, [dispatch, filters]);

  const data = columnChart.results.map((item) => {
    return {
      type: getNameMonthByNumber(item.group_fields.company_date_registration__month),
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
