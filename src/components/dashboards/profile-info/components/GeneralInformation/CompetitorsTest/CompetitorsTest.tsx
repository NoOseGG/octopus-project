import React, { useEffect } from 'react';
import CountYearCompetitors from '@app/components/dashboards/profile-info/components/GeneralInformation/CompetitorsTest/CountYearCompetitors';
import { useAppSelector } from '@app/hooks/reduxHooks';
import CountAllCompetitors from '@app/components/dashboards/profile-info/components/GeneralInformation/CompetitorsTest/CountAllCompetitors';
import CountQuarterCompetitors from '@app/components/dashboards/profile-info/components/GeneralInformation/CompetitorsTest/CountQuarterCompetitors';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import styled from 'styled-components';
import { GridProps } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import CountOperatingCompetitors from '@app/components/dashboards/profile-info/components/GeneralInformation/CompetitorsTest/CountOperatingCompetitors';
import CompetitorsByMonth from '@app/components/dashboards/profile-info/components/GeneralInformation/CompetitorsTest/CompetitorsByMonth';

const CompetitorsTest: React.FC = () => {
  const addresses = useAppSelector((state) => state.searchProfile.profile.addresses);
  const typeActivities = useAppSelector((state) => state.searchProfile.profile.types_activities);

  useEffect(() => {
    console.log(addresses[0]?.settlement);
  }, [addresses]);

  return (
    <Container>
      <S.Title>Действующие конкуренты в населенном пункте с аналогичным видом деятельности</S.Title>
      {addresses[0]?.settlement && typeActivities[0]?.name && (
        <>
          <CountContainer value={false}>
            <CountAllCompetitors settlement={addresses[0]?.settlement} typeActivity={typeActivities[0]?.name} />
            <CountYearCompetitors settlement={addresses[0]?.settlement} typeActivity={typeActivities[0]?.name} />
            <CountQuarterCompetitors settlement={addresses[0]?.settlement} typeActivity={typeActivities[0]?.name} />
            <CountOperatingCompetitors settlement={addresses[0]?.settlement} typeActivity={typeActivities[0]?.name} />
          </CountContainer>
          <CompetitorsByMonth settlement={addresses[0]?.settlement} typeActivity={typeActivities[0]?.name} />
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

export const CountContainer = styled.div<GridProps>`
  margin-top: 10px;
  gap: 15px;
  display: flex;
  align-content: stretch;
  justify-content: space-around;
`;
