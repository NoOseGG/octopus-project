import React, { useState } from 'react';
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

const CompetitorsTest: React.FC = () => {
  const addresses = useAppSelector((state) => state.searchProfile.profile.addresses);
  const typeActivities = useAppSelector((state) => state.searchProfile.profile.types_activities);
  const [countCompany, setCountCompany] = useState(0);

  return (
    <Container>
      {addresses[0]?.settlement && typeActivities[0]?.name && countCompany !== -1 && (
        <>
          <S.Title>Действующие конкуренты в населенном пункте с аналогичным видом деятельности</S.Title>
          {countCompany === 1 ? (
            <Text>Действующие конкуренты отсутсвуют</Text>
          ) : (
            <>
              <CountContainer value={false}>
                <CountAllCompetitors
                  settlement={addresses[0]?.settlement}
                  typeActivity={typeActivities[0]?.name}
                  setCount={setCountCompany}
                />
                <CountYearCompetitors settlement={addresses[0]?.settlement} typeActivity={typeActivities[0]?.name} />
                <CountQuarterCompetitors settlement={addresses[0]?.settlement} typeActivity={typeActivities[0]?.name} />
              </CountContainer>
              <CompetitorsDetailed settlement={addresses[0]?.settlement} typeActivity={typeActivities[0]?.name} />
              <ChartContainer>
                <CompetitorsByAge settlement={addresses[0]?.settlement} typeActivity={typeActivities[0]?.name} />
                <CompetitorsByMonth settlement={addresses[0]?.settlement} typeActivity={typeActivities[0]?.name} />
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
  font-size: 24px;
  margin-bottom: 20px;
  color: green;
`;
