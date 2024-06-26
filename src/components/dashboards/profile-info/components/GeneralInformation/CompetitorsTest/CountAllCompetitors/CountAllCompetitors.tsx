import React from 'react';
import { Block } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import { useQuery } from '@tanstack/react-query';
import competitorsService from '@app/services/competitors.service';
import { CompetitorsProps } from '@app/components/dashboards/profile-info/components/GeneralInformation/CompetitorsTest/types/CompetitorsType';
import * as S from '../style/CompetitorStyles';

const CountAllCompetitors: React.FC<CompetitorsProps> = ({ settlement, typeActivity, setCount }) => {
  const { data } = useQuery({
    queryKey: [competitorsService.COMPETITORS_KEY.COUNT_ALL, settlement, typeActivity],
    queryFn: () => competitorsService.getCountAll(settlement, typeActivity),
    select: ({ data }) => {
      if (setCount) {
        setCount(data.count);
      }
      return data;
    },
    enabled: Boolean(settlement.length) && Boolean(typeActivity.length),
  });

  return (
    <>
      {data && (
        <Block>
          <S.Title>Всего</S.Title>
          <S.Content>{data?.count - 1}</S.Content>
        </Block>
      )}
    </>
  );
};

export default CountAllCompetitors;
