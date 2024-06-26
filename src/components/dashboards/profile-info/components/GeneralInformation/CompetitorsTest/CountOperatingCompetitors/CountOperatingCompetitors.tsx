import React from 'react';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import { useQuery } from '@tanstack/react-query';
import competitorsService from '@app/services/competitors.service';
import { CompetitorsProps } from '@app/components/dashboards/profile-info/components/GeneralInformation/CompetitorsTest/types/CompetitorsType';

const CountAllCompetitors: React.FC<CompetitorsProps> = ({ settlement, typeActivity }) => {
  const { data } = useQuery({
    queryKey: [competitorsService.COMPETITORS_KEY.COUNT_OPERATING, settlement, typeActivity],
    queryFn: () => competitorsService.getCountOperating(settlement, typeActivity),
    select: ({ data }) => data,
    enabled: Boolean(settlement.length) && Boolean(typeActivity.length),
  });

  return (
    <Block>
      <Title>Действующие</Title>
      <Content>{data?.count}</Content>
    </Block>
  );
};

export default CountAllCompetitors;
