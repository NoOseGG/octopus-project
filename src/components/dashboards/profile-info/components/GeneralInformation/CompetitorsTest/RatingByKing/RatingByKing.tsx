import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '@app/hooks/reduxHooks';
import RatingAll from '@app/components/dashboards/profile-info/components/GeneralInformation/CompetitorsTest/RatingByKing/RatingAll/RatingAll';
import RatingRegion from '@app/components/dashboards/profile-info/components/GeneralInformation/CompetitorsTest/RatingByKing/RatingRegion/RatingRegion';
import RatingSettlement from '@app/components/dashboards/profile-info/components/GeneralInformation/CompetitorsTest/RatingByKing/RatingSettlement/RatingSettlement';

const RatingByKing: React.FC = () => {
  const unn = useAppSelector((state) => state.searchProfile.profile.unn);
  const typeActivity = useAppSelector((state) => state.searchProfile.profile.types_activities[0].name);
  const region = useAppSelector((state) => state.searchProfile.profile.addresses[0].region);
  const settlement = useAppSelector((state) => state.searchProfile.profile.addresses[0].settlement);

  return (
    <Container>
      {typeActivity && unn && <RatingAll typeActivity={typeActivity} unn={unn} />}
      <RatingRegion typeActivity={typeActivity} region={region} />
      <RatingSettlement typeActivity={typeActivity} settlement={settlement} />
    </Container>
  );
};

export default RatingByKing;

const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
