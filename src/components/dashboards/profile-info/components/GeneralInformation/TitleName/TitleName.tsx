import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '@app/hooks/reduxHooks';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import Favourite from '@app/components/dashboards/profile-info/components/components/Buttons/Favourite/Favourite';

const TitleName: React.FC = () => {
  const names = useAppSelector((state) => state.searchProfile.profile.names);
  const unn = useAppSelector((state) => state.searchProfile.profile.unn);

  if (Boolean(names[0]?.full_name !== null))
    return (
      <>
        <Title>{names[0]?.full_name}</Title>
        {unn && (
          <FavouriteWrapper>
            <Favourite unn={unn} />
          </FavouriteWrapper>
        )}
        <S.MyDivider />
      </>
    );
  return names[0]?.short_name ? (
    <TitleNameContainer>
      <Title>{names[0].short_name}</Title>
      {unn && (
        <FavouriteWrapper>
          <Favourite unn={unn} />
        </FavouriteWrapper>
      )}
      <S.MyDivider />
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

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const FavouriteWrapper = styled.div`
  margin-top: 10px;
  width: 200px;
  display: none;

  @media (max-width: 1150px) {
    display: block;
  }
`;
