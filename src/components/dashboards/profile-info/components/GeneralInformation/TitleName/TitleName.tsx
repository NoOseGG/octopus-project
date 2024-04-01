import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '@app/hooks/reduxHooks';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';

const TitleName: React.FC = () => {
  const names = useAppSelector((state) => state.searchProfile.profile.names);

  if (Boolean(names[0]?.full_name !== null))
    return (
      <>
        <Title>{names[0]?.full_name}</Title>
        <S.MyDivider />
      </>
    );
  return names[0]?.short_name ? (
    <TitleNameContainer>
      <Title>{names[0].short_name}</Title>
    </TitleNameContainer>
  ) : null;
};

export default TitleName;

const TitleNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: 700;
  margin: 0;
`;
