import React from 'react';
import { UserModel } from '@app/domain/UserModel';
import * as S from './ProfileInfo.styles';

interface ProfileInfoProps {
  profileData: UserModel | null;
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({ profileData }) => {
  return profileData ? (
    <S.Wrapper>
      {/*<S.ImgWrapper>*/}
      {/*  <Avatar shape="circle" src={profileData?.avatar} alt="Profile" />*/}
      {/*</S.ImgWrapper>*/}
      <S.Title>{`${profileData?.first_name} ${profileData?.last_name}`}</S.Title>
      <S.Subtitle>{profileData?.email}</S.Subtitle>
      {/*<S.FullnessWrapper>*/}
      {/*  <S.FullnessLine width={fullness}>{fullness}%</S.FullnessLine>*/}
      {/*</S.FullnessWrapper>*/}
      {/*<S.Text>{t('profile.fullness')}</S.Text>*/}
    </S.Wrapper>
  ) : null;
};
