import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '@app/hooks/reduxHooks';

import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';

import RatingAll from '@app/components/dashboards/profile-info/components/GeneralInformation/RatingByKind/RatingAll/RatingAll';
import RatingRegion from '@app/components/dashboards/profile-info/components/GeneralInformation/RatingByKind/RatingRegion/RatingRegion';
import RatingSettlement from '@app/components/dashboards/profile-info/components/GeneralInformation/RatingByKind/RatingSettlement/RatingSettlement';

const RatingByKing: React.FC = () => {
  const unn = useAppSelector((state) => state.searchProfile.profile.unn);
  const typeActivity = useAppSelector((state) => state.searchProfile.profile.types_activities[0]?.name);
  const region = useAppSelector((state) => state.searchProfile.profile.addresses[0]?.region);
  const settlement = useAppSelector((state) => state.searchProfile.profile.addresses[0]?.settlement);

  return (
    <>
      {typeActivity && (
        <Container>
          <S.Title>Позиция среди компаний с аналогичным видом деятельности</S.Title>
          {typeActivity && settlement && unn && (
            <RatingSettlement typeActivity={typeActivity} settlement={settlement} unn={unn} />
          )}
          <RatingContainer>
            {typeActivity && region && unn && <RatingRegion typeActivity={typeActivity} region={region} unn={unn} />}
            {typeActivity && unn && <RatingAll typeActivity={typeActivity} unn={unn} />}
          </RatingContainer>
          <S.MyDivider />
        </Container>
      )}
    </>
  );
};

export default RatingByKing;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const RatingContainer = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
`;
