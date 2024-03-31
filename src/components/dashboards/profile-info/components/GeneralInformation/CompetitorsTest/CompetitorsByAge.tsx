import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import competitorsService from '@app/services/competitors.service';
import { Line, LineConfig } from '@ant-design/charts';
import { LineChartObject } from '@app/interfaces/interfaces';
import styled from 'styled-components';

type MyComponentsProps = {
  settlement: string;
  typeActivity: string;
};

const CompetitorsByAge: React.FC<MyComponentsProps> = ({ settlement, typeActivity }) => {
  const { data } = useQuery({
    queryKey: ['byAgeCompetitors', settlement, typeActivity],
    queryFn: () => competitorsService.getDataByAge(settlement, typeActivity),
    select: ({ data }) => sortingData(data.results),
    enabled: Boolean(settlement.length) && Boolean(typeActivity.length),
  });

  const sortingData = (data: LineChartObject[]) => {
    return data.map((item) => {
      return {
        year: item.group_fields.company_date_registration__year,
        value: item.Count,
      };
    });
  };

  useEffect(() => {
    console.log(JSON.stringify(data));
  }, [data]);

  const config: LineConfig = {
    data: data ? data : [],
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

  return Boolean(data?.length) ? (
    <CompetitorsByAgeContainer>
      <Line {...config}></Line>
    </CompetitorsByAgeContainer>
  ) : null;
};

export default CompetitorsByAge;

const CompetitorsByAgeContainer = styled.div`
  width: 50%;
`;
