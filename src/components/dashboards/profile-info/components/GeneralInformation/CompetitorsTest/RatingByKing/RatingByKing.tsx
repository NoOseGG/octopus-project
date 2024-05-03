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
      {typeActivity && region && unn && <RatingRegion typeActivity={typeActivity} region={region} unn={unn} />}
      {typeActivity && settlement && unn && (
        <RatingSettlement typeActivity={typeActivity} settlement={settlement} unn={unn} />
      )}
    </Container>
  );
};

export default RatingByKing;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  margin-bottom: 20px;
`;
