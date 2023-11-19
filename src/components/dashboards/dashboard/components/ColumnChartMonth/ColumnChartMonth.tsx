import React, { useEffect } from 'react';
import { Column } from '@ant-design/plots';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Container, Title } from '@app/components/dashboards/dashboard/styles/ChartsStyle';
import { getNameMonthByNumber } from '@app/utils/utils';
import { ColumnConfig } from '@ant-design/charts';
import { doGetDataForColumnChart } from '@app/store/slices/legalEntityDashboard/charts/created/createdColumnChartSlice';

const ColumnChartMonth: React.FC = () => {
  const { results } = useAppSelector((state) => state.charts.createdColumnChart);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetDataForColumnChart({ filters }));
  }, [dispatch, filters]);

  const data = results.map((item) => {
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
      <Title>Динамика регистрации компаний по месяцам</Title>
      <Column {...config} />
    </Container>
  );
};

export default ColumnChartMonth;
