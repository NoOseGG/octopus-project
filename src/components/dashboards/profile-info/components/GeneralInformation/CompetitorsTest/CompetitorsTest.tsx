import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';

import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import styled from 'styled-components';

import CountYearCompetitors from '@app/components/dashboards/profile-info/components/GeneralInformation/CompetitorsTest/CountYearCompetitors/CountYearCompetitors';
import CountAllCompetitors from '@app/components/dashboards/profile-info/components/GeneralInformation/CompetitorsTest/CountAllCompetitors/CountAllCompetitors';
import CountQuarterCompetitors from '@app/components/dashboards/profile-info/components/GeneralInformation/CompetitorsTest/CountQuarterCompetitors/CountQuarterCompetitors';
import { GridProps } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import CompetitorsByMonth from '@app/components/dashboards/profile-info/components/GeneralInformation/CompetitorsTest/CompetitorsByMonth/CompetitorsByMonth';
import CompetitorsDetailed from '@app/components/dashboards/profile-info/components/GeneralInformation/CompetitorsTest/CompetitorsDetailed/CompetitorsDetailed';
import CompetitorsByAge from '@app/components/dashboards/profile-info/components/GeneralInformation/CompetitorsTest/CompetitorsByAge/CompetitorsByAge';
import { useQuery } from '@tanstack/react-query';
import competitorsService from '@app/services/competitors.service';

const CompetitorsTest: React.FC = () => {
  const settlement = useAppSelector((state) => state.searchProfile.profile?.addresses[0]?.settlement);
  const typeActivity = useAppSelector((state) => state.searchProfile.profile?.types_activities[0]?.name);

  const { data } = useQuery({
    queryKey: [competitorsService.COMPETITORS_KEY.COUNT_ALL, settlement, typeActivity],
    queryFn: () => competitorsService.getCountAll(settlement, typeActivity),
    enabled: Boolean(settlement) && Boolean(typeActivity),
  });

  return (
    <Container>
      {settlement && typeActivity && data?.data.count !== -1 && (
        <>
          <S.Title>Действующие конкуренты в населенном пункте с аналогичным видом деятельности</S.Title>
          {data?.data.count === 1 || data?.data.count === 0 ? (
            <Text>Действующие конкуренты отсутсвуют</Text>
          ) : (
            <>
              <CountContainer value={false}>
                <CountAllCompetitors count={data?.data.count ?? 0} />
                <CountYearCompetitors settlement={settlement} typeActivity={typeActivity} />
                <CountQuarterCompetitors settlement={settlement} typeActivity={typeActivity} />
              </CountContainer>
              <CompetitorsDetailed settlement={settlement} typeActivity={typeActivity} />
              <ChartContainer>
                <CompetitorsByAge settlement={settlement} typeActivity={typeActivity} />
                <CompetitorsByMonth settlement={settlement} typeActivity={typeActivity} />
              </ChartContainer>
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default CompetitorsTest;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChartContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const CountContainer = styled.div<GridProps>`
  margin-top: 10px;
  gap: 15px;
  display: flex;
  align-content: stretch;
  justify-content: space-around;
`;

const Text = styled.div`
  font-size: 0.9374rem;
  margin-bottom: 20px;
  color: green;
`;
