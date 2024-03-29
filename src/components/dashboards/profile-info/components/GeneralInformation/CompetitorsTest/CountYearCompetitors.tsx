import React from 'react';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import { useQuery } from '@tanstack/react-query';
import competitorsService from '@app/services/competitors.service';

type MyComponentsProps = {
  settlement: string;
  typeActivity: string;
};

const CountYearCompetitors: React.FC<MyComponentsProps> = ({ settlement, typeActivity }) => {
  const { data } = useQuery({
    queryKey: ['countYearCompetitors'],
    queryFn: () => competitorsService.getCountYear(settlement, typeActivity),
    select: ({ data }) => data,
    enabled: Boolean(settlement.length) && Boolean(typeActivity.length),
  });

  return (
    <Block>
      <Title>Количество созданных за год</Title>
      <Content>{data?.count}</Content>
    </Block>
  );
};

export default CountYearCompetitors;
