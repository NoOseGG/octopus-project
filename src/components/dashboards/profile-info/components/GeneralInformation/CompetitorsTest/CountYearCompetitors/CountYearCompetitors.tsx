import React from 'react';
import { Block } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import { useQuery } from '@tanstack/react-query';
import competitorsService from '@app/services/competitors.service';
import { CompetitorsProps } from '@app/components/dashboards/profile-info/components/GeneralInformation/CompetitorsTest/types/CompetitorsType';
import * as S from '../style/CompetitorStyles';

const CountYearCompetitors: React.FC<CompetitorsProps> = ({ settlement, typeActivity }) => {
  const { data } = useQuery({
    queryKey: [competitorsService.COMPETITORS_KEY.COUNT_YEAR, settlement, typeActivity],
    queryFn: () => competitorsService.getCountYear(settlement, typeActivity),
    select: ({ data }) => data,
    enabled: Boolean(settlement.length) && Boolean(typeActivity.length),
  });

  return (
    <Block>
      <S.Title>Год</S.Title>
      <S.Content>+{data?.count}</S.Content>
    </Block>
  );
};

export default CountYearCompetitors;
