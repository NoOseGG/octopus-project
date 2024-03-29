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
    queryKey: ['countQuarterCompetitors'],
    queryFn: () => competitorsService.getCountQuarter(settlement, typeActivity),
    select: ({ data }) => data,
    enabled: Boolean(settlement.length) && Boolean(typeActivity.length),
  });

  return (
    <Block>
      <Title>Квартал</Title>
      <Content>{data?.count}</Content>
    </Block>
  );
};

export default CountYearCompetitors;
