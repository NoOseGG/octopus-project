import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doSearchProfile } from '@app/store/slices/search/searchProfileSlice';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import MainInfo from '@app/components/dashboards/profile-info/components/MainInfo/MainInfo';
import Description from '@app/components/dashboards/profile-info/components/Description/Description';
import Contacts from '@app/components/dashboards/profile-info/components/Contacts/Contacts';

const ProfileInfo: React.FC = () => {
  const { unn } = useParams();
  const { loading, error } = useAppSelector((state) => state.searchProfile);
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      if (typeof unn === 'string') {
        dispatch(doSearchProfile(unn));
      }
    } catch (error) {
      console.log(error);
    }
  }, [unn, dispatch]);

  return (
    <ProfileRow>
      <LeftCol span={20}>
        <Description />
        <MainInfo />
        <Contacts />
      </LeftCol>
      <RightCol span={4}></RightCol>
    </ProfileRow>
  );
};

export default ProfileInfo;

const ProfileRow = styled(Row)`
  margin-inline: 100px;
`;

const LeftCol = styled(Col)``;

const RightCol = styled(Col)`
  background-color: green;
`;
