import React from 'react';
import { useQuery } from '@tanstack/react-query';
import competitorsService from '@app/services/competitors.service';
import { ColumnConfig } from '@ant-design/charts';
import { Column } from '@ant-design/plots';
import { getNameMonthByNumber } from '@app/utils/utils';
import { ColumnChart, ColumnChartObject } from '@app/interfaces/interfaces';
import styled from 'styled-components';

import { CompetitorsProps } from '@app/components/dashboards/profile-info/components/GeneralInformation/CompetitorsTest/types/CompetitorsType';
const sortingData = (data: ColumnChartObject[]) => {
  const sorted = data.map((item) => {
    return {
      type: item.group_fields.company_date_registration__month,
      sales: item.Count,
    };
  });

  return sortDataByMonth(sorted).map((item) => {
    return {
      type: getNameMonthByNumber(item.type),
      sales: item.sales,
    };
  });
};

const CompetitorsByMonth: React.FC<CompetitorsProps> = ({ settlement, typeActivity }) => {
  const { data } = useQuery({
    queryKey: [competitorsService.COMPETITORS_KEY.BY_MONTH, settlement, typeActivity],
    queryFn: () => competitorsService.getDataByMonth(settlement, typeActivity),
    select: ({ data }) => sortingData(data.results),
    enabled: Boolean(settlement.length) && Boolean(typeActivity.length),
  });

  const config: ColumnConfig = {
    data: data ? data : [],
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

  return Boolean(data?.length) ? (
    <CompetitorsByMonthContainer>
      <Column {...config} />{' '}
    </CompetitorsByMonthContainer>
  ) : null;
};

export default CompetitorsByMonth;

const sortDataByMonth = (data: ColumnChart[]): ColumnChart[] => {
  data.sort((a, b) => a.type - b.type);

  while (data.length > 0 && data[0].type !== undefined && data[0].type < 6) {
    const first = data.shift();
    if (first !== undefined) {
      data.push(first);
    }
  }

  return data;
};

const CompetitorsByMonthContainer = styled.div`
  height: 300px;
  width: 50%;
`;
