import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import KindIndicator from '@app/components/dashboards/profile-info/components/GeneralInformation/LevelOfReliability/KindIndicator';
import MinMaxRating from '@app/components/dashboards/profile-info/components/GeneralInformation/LevelOfReliability/MinMaxRating';
import styled from 'styled-components';

const LevelOfReliability: React.FC = () => {
  return (
    <>
      <Container>
        <KindIndicator />
        <MinMaxRating />
      </Container>
      <S.MyDivider />
    </>
  );
};

export default LevelOfReliability;

const Container = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
`;
