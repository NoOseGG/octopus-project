import React, { useEffect } from 'react';
import { Column } from '@ant-design/plots';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import styled from 'styled-components';
import { getEntityName, getNameMonthByNumber } from '@app/utils/utils';
import { ColumnConfig } from '@ant-design/charts';
import { DashboardProps } from '@app/components/dashboards/dashboard/DashboardTypes';
import { doGetDataForColumnChart } from '@app/store/slices/legalEntityDashboard/charts/createdColumnChart';
import { Spin } from 'antd';
import { SpinnerSpace } from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivitiesStyle';

const ColumnChartMonth: React.FC<DashboardProps> = ({ legal_entity }) => {
  const { results, loading } = useAppSelector((state) => state.charts.createdColumnChart);
  const entity = getEntityName(legal_entity);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetDataForColumnChart({ filters, legal_entity }));
  }, [dispatch, filters, legal_entity]);

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
    <>
      {loading ? (
        <SpinnerSpace style={{ marginTop: 100 }}>
          <Spin size="large" />
        </SpinnerSpace>
      ) : (
        <Container>
          <Title>Динамика регистрации {entity} по месяцам</Title>
          <Column {...config} />
        </Container>
      )}
    </>
  );
};

export default ColumnChartMonth;

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
